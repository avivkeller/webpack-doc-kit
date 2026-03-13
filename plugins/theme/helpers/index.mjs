/**
 * @typedef {object} TypedListEntry
 * @property {string} [label]
 * @property {string} [name]
 * @property {import("typedoc").SomeType | string} [type]
 * @property {import("typedoc").Comment | import("typedoc").CommentTag} [comment]
 */

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['helpers']}
 */
export default (ctx) => ({
  ...ctx.helpers,

  typedListItem({ label, name, type, comment }) {
    const namePart = label ? ` ${label}:` : name ? ` \`${name}\`` : "";

    const typePart = type
      ? ` ${typeof type === "string" ? type : ctx.partials.someType(type)}`
      : "";

    const descPart = comment
      ? ` ${ctx.helpers.getCommentParts(comment.summary ?? comment.content)}`
      : "";

    return `*${namePart}${typePart}${descPart}`;
  },

  typedList(entries) {
    return entries.map(ctx.helpers.typedListItem).join("\n");
  },
  
  buildConstructorTitle(model) {
    const params = model.signatures?.[0]?.parameters ?? [];
    const className = model.parent?.name ?? model.name;
    const allOptional =
      params.length > 0 && params.every((p) => p.flags?.isOptional);
    const paramStr = allOptional
      ? `[${params.map((p) => p.name).join(", ")}]`
      : params.map((p) => (p.flags?.isOptional ? `[${p.name}]` : p.name)).join(", ");
    return `\`new ${className}(${paramStr})\``;
  },
});
