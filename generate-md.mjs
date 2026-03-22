import { Application } from "typedoc";
import { major } from "semver";

let webpack;
try {
  webpack = (await import("./webpack/package.json", { with: { type: "json" } })).default;
} catch (e) {
  console.error("\n❌ ERROR: Sibling './webpack' directory not found.");
  console.error("Please checkout webpack/webpack next to this repository to generate docs.\n");
  process.exit(1);
}

const app = await Application.bootstrapWithPlugins({
  entryPoints: ["./webpack/types.d.ts"],
  out: `pages/v${major(webpack.version)}.x`,

  // Plugins
  plugin: [
    "typedoc-plugin-markdown",
    "./plugins/processor.mjs",
    "./plugins/theme/index.mjs",
  ],
  theme: "doc-kit",

  // Formatting
  hideGroupHeadings: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  disableSources: true,

  router: "module",
  entryFileName: "index",

  tsconfig: "tsconfig.json",
});

const project = await app.convert();

if (project) {
  await app.generateOutputs(project);
}
