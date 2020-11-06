const fs = require('fs');
// const map = new Map();
module.exports = (dts, { classes, fileName }) => {
	let def = '';
	Object.keys(classes).forEach((klass) => {
		def += `export const ${klass}: string;
`;
	});
	// const existing = map.get(fileName);
	// if (existing !== def) {
		fs.writeFileSync(`${fileName}.d.ts`, def);
	// }
	// map.set(filename, existing);
	return def;
};
