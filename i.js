const path = require("path");
const fs = require("fs");
const glob = require("glob");

const files = glob.sync("src/widgets/**/*", { nodir: true });

let widgets = `
<Outlet id="main">
  {{
    main: (matchDetails) => {

`;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function camelize(str) {
  let arr = str.split("-");
  let capital = arr.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase()
  );
  let capitalString = capital.join("");
  return capitalString;
}

let imports = "";
let links = "";

files.forEach((file) => {
  const parsed = path.parse(path.resolve(__dirname, file));
  const widget = parsed.dir.split("/").pop();
  links = `${links}
<Link to="main" params={{ widget: '${widget}', example: '${parsed.name.toLowerCase()}'}}>${widget}/${parsed.name.toLowerCase()}</Link>`;
  imports = `${imports}
import ${toTitleCase(camelize(widget))}${
    parsed.name
  } from './widgets/${widget}/${parsed.name}';`;
  widgets = `${widgets}
if (matchDetails.params.widget === '${widget}' && matchDetails.params.example === '${parsed.name.toLowerCase()}') {
  return <${toTitleCase(camelize(widget))}${parsed.name} />;
}
  `;
});

widgets = `${widgets}
    }
  }}
</Outlet>`;

// console.log(imports);
console.log(links);
// console.log(widgets);
