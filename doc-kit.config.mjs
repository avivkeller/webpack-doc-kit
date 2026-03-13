import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  global: {
    repository: "webpack/webpack",
  },
  web: {
    title: "webpack",
    imports: {
      "#config/Logo": resolve(__dirname, "plugins/theme/ui/WebpackLogo.jsx"),
    },
  },
};
