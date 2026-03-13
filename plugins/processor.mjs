import { Converter, ReflectionKind, Renderer } from "typedoc";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Cleans and formats the TypeDoc URL for web compatibility.
 * @param {string} url - The raw URL from TypeDoc router.
 * @returns {string} The cleaned URL with single hash and .html extension.
 */
function cleanTypeDocUrl(url) {
  // Fix the extension: safely convert .md to .html
  // The regex `($|#)` ensures we only replace '.md' at the end of the string
  // or right before a hash fragment. This prevents accidental replacements
  // in filenames that contain '.md' in the middle (e.g., 'utils.md5.md').
  let cleanedUrl = url.replace(/\.md($|#)/, ".html$1");

  // Fix malformed URLs with multiple hash fragments (keep only the base path and the last hash)
  if (cleanedUrl.includes("#")) {
    const [basePath, ...hashParts] = cleanedUrl.split("#");
    cleanedUrl = `${basePath}#${hashParts[hashParts.length - 1]}`;
  }

  return cleanedUrl;
}
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    // Convert accessors to properties to simplify documentation
    context.project
      .getReflectionsByKind(ReflectionKind.Accessor)
      .forEach((accessor) => {
        accessor.kind = ReflectionKind.Property;
        if (accessor.getSignature) {
          accessor.type = accessor.getSignature.type;
          accessor.comment = accessor.getSignature.comment;
        } else if (accessor.setSignature) {
          accessor.type = accessor.setSignature.parameters?.[0]?.type;
          accessor.comment = accessor.setSignature.comment;
        }
      });

    // Merge `export=` namespaces into their parent
    context.project
      .getReflectionsByKind(ReflectionKind.Namespace)
      .filter((ref) => ref.name === "export=")
      .forEach((namespace) =>
        context.project.mergeReflections(namespace, namespace.parent),
      );
  });

  app.renderer.on(Renderer.EVENT_END, (context) => {
    const typeMap = {};

    // Retrieve all types and classes (reflections) present in the project
    const reflections = context.project.getReflectionsByKind(
      ReflectionKind.All,
    );

    for (const ref of reflections) {
      // Ignore reflections that do not have an associated page or URL
      if (!app.renderer.router.hasUrl(ref)) continue;

      let url = app.renderer.router.getFullUrl(ref);

      url = cleanTypeDocUrl(url);

      // Resolve missing types: register both the short name and the full name
      const shortName = ref.name;
      const fullName = ref.getFullName();

      // Register the short name only if it doesn't exist (prioritizing base types over nested ones)
      if (!typeMap[shortName]) {
        typeMap[shortName] = url;
      }

      // Always register the full name in case JSDoc references it explicitly
      typeMap[fullName] = url;
    }

    writeFileSync(
      join(app.options.getValue("out"), "type-map.json"),
      JSON.stringify(typeMap, null, 2),
    );
  });
}
