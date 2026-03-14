import { ReflectionKind } from "typedoc";
import * as typePartials from "./types.mjs";

const KIND_PREFIX = {
  [ReflectionKind.Class]: "Class",
  [ReflectionKind.Interface]: "Interface",
  [ReflectionKind.Enum]: "Enum",
  [ReflectionKind.TypeAlias]: "Type",
  [ReflectionKind.Namespace]: "Namespace",
  [ReflectionKind.Constructor]: "Constructor",
  [ReflectionKind.Accessor]: "Accessor",
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: "Static method",
};

export const getMemberPrefix = (model) => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : "";
};

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default (ctx) => {
  const baseComment = ctx.partials.comment;

  return {
    ...ctx.partials,
    ...typePartials,

    comment(model, options) {
      return (
        baseComment.call(ctx, model, { ...options, showTags: false }) +
        ctx.helpers.renderExamples(model, options?.headingLevel)
      );
    },

    signature(model, options) {
      const comment = options.multipleSignatures
        ? model.comment
        : model.comment || model.parent?.comment;
      const stability = ctx.helpers.stabilityBlockquote(comment);
      return [
        stability,
        stability && "",
        model.typeParameters?.length &&
          ctx.partials.typeParametersList(model.typeParameters, {
            headingLevel: options.headingLevel,
          }),
        model.parameters?.length &&
          ctx.partials.parametersList(model.parameters, {
            headingLevel: options.headingLevel,
          }),
        ctx.helpers.typedListItem({
          label: "Returns",
          type: model.type ?? "void",
          comment: model.comment?.getTag("@returns"),
        }),
        "",
        comment &&
          baseComment.call(ctx, comment, {
            headingLevel: options.headingLevel,
            showTags: false,
          }),
        ctx.helpers.renderExamples(comment, options.headingLevel),
      ]
        .filter((x) => typeof x === "string" || Boolean(x))
        .join("\n");
    },

    memberTitle(model) {
      const prefix = getMemberPrefix(model);
      const params = model.signatures?.[0]?.parameters;

      if (!params) {
        return `${prefix}\`${model.name}\``;
      }

      const paramsString = params
        .map((param, index) => {
          const paramName = param.name;
          if (param.flags?.isOptional) {
            // For optional params, wrap comma + name in brackets (except for first param)
            return index === 0 ? `[${paramName}]` : `[, ${paramName}]`;
          } else {
            // For required params, add comma separator (except for first param)
            return index === 0 ? paramName : `, ${paramName}`;
          }
        })
        .join("");

      return `${prefix}\`${model.name}(${paramsString})\``;
    },

    parametersList: ctx.helpers.typedList,
    typedParametersList: ctx.helpers.typedList,
    typeDeclarationList: ctx.helpers.typedList,
    propertiesTable: ctx.helpers.typedList,
  };
};
