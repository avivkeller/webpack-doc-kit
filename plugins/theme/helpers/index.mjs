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
  stabilityBlockquote(comment) {
    if (!comment) return null;
    const deprecated = comment.blockTags?.find((t) => t.tag === "@deprecated");
    const isExperimental =
      comment.modifierTags?.has("@experimental") ||
      comment.modifierTags?.has("@beta");
    const legacy = comment.blockTags?.find((t) => t.tag === "@legacy");

    if (deprecated) {
      const message = deprecated.content?.length
        ? ctx.helpers.getCommentParts(deprecated.content).trim()
        : "";
      return message
        ? `> Stability: 0 - Deprecated: ${message}`
        : `> Stability: 0 - Deprecated`;
    }
    if (isExperimental) {
      return `> Stability: 1 - Experimental`;
    }
    if (legacy) {
      const message = legacy.content?.length
        ? ctx.helpers.getCommentParts(legacy.content).trim()
        : "";
      return message
        ? `> Stability: 3 - Legacy: ${message}`
        : `> Stability: 3 - Legacy`;
    }
    return null;
  },
});
