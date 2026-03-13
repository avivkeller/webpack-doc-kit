# esm

## Class: `ModuleChunkLoadingRuntimeModule`

### Extends

- {RuntimeModule}

### Constructors

#### Constructor

* `runtimeRequirements` {ReadonlySet}
* Returns: {ModuleChunkLoadingRuntimeModule}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `chunksIterable` {Iterable}
* `codeGenerationDependencies` {Dependency[]}
* `compilation` {Compilation}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependentHash` {boolean}
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string}
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
* `resolveOptions` {ResolveOptions}
* `stage` {number}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}
* `STAGE_ATTACH` {number} Runtime modules which attach to handlers of other runtime modules
* `STAGE_BASIC` {number} Runtime modules with simple dependencies on other runtime modules
* `STAGE_NORMAL` {number} Runtime modules without any dependencies to other runtime modules
* `STAGE_TRIGGER` {number} Runtime modules which trigger actions on bootstrap

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

#### `addChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `generate()`

* Returns: {string}

#### `getChunks()`

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getErrors()`

* Returns: {Iterable}

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

#### `getGeneratedCode()`

* Returns: {string}

#### `getNumberOfChunks()`

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

#### `getNumberOfWarnings()`

* Returns: {number}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `identifier()`

* Returns: {string}

#### `invalidateBuild()`

* Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isEntryModule()`

* Returns: {boolean}

#### `isInChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

#### `isProvided(exportName)`

* `exportName` {string}
* Returns: {boolean}

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

#### `nameForCondition()`

* Returns: {string}

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Use needBuild instead

#### `originalSource()`

* Returns: {Source}

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `shouldIsolate()`

* Returns: {boolean}

#### `size([type])`

* `type` {string}
* Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {JsonpCompilationPluginHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
