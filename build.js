const { build } = require('esbuild');
const fs = require('fs');
const util = require('util');
const path = require('path');
const postcss = require('postcss');
const cssModules = require('postcss-modules');
const copyAssets = require('postcss-copy-assets');
const atImport = require('postcss-import');
const hasLoader = require('@dojo/webpack-contrib/static-build-loader/loader');
const features = require('@dojo/webpack-contrib/static-build-loader/features/modern.json');
const output = 'dist';
const src = 'src';
const entry = 'main';
const css = () => {
	let cssOutput = '';
	return {
		name: 'css-plugin',
		output() {
			return cssOutput;
		},
		setup(build) {
			build.onLoad({ filter: /\.css/ }, async (args) => {
				// if (args.path.indexOf('node_modules') > -1) {
				// 	console.log(args.path);
				// 	const contents = await util.promisify(fs.readFile)(args.path, 'utf8');
				// 	return { contents, loader: 'default' };
				// }
				const source = await util.promisify(fs.readFile)(args.path, 'utf8');
				const jsExists = fs.existsSync(`${args.path}.js`);
				let contents = '';
				if (jsExists) {
					contents = await util.promisify(fs.readFile)(`${args.path}.js`, 'utf8');
				}
				const relative = path.relative(process.cwd(), args.path);
				const plugins = jsExists
					? [atImport(), copyAssets({ base: output })]
					: [atImport(), cssModules({ getJSON: () => {} }), copyAssets({ base: output })];
				const result = await postcss(plugins).process(source, {
					from: args.path,
					to: `${output}/${entry}.css`,
				});

				cssOutput += `
/* ${relative} */
${result.css}`;
				if (!jsExists) {
					let exportTokens = {};
					result.messages.forEach((message) => {
						if (message.plugin === 'postcss-modules') {
							exportTokens = message.exportTokens;
						}
					});
					Object.keys(exportTokens).forEach((key) => {
						key = key.replace(/-(.){1}/g, (match, offset, string) => offset.toUpperCase());
						contents += `export const ${key} = '${exportTokens[key]}';`;
					});
				}
				return { contents, loader: 'js' };
			});
		},
	};
};
const has = () => {
	return {
		name: 'has-plugin',
		setup(build) {
			build.onLoad({ filter: /\.mjs/ }, async (args) => {
				let source = await util.promisify(fs.readFile)(args.path, 'utf8');
				source = hasLoader.default.bind({
					query: {
						features: {
							...features,
							'dojo-debug': false,
							'cldr-elide': true,
							'build-time-rendered': false,
							test: false,
							'build-elide': true,
						},
					},
				})(source);
				return { contents: source, loader: 'default' };
			});
		},
	};
};
const cssPlugin = css();
const hasPlugin = has();
build({
	entryPoints: [`./${src}/${entry}.tsx`],
	outfile: `./${output}/${entry}.js`,
	format: 'iife',
	bundle: true,
	sourcemap: true,
	inject: [`./${src}/${entry}.css`],
	loader: {
		'.png': 'file',
		'.jpg': 'file',
		'.gif': 'file',
		'.svg': 'file',
		'.ttf': 'file',
		'.woff': 'file',
		'.woff2': 'file',
	},
	plugins: [hasPlugin, cssPlugin],
})
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.then((args) => {
		let index = fs.readFileSync(`./${src}/index.html`, 'utf-8');
		index = index.replace(
			'</head>',
			`<link rel="stylesheet" href="./main.css">
</head>`
		);
		index = index.replace(
			'</body>',
			`<script async src="./main.js"></script>
</body>`
		);
		fs.writeFileSync(`./${output}/${entry}.css`, cssPlugin.output());
		fs.writeFileSync(`./${output}/index.html`, index);
		console.log('finished');
	});
