import { Converter, ReflectionKind, Renderer } from "typedoc";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
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
    const typeMap = Object.fromEntries(
      context.project
        .getReflectionsByKind(ReflectionKind.All)
        .filter((ref) => app.renderer.router.hasUrl(ref))
        .map((reference) => [
          reference.name,
          app.renderer.router.getFullUrl(reference).replace(".md", ".html"),
        ]),
    );

    writeFileSync(
      join(app.options.getValue("out"), "type-map.json"),
      JSON.stringify(typeMap, null, 2),
    );
  });
}
