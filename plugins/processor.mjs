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

    // Append examples to the body of members
    context.project
      .getReflectionsByKind(ReflectionKind.All)
      .forEach((reflection) => {
        if (reflection.comment) {
          const examples = reflection.comment.blockTags.filter(
            (tag) => tag.tag === "@example",
          );
          if (examples.length > 0) {
            if (reflection.comment.summary.length > 0) {
              reflection.comment.summary.push({ kind: "text", text: "\n\n" });
            }

            examples.forEach((example, index) => {
              reflection.comment.summary.push(...example.content);
              if (index < examples.length - 1) {
                reflection.comment.summary.push({ kind: "text", text: "\n\n" });
              }
            });

            reflection.comment.blockTags = reflection.comment.blockTags.filter(
              (tag) => tag.tag !== "@example",
            );
          }
        }
      });
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
