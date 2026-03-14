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
      ? ` ${ctx.helpers.getCommentParts(comment.summary ?? comment.content)}${ctx.helpers.renderExamples(comment)}`
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

  /**
   * Renders `@example` tags from a comment as Markdown.
   * Pass `headingLevel` to prepend a heading (block context);
   * omit it for inline use (e.g. inside a list item).
   * Always returns a string never `null`.
   *
   * @param {import("typedoc").Comment | import("typedoc").CommentTag | null | undefined} comment
   * @param {number} [headingLevel]
   * @returns {string}
   */
  renderExamples(comment, headingLevel) {
    const examples =
      comment?.blockTags?.filter((t) => t.tag === "@example") ?? [];
    if (!examples.length) return "";
    const bodies = examples
      .map((tag) => {
        const body = ctx.helpers.getCommentParts(tag.content).trim();
        if (!body) return null;
        if (headingLevel != null) {
          const prefix = "#".repeat(headingLevel + 1);
          const suffix =
            examples.length > 1 ? ` ${examples.indexOf(tag) + 1}` : "";
          return `${prefix} Example${suffix}\n\n${body}`;
        }
        return body;
      })
      .filter(Boolean);
    return bodies.length ? "\n\n" + bodies.join("\n\n") : "";
  },
});
