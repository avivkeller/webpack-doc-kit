import { Application } from "typedoc";
import webpack from "./webpack/package.json" with { type: "json" };
import { major } from "semver";

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
