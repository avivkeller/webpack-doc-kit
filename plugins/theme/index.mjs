import { ReflectionKind } from "typedoc";
import * as typePartials from "./types.mjs";

const KIND_PREFIX = {
  [ReflectionKind.Class]: "Class",
  [ReflectionKind.Interface]: "Interface",
  [ReflectionKind.Enum]: "Enum",
  [ReflectionKind.TypeAlias]: "Type",
  [ReflectionKind.Namespace]: "Namespace",
  [ReflectionKind.Accessor]: "Accessor",
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: "Static method",
};

// ✅ Improved version (safe + readable + PR-ready)
const formatParams = (params = []) =>
  params
    .map((param) => {
      if (!param || !param.name) return "";

      const name = param.name;

      const type =
        param.type && typeof param.type.toString === "function"
          ? `: ${param.type.toString()}`
          : "";

      const hasDefault =
        param.defaultValue !== undefined &&
        param.defaultValue !== null &&
        param.defaultValue !== "";

      const defaultValue = hasDefault
        ? ` = ${param.defaultValue}`
        : "";

      const paramStr = `${name}${type}${defaultValue}`;

      return param.flags?.isOptional
        ? `[${paramStr}]`
        : paramStr;
    })
    .filter(Boolean)
    .join(", ");

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
export default (ctx) => ({
  ...ctx.partials,
  ...typePartials,

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
        ctx.partials.comment(comment, {
          headingLevel: options.headingLevel,
          showTags: false,
        }),
      ctx.helpers.renderExamples(comment, options.headingLevel),
    ]
      .filter((x) => typeof x === "string" || Boolean(x))
      .join("\n");
  },

  memberTitle(model) {
    if (model.kind === ReflectionKind.Constructor) {
      const params = model.signatures?.[0]?.parameters ?? [];
      return `\`new ${model.parent.name}(${formatParams(params)})\``;
    }

    const prefix = getMemberPrefix(model);
    const params = model.signatures?.[0]?.parameters;

    if (!params) {
      return `${prefix}\`${model.name}\``;
    }

    const paramsString = formatParams(params);

    return `${prefix}\`${model.name}(${paramsString})\``;
  },

  constructor(model, options) {
    const md = [];
    model.signatures?.forEach((signature) => {
      const paramsString = formatParams(signature.parameters ?? []);

      const heading = "#".repeat(options.headingLevel);
      md.push(`${heading} \`new ${model.parent.name}(${paramsString})\``);
      md.push(
        ctx.partials.signature(signature, {
          headingLevel: options.headingLevel + 1,
        }),
      );
    });
    return md.join("\n\n");
  },

  parametersList: ctx.helpers.typedList,
  typedParametersList: ctx.helpers.typedList,
  typeDeclarationList: ctx.helpers.typedList,
  propertiesTable: ctx.helpers.typedList,
});