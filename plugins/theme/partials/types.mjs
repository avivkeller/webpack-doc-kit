const resolve = (type) => {
  if (!type) return "unknown";

  switch (type.type) {
    case "intrinsic":
      return type.name;

    case "literal":
      return typeof type.value === "string"
        ? JSON.stringify(type.value)
        : String(type.value);

    case "reference":
      // Preserve generics as doc-kit natively supports them
      if (type.typeArguments?.length) {
        return `${type.name}<${type.typeArguments.map(resolve).join(", ")}>`;
      }
      return type.name;

    case "array":
      return `${resolve(type.elementType)}[]`;

    case "tuple":
      // Rewrite tuples to Generic representation to satisfy doc-kit limitations
      return `Tuple<${type.elements?.map(resolve).join(", ") ?? ""}>`;

    case "named-tuple-member":
      return resolve(type.element);

    case "union":
      return type.types?.map(resolve).join(" | ") ?? "unknown";

    case "intersection":
      return type.types?.map(resolve).join(" & ") ?? "unknown";

    // Revert all advanced type forms to doc-kit safe fallbacks
    case "optional":
      return resolve(type.elementType || type.objectType);

    case "indexedAccess":
      return resolve(type.objectType);

    case "typeOperator":
      return resolve(type.target);

    case "conditional":
      return `${resolve(type.trueType)} | ${resolve(type.falseType)}`;

    case "reflection":
    case "template-literal":
    case "mapped":
      return "object";

    case "unknown":
      return type.name ?? "unknown";

    default:
      return "unknown";
  }
};

export const someType = (model) => `{${resolve(model)}}`;

export const arrayType = someType,
  conditionalType = someType,
  indexAccessType = someType,
  inferredType = someType,
  intersectionType = someType,
  intrinsicType = someType,
  literalType = someType,
  namedTupleType = someType,
  optionalType = someType,
  queryType = someType,
  referenceType = someType,
  reflectionType = someType,
  tupleType = someType,
  typeOperatorType = someType,
  unionType = someType,
  unknownType = someType;

export const declarationType = () => "{object}";
export const functionType = () => "{Function}";
