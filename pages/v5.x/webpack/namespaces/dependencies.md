# dependencies

## Class: `ConstDependency`

### Extends

- {NullDependency}

### Constructors

#### Constructor

* `expression` {string}
* `range` {number|number|number}
* `runtimeRequirements` {string[]}
* Returns: {ConstDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `expression` {string}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `range` {number|number|number}
* `runtimeRequirements` {Set}
* `type` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {ConstDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `HarmonyImportDependency`

### Extends

- {ModuleDependency}

### Constructors

#### Constructor

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}
* Returns: {HarmonyImportDependency}

### Properties

* `attributes` {ImportAttributes}
* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `phase` {ImportPhaseType}
* `range` {number|number}
* `request` {string}
* `sourceOrder` {number}
* `type` {string}
* `userRequest` {string}
* `weak` {boolean}
* `ExportPresenceModes` {object}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `getNonOptionalPart` {object}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {HarmonyImportDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getImportStatement(update, __namedParameters)`

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}
* Returns: {string|string}

#### `getImportVar(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {string}

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}
* Returns: {WebpackError[]}

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getModuleExports(__namedParameters)`

* `__namedParameters` {DependencyTemplateContext}
* Returns: {string}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `ModuleDependency`

### Extends

- {Dependency}

### Extended by

- {HarmonyImportDependency}

### Constructors

#### Constructor

* `request` {string}
* `sourceOrder` {number}
* Returns: {ModuleDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `range` {number|number}
* `request` {string}
* `sourceOrder` {number}
* `type` {string}
* `userRequest` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {DependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `NullDependency`

### Extends

- {Dependency}

### Extended by

- {ConstDependency}

### Constructors

#### Constructor

* Returns: {NullDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `type` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {NullDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}
