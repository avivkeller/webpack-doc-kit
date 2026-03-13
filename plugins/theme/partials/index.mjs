import { ReflectionKind } from 'typedoc';
import * as typePartials from './types.mjs';

const KIND_PREFIX = {
  [ReflectionKind.Class]: 'Class',
  [ReflectionKind.Interface]: 'Interface',
  [ReflectionKind.Enum]: 'Enum',
  [ReflectionKind.TypeAlias]: 'Type',
  [ReflectionKind.Namespace]: 'Namespace',
  [ReflectionKind.Constructor]: 'Constructor',
  [ReflectionKind.Accessor]: 'Accessor',
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: 'Static method',
};

export const getMemberPrefix = (model) => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];
  return prefix ? `${prefix}: ` : '';
};

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default (ctx) => ({
  ...ctx.partials,
  ...typePartials,

  signature: (model, options) => {
    const comment = options.multipleSignatures
      ? model.comment
      : model.comment || model.parent?.comment;

    const stability = (() => {
      if (!comment) return null;
      const deprecated = comment.blockTags?.find(t => t.tag === '@deprecated');
      const experimental = comment.blockTags?.find(t => t.tag === '@experimental')
                        ?? comment.blockTags?.find(t => t.tag === '@beta');
      const legacy = comment.blockTags?.find(t => t.tag === '@legacy');

      if (deprecated) {
        const desc = deprecated.content?.length
          ? ctx.helpers.getCommentParts(deprecated.content)
          : 'Deprecated';
        return `> Stability: 0 - Deprecated: ${desc}`;
      }
      if (experimental) {
        const desc = experimental.content?.length
          ? `: ${ctx.helpers.getCommentParts(experimental.content)}`
          : '';
        return `> Stability: 1 - Experimental${desc}`;
      }
      if (legacy) {
        const desc = legacy.content?.length
          ? `: ${ctx.helpers.getCommentParts(legacy.content)}`
          : '';
        return `> Stability: 3 - Legacy${desc}`;
      }
      return null;
    })();

    return [
      stability,
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
      comment && ctx.partials.comment(comment, {
        headingLevel: options.headingLevel,
      }),
    ]
      .filter((x) => (typeof x === "string" ? x : Boolean(x)))
      .join("\n");
  },

  memberTitle(model) {
    if (model.kind === ReflectionKind.Constructor) {
      const params = model.signatures?.[0]?.parameters ?? [];
      const className = model.parent?.name ?? model.name;
      const allOptional = params.length > 0 &&
                          params.every(p => p.flags?.isOptional);
      const paramStr = allOptional
        ? `[${params.map(p => p.name).join(", ")}]`
        : params.map(p =>
            p.flags?.isOptional ? `[${p.name}]` : p.name
          ).join(", ");
      return `\`new ${className}(${paramStr})\``;
    }

    const prefix = getMemberPrefix(model);
    const params = model.signatures?.[0]?.parameters;
    if (!params) {
      return `${prefix}\`${model.name}\``;
    }
    const paramsString = params
      .map((param, index) => {
        const paramName = param.name;
        if (param.flags?.isOptional) {
          return index === 0 ? `[${paramName}]` : `[, ${paramName}]`;
        } else {
          return index === 0 ? paramName : `, ${paramName}`;
        }
      })
      .join('');
    return `${prefix}\`${model.name}(${paramsString})\``;
  },

  memberContainer: (model, options) => {
    const md = [];
    if (!ctx.router.hasOwnDocument(model)) {
      md.push(
        "#".repeat(options.headingLevel) + " " +
        ctx.partials.memberTitle(model)
      );
    }
    md.push(ctx.partials.member(model, {
      headingLevel: options.headingLevel + 1,
      nested: options.nested,
    }));
    return md.filter(Boolean).join("\n\n");
  },

  constructor: (model, options) => {
    return model.signatures?.map(signature => {
      const params = signature.parameters ?? [];
      return params.length ? ctx.helpers.typedList(params) : "";
    }).filter(Boolean).join("\n\n") ?? "";
  },

  members: (model, options) => {
    const items = model.filter(
      (item) => !ctx.router.hasOwnDocument(item)
    );
    return items
      .map(item =>
        ctx.partials.memberContainer(item, {
          headingLevel: options.headingLevel,
          groupTitle: options.groupTitle,
        })
      )
      .filter(Boolean)
      .join("\n\n");
  },

  groups: (model, options) => {
    return (model.groups ?? [])
      .flatMap(group => {
        const isPropertiesGroup = group.children?.every(
          child => child.kind === ReflectionKind.Property
        );
        if (isPropertiesGroup) return [];
        const children = group.children?.filter(
          child => child.isDeclaration()
        ) ?? [];
        if (!children.length) return [];
        return [
          ctx.partials.members(children, {
            headingLevel: options.headingLevel,
            groupTitle: group.title,
          })
        ];
      })
      .filter(Boolean)
      .join("\n\n");
  },

  body: (model, options) => {
    if (model.groups?.length) {
      return ctx.partials.groups(model, {
        headingLevel: options.headingLevel,
        kind: model.kind,
      });
    }
    return "";
  },

  declarationTitle: (model) => {
    return ctx.helpers.typedListItem({
      name: model.name,
      type: model.type,
      comment: model.comment,
    });
  },

  parametersList: ctx.helpers.typedList,
  typedParametersList: ctx.helpers.typedList,
  typeDeclarationList: ctx.helpers.typedList,
  propertiesTable: ctx.helpers.typedList,
});