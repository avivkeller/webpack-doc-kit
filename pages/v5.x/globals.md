# webpack

## Namespaces

- [cache](webpack/namespaces/cache.md)
- [cli](webpack/namespaces/cli.md)
- [config](webpack/namespaces/config.md)
- [container](webpack/namespaces/container.md)
- [css](webpack/namespaces/css.md)
- [debug](webpack/namespaces/debug.md)
- [dependencies](webpack/namespaces/dependencies.md)
- [electron](webpack/namespaces/electron.md)
- [esm](webpack/namespaces/esm.md)
- [experiments](webpack/namespaces/experiments/index.md)
- [ids](webpack/namespaces/ids.md)
- [javascript](webpack/namespaces/javascript.md)
- [library](webpack/namespaces/library.md)
- [ModuleFilenameHelpers](webpack/namespaces/ModuleFilenameHelpers.md)
- [node](webpack/namespaces/node.md)
- [OptimizationStages](webpack/namespaces/OptimizationStages.md)
- [optimize](webpack/namespaces/optimize/index.md)
- [prefetch](webpack/namespaces/prefetch.md)
- [runtime](webpack/namespaces/runtime.md)
- [RuntimeGlobals](webpack/namespaces/RuntimeGlobals.md)
- [sharing](webpack/namespaces/sharing.md)
- [sources](webpack/namespaces/sources.md)
- [util](webpack/namespaces/util/index.md)
- [wasm](webpack/namespaces/wasm.md)
- [web](webpack/namespaces/web.md)
- [webworker](webpack/namespaces/webworker.md)

## Class: `AsyncDependenciesBlock`

### Extends

- {DependenciesBlock}

### Constructors

#### `new AsyncDependenciesBlock(groupOptions[, loc][, request])`

* `groupOptions` {string|GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {AsyncDependenciesBlock}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `chunkName` {string}
* `circular` {boolean}
* `dependencies` {Dependency[]}
* `groupOptions` {GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `module` {any}
* `parent` {DependenciesBlock}
* `request` {string}

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

***

## Class: `AutomaticPrefetchPlugin`

### Constructors

#### `new AutomaticPrefetchPlugin()`

* Returns: {AutomaticPrefetchPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `BannerPlugin`

### Constructors

#### `new BannerPlugin(options)`

* `options` {BannerPluginArgument}
* Returns: {BannerPlugin}

### Properties

* `banner` {object}
* `options` {BannerPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Cache`

### Constructors

#### `new Cache()`

* Returns: {CacheClass}

### Properties

* `hooks` {object}
* `STAGE_DEFAULT` {number}
* `STAGE_DISK` {number}
* `STAGE_MEMORY` {number}
* `STAGE_NETWORK` {number}

### Methods

#### `beginIdle()`

* Returns: {void}

#### `endIdle(callback)`

* `callback` {CallbackCacheCache}
* Returns: {void}

#### `get(identifier, etag, callback)`

###### T

`T`
* `identifier` {string}
* `etag` {Etag}
* `callback` {CallbackCacheCache}
* Returns: {void}

#### `shutdown(callback)`

* `callback` {CallbackCacheCache}
* Returns: {void}

#### `store(identifier, etag, data, callback)`

###### T

`T`
* `identifier` {string}
* `etag` {Etag}
* `data` {T}
* `callback` {CallbackCacheCache}
* Returns: {void}

#### `storeBuildDependencies(dependencies, callback)`

* `dependencies` {Iterable}
* `callback` {CallbackCacheCache}
* Returns: {void}

After this method has succeeded the cache can only be restored when build dependencies are

***

## Class: `Chunk`

### Extended by

- {HotUpdateChunk}

### Constructors

#### `new Chunk([name][, backCompat])`

* `name` {string}
* `backCompat` {boolean}
* Returns: {Chunk}

### Properties

* `auxiliaryFiles` {Set}
* `chunkReason` {string}
* `contentHash` {Record}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} 
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set}
* `groupsIterable` {SortableSet}
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable}
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `addModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `canBeInitial()`

* Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `compareTo(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

#### `containsModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `disconnectFromGroups()`

* Returns: {void}

#### `getAllAsyncChunks()`

* Returns: {Set}

#### `getAllInitialChunks()`

* Returns: {Set}

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set}

#### `getAllReferencedChunks()`

* Returns: {Set}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}
* Returns: {Record}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

* `filterFn` {object}
* Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

* Returns: {EntryOptions}

#### `getModules()`

* Returns: {Module[]}

#### `getNumberOfGroups()`

* Returns: {number}

#### `getNumberOfModules()`

* Returns: {number}

#### `hasAsyncChunks()`

* Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {boolean}

#### `hasEntryModule()`

* Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

#### `hasRuntime()`

* Returns: {boolean}

#### `integrate(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `integratedSize(otherChunk, options)`

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `isEmpty()`

* Returns: {boolean}

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `isOnlyInitial()`

* Returns: {boolean}

#### `modulesSize()`

* Returns: {number}

#### `moveModule(module, otherChunk)`

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

#### `remove()`

* Returns: {void}

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `removeModule(module)`

* `module` {Module}
* Returns: {void}

#### `size([options])`

* `options` {ChunkSizeOptions}
* Returns: {number}

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `ChunkGraph`

### Constructors

#### `new ChunkGraph(moduleGraph[, hashFunction])`

* `moduleGraph` {ModuleGraph}
* `hashFunction` {HashFunction}
* Returns: {ChunkGraph}

### Properties

* `moduleGraph` {ModuleGraph}

### Methods

#### `addChunkRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Set}
* Returns: {void}

#### `addDependentHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `addFullHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `addModuleRuntimeRequirements(module, runtime, items[, transferOwnership])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `items` {Set}
* `transferOwnership` {boolean}
* Returns: {void}

#### `addTreeRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Iterable}
* Returns: {void}

#### `attachDependentHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

#### `attachFullHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

#### `attachModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

#### `attachRuntimeModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

#### `canChunksBeIntegrated(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {boolean}

#### `compareChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {-1|0|1}

#### `connectBlockAndChunkGroup(depBlock, chunkGroup)`

* `depBlock` {AsyncDependenciesBlock}
* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `connectChunkAndEntryModule(chunk, module, entrypoint)`

* `chunk` {Chunk}
* `module` {Module}
* `entrypoint` {Entrypoint}
* Returns: {void}

#### `connectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `connectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `disconnectChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `disconnectChunkAndEntryModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `disconnectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `disconnectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `disconnectChunkGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `disconnectEntries(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `disconnectEntryModule(module)`

* `module` {Module}
* Returns: {void}

#### `getBlockChunkGroup(depBlock)`

* `depBlock` {AsyncDependenciesBlock}
* Returns: {ChunkGroup}

#### `getChunkConditionMap(chunk, filterFn)`

* `chunk` {Chunk}
* `filterFn` {object}
* Returns: {ChunkConditionMap}

#### `getChunkDependentHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkEntryDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkEntryModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkEntryModulesWithChunkGroupIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkFullHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkFullHashModulesSet(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

#### `getChunkModuleIdMap(chunk, filterFn[, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {object}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleIdMapEs5Alias_2}

#### `getChunkModuleRenderedHashMap(chunk, filterFn[, hashLength][, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {object}
* `hashLength` {number}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleHashMap}

#### `getChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

#### `getChunkModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkModulesIterableBySourceType(chunk, sourceType)`

* `chunk` {Chunk}
* `sourceType` {string}
* Returns: {Iterable}

#### `getChunkModuleSourceTypes(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {ReadonlySet}

#### `getChunkModulesSize(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getChunkModulesSizes(chunk)`

* `chunk` {Chunk}
* Returns: {Record}

#### `getChunkRootModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

#### `getChunkRuntimeModulesInOrder(chunk)`

* `chunk` {Chunk}
* Returns: {RuntimeModule[]}

#### `getChunkRuntimeModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getChunkRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

#### `getChunkSize(chunk[, options])`

* `chunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `getIntegratedChunksSize(chunkA, chunkB[, options])`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `getModuleChunks(module)`

* `module` {Module}
* Returns: {Chunk[]}

#### `getModuleChunksIterable(module)`

* `module` {Module}
* Returns: {Iterable}

#### `getModuleGraphHash(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {string}

#### `getModuleGraphHashBigInt(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {bigint}

#### `getModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getModuleId(module)`

* `module` {Module}
* Returns: {string|number}

#### `getModuleRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet}

#### `getModuleRuntimes(module)`

* `module` {Module}
* Returns: {RuntimeSpecSet}

#### `getModuleSourceTypes(module)`

* `module` {Module}
* Returns: {ReadonlySet}

#### `getNumberOfChunkFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfEntryModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfModuleChunks(module)`

* `module` {Module}
* Returns: {number}

#### `getNumberOfRuntimeModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getOrderedChunkModules(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {object}
* Returns: {Module[]}

#### `getOrderedChunkModulesIterable(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {object}
* Returns: {Iterable}

#### `getOrderedChunkModulesIterableBySourceType(chunk, sourceType, comparator)`

* `chunk` {Chunk}
* `sourceType` {string}
* `comparator` {object}
* Returns: {Iterable}

#### `getOrderedModuleChunksIterable(module, sortFn)`

* `module` {Module}
* `sortFn` {object}
* Returns: {Iterable}

#### `getRenderedModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getRuntimeChunkDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

#### `getRuntimeId(runtime)`

* `runtime` {string}
* Returns: {RuntimeId}

#### `getTreeRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

#### `hasChunkEntryDependentChunks(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `hasModuleHashes(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `hasModuleInGraph(chunk, filterFn[, filterChunkFn])`

* `chunk` {Chunk}
* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

#### `integrateChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {void}

#### `isEntryModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `isEntryModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

#### `isModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

#### `isModuleInChunkGroup(module, chunkGroup)`

* `module` {Module}
* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceModule(oldModule, newModule)`

* `oldModule` {Module}
* `newModule` {Module}
* Returns: {void}

#### `setChunkModuleSourceTypes(chunk, module, sourceTypes)`

* `chunk` {Chunk}
* `module` {Module}
* `sourceTypes` {ReadonlySet}
* Returns: {void}

#### `setModuleHashes(module, runtime, hash, renderedHash)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `hash` {string}
* `renderedHash` {string}
* Returns: {void}

#### `setModuleId(module, id)`

* `module` {Module}
* `id` {ModuleId}
* Returns: {void}

#### `setRuntimeId(runtime, id)`

* `runtime` {string}
* `id` {RuntimeId}
* Returns: {void}

#### `upgradeDependentToFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### Static method: `clearChunkGraphForChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

#### Static method: `clearChunkGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### Static method: `getChunkGraphForChunk(chunk, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

#### Static method: `getChunkGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

#### Static method: `setChunkGraphForChunk(chunk, chunkGraph)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### Static method: `setChunkGraphForModule(module, chunkGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `ChunkGroup`

### Extended by

- {Entrypoint}

### Constructors

#### `new ChunkGroup()`

* Returns: {ChunkGroup}

### Properties

* `asyncEntrypointsIterable` {SortableSet}
* `blocksIterable` {Iterable}
* `childrenIterable` {SortableSet}
* `chunks` {Chunk[]}
* `debugId` {string} get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} get a unique id for ChunkGroup, made up of its member Chunk id's
* `index` {number}
* `name` {string} returns the name of current ChunkGroup
sets a new name for current ChunkGroup
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

* Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record}

#### `getFiles()`

* Returns: {string[]}

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

* Returns: {boolean}

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

* Returns: {void}

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Performs an unshift of a specific chunk

***

## Class: `CleanPlugin`

### Constructors

#### `new CleanPlugin([options])`

* `options` {CleanOptions}
* Returns: {CleanPlugin}

### Properties

* `options` {CleanOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CleanPluginCompilationHooks}

***

## Class: `CodeGenerationResults`

### Constructors

#### `new CodeGenerationResults()`

* Returns: {CodeGenerationResults}

### Properties

* `map` {Map}

### Methods

#### `add(module, runtime, result)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `result` {CodeGenerationResult}
* Returns: {void}

#### `get(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {CodeGenerationResult}

#### `getData(module, runtime, key)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `key` {string}
* Returns: {any}

#### `getHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet}

#### `getSource(module, runtime, sourceType)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `sourceType` {string}
* Returns: {Source}

#### `has(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

***

## Class: `Compilation`

### Constructors

#### `new Compilation(compiler, params)`

* `compiler` {Compiler}
* `params` {CompilationParams}
* Returns: {Compilation}

Creates an instance of Compilation.

### Properties

* `additionalChunkAssets` {string[]}
* `addModuleQueue` {AsyncQueue}
* `assets` {CompilationAssets}
* `assetsInfo` {Map}
* `asyncEntrypoints` {Entrypoint[]}
* `bail` {boolean}
* `buildDependencies` {LazySet}
* `buildQueue` {AsyncQueue}
* `buildTimeExecutedModules` {WeakSet}
* `builtModules` {WeakSet}
* `children` {Compilation[]}
* `childrenCounters` {Record}
* `chunkGraph` {ChunkGraph}
* `chunkGroups` {ChunkGroup[]}
* `chunks` {Set}
* `chunkTemplate` {ChunkTemplate}
* `codeGeneratedModules` {WeakSet}
* `codeGenerationResults` {CodeGenerationResults}
* `comparedForEmitAssets` {Set}
* `compilationDependencies` {object} 
* `compiler` {Compiler}
* `compilerPath` {string}
* `contextDependencies` {LazySet}
* `creatingModuleDuringBuild` {WeakMap} Modules in value are building during the build of Module in key.
Means value blocking key from finishing.
Needed to detect build cycles.
* `dependencyFactories` {Map}
* `dependencyTemplates` {DependencyTemplates}
* `emittedAssets` {Set}
* `endTime` {number}
* `entries` {Map}
* `entrypoints` {Map}
* `errors` {Error[]}
* `factorizeQueue` {AsyncQueue}
* `fileDependencies` {LazySet}
* `fileSystemInfo` {FileSystemInfo}
* `fullHash` {string}
* `globalEntry` {EntryData}
* `hash` {string}
* `hooks` {Readonly}
* `inputFileSystem` {InputFileSystem}
* `logger` {WebpackLogger}
* `logging` {Map}
* `mainTemplate` {MainTemplate}
* `missingDependencies` {LazySet}
* `moduleGraph` {ModuleGraph}
* `moduleMemCaches` {Map}
* `moduleMemCaches2` {Map}
* `modules` {Set}
* `moduleTemplates` {ModuleTemplates}
* `name` {string}
* `namedChunkGroups` {Map}
* `namedChunks` {Map}
* `needAdditionalPass` {boolean}
* `options` {WebpackOptionsNormalizedWithDefaults}
* `outputOptions` {OutputNormalizedWithDefaults}
* `params` {CompilationParams}
* `processDependenciesQueue` {AsyncQueue}
* `profile` {boolean}
* `rebuildQueue` {AsyncQueue}
* `records` {Records}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `runtimeTemplate` {RuntimeTemplate}
* `startTime` {number}
* `usedChunkIds` {Set}
* `usedModuleIds` {Set}
* `valueCacheVersions` {Map}
* `warnings` {Error[]}
* `PROCESS_ASSETS_STAGE_ADDITIONAL` {number} Add additional assets to the compilation.
* `PROCESS_ASSETS_STAGE_ADDITIONS` {number} Add additional sections to existing assets, like a banner or initialization code.
* `PROCESS_ASSETS_STAGE_ANALYSE` {number} Analyse existing assets.
* `PROCESS_ASSETS_STAGE_DERIVED` {number} Derive new assets from existing assets.
Existing assets should not be treated as complete.
* `PROCESS_ASSETS_STAGE_DEV_TOOLING` {number} Add development tooling to assets, e. g. by extracting a SourceMap.
* `PROCESS_ASSETS_STAGE_OPTIMIZE` {number} Optimize existing assets in a general way.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY` {number} Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT` {number} Optimize the count of existing assets, e. g. by merging them.
Only assets of the same type should be merged.
For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_HASH` {number} Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE` {number} Optimize the count of existing assets, e. g. by inlining assets of into other assets.
Only assets of different types should be inlined.
For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE` {number} Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER` {number} Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.
* `PROCESS_ASSETS_STAGE_PRE_PROCESS` {number} Basic preprocessing of assets.
* `PROCESS_ASSETS_STAGE_REPORT` {number} Creating assets for reporting purposes.
* `PROCESS_ASSETS_STAGE_SUMMARIZE` {number} Summarize the list of existing assets
e. g. creating an assets manifest of Service Workers.

### Methods

#### `addAsyncEntrypoint(options, module, loc, request)`

* `options` {EntryOptions}
* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {Entrypoint}

#### `addChunk([name])`

* `name` {string}
* Returns: {Chunk}

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

#### `addChunkInGroup(groupOptions[, module][, loc][, request])`

* `groupOptions` {string|ChunkGroupOptions}
* `module` {Module}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {ChunkGroup}

If `module` is passed, `loc` and `request` must also be passed.

#### `addEntry(context, entry, optionsOrName, callback)`

* `context` {string}
* `entry` {Dependency}
* `optionsOrName` {string|EntryOptions}
* `callback` {object}
* Returns: {void}

#### `addInclude(context, dependency, options, callback)`

* `context` {string}
* `dependency` {Dependency}
* `options` {EntryOptions}
* `callback` {object}
* Returns: {void}

#### `addModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

#### `addModuleChain(context, dependency, callback)`

* `context` {string}
* `dependency` {Dependency}
* `callback` {object}
* Returns: {void}

#### `addModuleTree(__namedParameters, callback)`

* `__namedParameters` {object}
* `callback` {object}
* Returns: {void}

#### `addRuntimeModule(chunk, module[, chunkGraph])`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### `assignDepth(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### `assignDepths(modules)`

* `modules` {Set}
* Returns: {void}

#### `assignRuntimeIds()`

* Returns: {void}

#### `buildModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

Schedules a build of the module object

#### `checkConstraints()`

* Returns: {void}

#### `clearAssets()`

* Returns: {void}

#### `codeGeneration(callback)`

* `callback` {object}
* Returns: {void}

#### `createChildCompiler(name[, outputOptions][, plugins])`

* `name` {string}
* `outputOptions` {Partial}
* `plugins` {false|""|0|object|WebpackPluginInstance[]}
* Returns: {Compiler}

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

#### `createChunkAssets(callback)`

* `callback` {object}
* Returns: {void}

#### `createHash()`

* Returns: {CodeGenerationJob[]}

#### `createModuleAssets()`

* Returns: {void}

#### `createModuleHashes()`

* Returns: {void}

#### `createStatsFactory(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsFactory}

#### `createStatsOptions([optionsOrPreset][, context])`

* `optionsOrPreset` {string|boolean|StatsOptions}
* `context` {CreateStatsOptionsContext}
* Returns: {NormalizedStatsOptions}

#### `createStatsPrinter(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsPrinter}

#### `deleteAsset(file)`

* `file` {string}
* Returns: {void}

#### `emitAsset(file, source[, assetInfo])`

* `file` {string}
* `source` {Source}
* `assetInfo` {AssetInfo}
* Returns: {void}

#### `executeModule(module, options, callback)`

* `module` {Module}
* `options` {ExecuteModuleOptions}
* `callback` {object}
* Returns: {void}

#### `factorizeModule(options, callback)`

##### Call Signature

* `options` {FactorizeModuleOptions|object}
* `callback` {object}
* Returns: {void}

##### Call Signature

* `options` {FactorizeModuleOptions|object}
* `callback` {object}
* Returns: {void}

#### `findModule(identifier)`

* `identifier` {string}
* Returns: {Module}

Attempts to search for a module by its identifier

#### `finish(callback)`

* `callback` {object}
* Returns: {void}

#### `getAsset(name)`

* `name` {string}
* Returns: {Readonly}

#### `getAssetPath(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

#### `getAssetPathWithInfo(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

#### `getAssets()`

* Returns: {Readonly[]}

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

#### `getDependencyReferencedExports(dependency, runtime)`

* `dependency` {Dependency}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

#### `getErrors()`

* Returns: {Error[]}

#### `getLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

#### `getModule(module)`

* `module` {Module}
* Returns: {Module}

Fetches a module from a compilation by its identifier

#### `getPath(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

#### `getPathWithInfo(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

#### `getRenderManifest(options)`

* `options` {RenderManifestOptions}
* Returns: {RenderManifestEntry[]}

#### `getStats()`

* Returns: {Stats}

#### `getWarnings()`

* Returns: {Error[]}

#### `handleModuleCreation(__namedParameters, callback)`

* `__namedParameters` {HandleModuleCreationOptions}
* `callback` {object}
* Returns: {void}

#### `patchChunksAfterReasonRemoval(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {void}

#### `processModuleDependencies(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

#### `processModuleDependenciesNonRecursive(module)`

* `module` {Module}
* Returns: {void}

#### `processRuntimeRequirements([__namedParameters])`

* `__namedParameters` {object}
* Returns: {void}

#### `rebuildModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

#### `removeChunkFromDependencies(block, chunk)`

* `block` {DependenciesBlock}
* `chunk` {Chunk}
* Returns: {void}

#### `removeReasonsOfDependencyBlock(module, block)`

* `module` {Module}
* `block` {DependenciesBlockLike}
* Returns: {void}

#### `renameAsset(file, newFile)`

* `file` {string}
* `newFile` {string}
* Returns: {void}

#### `reportDependencyErrorsAndWarnings(module, blocks)`

* `module` {Module}
* `blocks` {DependenciesBlock[]}
* Returns: {boolean}

#### `seal(callback)`

* `callback` {object}
* Returns: {void}

#### `sortItemsWithChunkIds()`

* Returns: {void}

#### `summarizeDependencies()`

* Returns: {void}

#### `unseal()`

* Returns: {void}

#### `updateAsset(file, newSourceOrFunction[, assetInfoUpdateOrFunction])`

* `file` {string}
* `newSourceOrFunction` {Source|object}
* `assetInfoUpdateOrFunction` {AssetInfo|object}
* Returns: {void}

***

## Class: `Compiler`

### Constructors

#### `new Compiler(context[, options])`

* `context` {string}
* `options` {WebpackOptionsNormalized}
* Returns: {Compiler}

### Properties

* `cache` {CacheClass}
* `compilerPath` {string}
* `context` {string}
* `contextTimestamps` {Map}
* `fileTimestamps` {Map}
* `fsStartTime` {number}
* `hooks` {Readonly}
* `idle` {boolean}
* `immutablePaths` {Set}
* `infrastructureLogger` {object}
* `inputFileSystem` {InputFileSystem}
* `intermediateFileSystem` {IntermediateFileSystem}
* `managedPaths` {Set}
* `modifiedFiles` {ReadonlySet}
* `moduleMemCaches` {Map}
* `name` {string}
* `options` {WebpackOptionsNormalized}
* `outputFileSystem` {OutputFileSystem}
* `outputPath` {string}
* `parentCompilation` {Compilation}
* `platform` {Readonly}
* `records` {Records}
* `recordsInputPath` {string}
* `recordsOutputPath` {string}
* `removedFiles` {ReadonlySet}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `root` {Compiler}
* `running` {boolean}
* `unmanagedPaths` {Set}
* `watchFileSystem` {WatchFileSystem}
* `watching` {Watching}
* `watchMode` {boolean}
* `webpack` {exports}

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

#### `compile(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

#### `createChildCompiler(compilation, compilerName, compilerIndex[, outputOptions][, plugins])`

* `compilation` {Compilation}
* `compilerName` {string}
* `compilerIndex` {number}
* `outputOptions` {Partial}
* `plugins` {false|""|0|WebpackPluginInstance|object[]}
* Returns: {Compiler}

#### `createCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

#### `createContextModuleFactory()`

* Returns: {ContextModuleFactory}

#### `createNormalModuleFactory()`

* Returns: {NormalModuleFactory}

#### `emitAssets(compilation, callback)`

* `compilation` {Compilation}
* `callback` {object}
* Returns: {void}

#### `emitRecords(callback)`

* `callback` {object}
* Returns: {void}

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

#### `getInfrastructureLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

#### `isChild()`

* Returns: {boolean}

#### `newCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

#### `newCompilationParams()`

* Returns: {object}

#### `purgeInputFileSystem()`

* Returns: {void}

#### `readRecords(callback)`

* `callback` {object}
* Returns: {void}

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

#### `runAsChild(callback)`

* `callback` {object}
* Returns: {void}

#### `validate(schema, value[, options][, check])`

###### T

`T` *extends* {object|object[]} = {object}
* `schema` {JSONSchema4|ExtendedSchema|JSONSchema6|ExtendedSchema|JSONSchema7|ExtendedSchema|object}
* `value` {T}
* `options` {ValidationErrorConfiguration}
* `check` {object}
* Returns: {void}

Schema validation function with optional pre-compiled check

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions}
* `handler` {CallbackWebpackFunction_2}
* Returns: {Watching}

***

## Class: `ConcatenationScope`

### Constructors

#### `new ConcatenationScope(modulesMap, currentModule, usedNames)`

* `modulesMap` {ModuleInfo[]|Map}
* `currentModule` {ConcatenatedModuleInfo}
* `usedNames` {Set}
* Returns: {ConcatenationScope}

### Properties

* `usedNames` {Set}
* `DEFAULT_EXPORT` {string}
* `NAMESPACE_OBJECT_EXPORT` {string}

### Methods

#### `createModuleReference(module, __namedParameters)`

* `module` {Module}
* `__namedParameters` {Partial}
* Returns: {string}

#### `getRawExport(exportName)`

* `exportName` {string}
* Returns: {string}

#### `isModuleInScope(module)`

* `module` {Module}
* Returns: {boolean}

#### `registerExport(exportName, symbol)`

* `exportName` {string}
* `symbol` {string}
* Returns: {void}

#### `registerNamespaceExport(symbol)`

* `symbol` {string}
* Returns: {void}

#### `registerRawExport(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

#### `setRawExportMap(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

#### Static method: `isModuleReference(name)`

* `name` {string}
* Returns: {boolean}

#### Static method: `matchModuleReference(name)`

* `name` {string}
* Returns: {ModuleReferenceOptions|object}

***

## Class: `ContextExclusionPlugin`

### Constructors

#### `new ContextExclusionPlugin(negativeMatcher)`

* `negativeMatcher` {RegExp}
* Returns: {ContextExclusionPlugin}

### Properties

* `negativeMatcher` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ContextReplacementPlugin`

### Constructors

#### `new ContextReplacementPlugin(resourceRegExp[, newContentResource][, newContentRecursive][, newContentRegExp])`

* `resourceRegExp` {RegExp}
* `newContentResource` {string|boolean|RegExp|object}
* `newContentRecursive` {boolean|RegExp|NewContentCreateContextMap}
* `newContentRegExp` {RegExp}
* Returns: {ContextReplacementPlugin}

### Properties

* `newContentCallback` {object}
* `newContentCreateContextMap` {object}
* `newContentRecursive` {boolean}
* `newContentRegExp` {RegExp}
* `newContentResource` {string}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DefinePlugin`

### Constructors

#### `new DefinePlugin(definitions)`

* `definitions` {Definitions}
* Returns: {DefinePlugin}

Create a new define plugin

### Properties

* `definitions` {Definitions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {DefinePluginHooks}

#### Static method: `runtimeValue(fn[, options])`

* `fn` {object}
* `options` {true|string[]|RuntimeValueOptions}
* Returns: {RuntimeValue}

***

## Class: `DelegatedPlugin`

### Constructors

#### `new DelegatedPlugin(options)`

* `options` {Options}
* Returns: {DelegatedPlugin}

### Properties

* `options` {Options}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Dependency`

### Extended by

- {ModuleDependency}
- {NullDependency}

### Constructors

#### `new Dependency()`

* Returns: {Dependency}

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

## Class: `DllPlugin`

### Constructors

#### `new DllPlugin(options)`

* `options` {DllPluginOptions}
* Returns: {DllPlugin}

### Properties

* `options` {DllPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DllReferencePlugin`

### Constructors

#### `new DllReferencePlugin(options)`

* `options` {DllReferencePluginOptions}
* Returns: {DllReferencePlugin}

### Properties

* `options` {DllReferencePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DotenvPlugin`

### Constructors

#### `new DotenvPlugin([options])`

* `options` {DotenvPluginOptions}
* Returns: {DotenvPlugin}

### Properties

* `options` {DotenvPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

***

## Class: `DynamicEntryPlugin`

### Constructors

#### `new DynamicEntryPlugin(context, entry)`

* `context` {string}
* `entry` {object}
* Returns: {DynamicEntryPlugin}

### Properties

* `context` {string}
* `entry` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EntryOptionPlugin`

### Constructors

#### `new EntryOptionPlugin()`

* Returns: {EntryOptionPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

#### Static method: `applyEntryOption(compiler, context, entry)`

* `compiler` {Compiler}
* `context` {string}
* `entry` {EntryNormalized}
* Returns: {void}

#### Static method: `entryDescriptionToOptions(compiler, name, desc)`

* `compiler` {Compiler}
* `name` {string}
* `desc` {EntryDescriptionNormalized}
* Returns: {EntryOptions}

***

## Class: `EntryPlugin`

### Constructors

#### `new EntryPlugin(context, entry[, options])`

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryPlugin}

An entry plugin which will handle creation of the EntryDependency

### Properties

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `createDependency(entry, options)`

* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryDependency}

***

## Class: `Entrypoint`

### Extends

- {ChunkGroup}

### Constructors

#### `new Entrypoint()`

* Returns: {Entrypoint}

### Properties

* `asyncEntrypointsIterable` {SortableSet}
* `blocksIterable` {Iterable}
* `childrenIterable` {SortableSet}
* `chunks` {Chunk[]}
* `debugId` {string} get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} get a unique id for ChunkGroup, made up of its member Chunk id's
* `index` {number}
* `name` {string} returns the name of current ChunkGroup
sets a new name for current ChunkGroup
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `addDependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {void}

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `dependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

* Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record}

#### `getEntrypointChunk()`

* Returns: {Chunk}

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

#### `getFiles()`

* Returns: {string[]}

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

#### `getRuntimeChunk()`

* Returns: {Chunk}

Fetches the chunk reference containing the webpack bootstrap code

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

* Returns: {boolean}

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

* Returns: {void}

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

#### `setEntrypointChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the chunk with the entrypoint modules for an entrypoint.

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `setRuntimeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the runtimeChunk for an entrypoint.

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Performs an unshift of a specific chunk

***

## Class: `EnvironmentPlugin`

### Constructors

#### `new EnvironmentPlugin(keys)`

* `keys` {string|string[]|Record[]}
* Returns: {EnvironmentPlugin}

### Properties

* `defaultValues` {Record}
* `keys` {string[]}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EvalDevToolModulePlugin`

### Constructors

#### `new EvalDevToolModulePlugin([options])`

* `options` {EvalDevToolModulePluginOptions}
* Returns: {EvalDevToolModulePlugin}

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `sourceUrlComment` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EvalSourceMapDevToolPlugin`

### Constructors

#### `new EvalSourceMapDevToolPlugin([inputOptions])`

* `inputOptions` {string|SourceMapDevToolPluginOptions}
* Returns: {EvalSourceMapDevToolPlugin}

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapComment` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ExternalModule`

### Extends

- {Module}

### Constructors

#### `new ExternalModule(request, type, userRequest[, dependencyMeta])`

* `request` {ExternalModuleRequest}
* `type` {ExternalsType}
* `userRequest` {string}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}
* Returns: {ExternalModule}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable}
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `externalType` {ExternalsType}
* `factoryMeta` {FactoryMeta}
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
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
* `request` {ExternalModuleRequest}
* `resolveOptions` {ResolveOptions}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet}
* `userRequest` {string}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}
* `getExternalModuleNodeCommonjsInitFragment` {object}
* `ModuleExternalInitFragment` {ModuleExternalInitFragment}

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

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

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
* Returns: {ExternalModuleHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `ExternalsPlugin`

### Constructors

#### `new ExternalsPlugin(type, externals)`

* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}
* `externals` {Externals}
* Returns: {ExternalsPlugin}

### Properties

* `externals` {Externals}
* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Generator`

### Constructors

#### `new Generator()`

* Returns: {Generator}

### Methods

#### `generate(module, __namedParameters)`

* `module` {NormalModule}
* `__namedParameters` {GenerateContext}
* Returns: {Source}

#### `getConcatenationBailoutReason(module, context)`

* `module` {NormalModule}
* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getSize(module[, type])`

* `module` {NormalModule}
* `type` {string}
* Returns: {number}

#### `getTypes(module)`

* `module` {NormalModule}
* Returns: {ReadonlySet}

#### `updateHash(hash, __namedParameters)`

* `hash` {Hash}
* `__namedParameters` {UpdateHashContextGenerator}
* Returns: {void}

#### Static method: `byType(map)`

* `map` {object}
* Returns: {ByTypeGenerator}

***

## Class: `HotModuleReplacementPlugin`

### Constructors

#### `new HotModuleReplacementPlugin()`

* Returns: {HotModuleReplacementPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getParserHooks(parser)`

* `parser` {JavascriptParser}
* Returns: {HMRJavascriptParserHooks}

***

## Class: `HotUpdateChunk`

### Extends

- {Chunk}

### Constructors

#### `new HotUpdateChunk()`

* Returns: {HotUpdateChunk}

### Properties

* `auxiliaryFiles` {Set}
* `chunkReason` {string}
* `contentHash` {Record}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} 
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set}
* `groupsIterable` {SortableSet}
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable}
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `addModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `canBeInitial()`

* Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `compareTo(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

#### `containsModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `disconnectFromGroups()`

* Returns: {void}

#### `getAllAsyncChunks()`

* Returns: {Set}

#### `getAllInitialChunks()`

* Returns: {Set}

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set}

#### `getAllReferencedChunks()`

* Returns: {Set}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}
* Returns: {Record}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

* `filterFn` {object}
* Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

* Returns: {EntryOptions}

#### `getModules()`

* Returns: {Module[]}

#### `getNumberOfGroups()`

* Returns: {number}

#### `getNumberOfModules()`

* Returns: {number}

#### `hasAsyncChunks()`

* Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {boolean}

#### `hasEntryModule()`

* Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

#### `hasRuntime()`

* Returns: {boolean}

#### `integrate(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `integratedSize(otherChunk, options)`

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `isEmpty()`

* Returns: {boolean}

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `isOnlyInitial()`

* Returns: {boolean}

#### `modulesSize()`

* Returns: {number}

#### `moveModule(module, otherChunk)`

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

#### `remove()`

* Returns: {void}

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `removeModule(module)`

* `module` {Module}
* Returns: {void}

#### `size([options])`

* `options` {ChunkSizeOptions}
* Returns: {number}

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `IgnorePlugin`

### Constructors

#### `new IgnorePlugin(options)`

* `options` {IgnorePluginOptions}
* Returns: {IgnorePlugin}

### Properties

* `options` {IgnorePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `checkIgnore(resolveData)`

* `resolveData` {BeforeContextResolveData|ResolveData}
* Returns: {false}

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

***

## Class: `InitFragment`

### Type Parameters

#### GenerateContext

`GenerateContext`

### Constructors

#### `new InitFragment(content, stage, position[, key][, endContent])`

###### GenerateContext

`GenerateContext`
* `content` {string|Source}
* `stage` {number}
* `position` {number}
* `key` {string}
* `endContent` {string|Source}
* Returns: {InitFragment}

### Properties

* `content` {string|Source}
* `endContent` {string|Source}
* `key` {string}
* `position` {number}
* `stage` {number}
* `STAGE_ASYNC_BOUNDARY` {number}
* `STAGE_ASYNC_DEPENDENCIES` {number}
* `STAGE_ASYNC_HARMONY_IMPORTS` {number}
* `STAGE_CONSTANTS` {number}
* `STAGE_HARMONY_EXPORTS` {number}
* `STAGE_HARMONY_IMPORTS` {number}
* `STAGE_PROVIDES` {number}

### Methods

#### `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {void}

#### `getContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

#### `getEndContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

#### `serialize(context)`

* `context` {ObjectSerializerContext}
* Returns: {void}

#### Static method: `addToSource(source, initFragments, context)`

###### Context

`Context`
* `source` {Source}
* `initFragments` {MaybeMergeableInitFragment[]}
* `context` {Context}
* Returns: {Source}

***

## Class: `JavascriptModulesPlugin`

### Constructors

#### `new JavascriptModulesPlugin([options])`

* `options` {object}
* Returns: {JavascriptModulesPlugin}

### Properties

* `options` {object}
* `chunkHasJs` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `renderBootstrap(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Bootstrap}

#### `renderChunk(renderContext, hooks)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

#### `renderMain(renderContext, hooks, compilation)`

* `renderContext` {MainRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* `compilation` {Compilation}
* Returns: {Source}

#### `renderModule(module, renderContext, hooks)`

* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

#### `renderRequire(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {string}

#### `updateHashWithBootstrap(hash, renderContext, hooks)`

* `hash` {Hash}
* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {void}

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {TemplatePath}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksJavascriptModulesPlugin}

***

## Class: `LibManifestPlugin`

### Constructors

#### `new LibManifestPlugin(options)`

* `options` {LibManifestPluginOptions}
* Returns: {LibManifestPlugin}

### Properties

* `options` {LibManifestPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LibraryTemplatePlugin`

### Constructors

#### `new LibraryTemplatePlugin(name, target, umdNamedDefine, auxiliaryComment, exportProperty)`

* `name` {LibraryName}
* `target` {string}
* `umdNamedDefine` {boolean}
* `auxiliaryComment` {AuxiliaryComment}
* `exportProperty` {LibraryExport}
* Returns: {LibraryTemplatePlugin}

### Properties

* `library` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LoaderOptionsPlugin`

### Constructors

#### `new LoaderOptionsPlugin([options])`

* `options` {LoaderOptionsPluginOptions|MatchObject}
* Returns: {LoaderOptionsPlugin}

### Properties

* `options` {LoaderOptionsPluginOptions|MatchObject}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LoaderTargetPlugin`

### Constructors

#### `new LoaderTargetPlugin(target)`

* `target` {string}
* Returns: {LoaderTargetPlugin}

### Properties

* `target` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ManifestPlugin`

### Constructors

#### `new ManifestPlugin([options])`

* `options` {ManifestPluginOptions}
* Returns: {ManifestPlugin}

### Properties

* `options` {ManifestPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Module`

### Extends

- {DependenciesBlock}

### Extended by

- {ExternalModule}
- {NormalModule}
- {RuntimeModule}

### Constructors

#### `new Module(type[, context][, layer])`

* `type` {string}
* `context` {string}
* `layer` {string}
* Returns: {Module}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable}
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `factoryMeta` {FactoryMeta}
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
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
* `resolveOptions` {ResolveOptions}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

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

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `ModuleFactory`

### Constructors

#### `new ModuleFactory()`

* Returns: {ModuleFactory}

### Methods

#### `create(data, callback)`

* `data` {ModuleFactoryCreateData}
* `callback` {object}
* Returns: {void}

***

## Class: `ModuleGraph`

### Constructors

#### `new ModuleGraph()`

* Returns: {ModuleGraph}

### Properties

* `ModuleGraphConnection` {ModuleGraphConnection}

### Methods

#### `addExplanation(dependency, explanation)`

* `dependency` {Dependency}
* `explanation` {string}
* Returns: {void}

#### `addExtraReason(module, explanation)`

* `module` {Module}
* `explanation` {string}
* Returns: {void}

#### `cached(fn, args)`

###### T

`T` *extends* {any[]}

###### R

`R`
* `fn` {object}
* `args` {T}
* Returns: {R}

#### `cloneModuleAttributes(sourceModule, targetModule)`

* `sourceModule` {Module}
* `targetModule` {Module}
* Returns: {void}

#### `copyOutgoingModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}
* Returns: {void}

#### `dependencyCacheProvide(dependency, args)`

###### D

`D` *extends* {Dependency}

###### ARGS

`ARGS` *extends* {any[]}

###### R

`R`
* `dependency` {D}
* `args` {ARGS|unknown}
* Returns: {R}

#### `finishUpdateParent()`

* Returns: {void}

#### `freeze([cacheStage])`

* `cacheStage` {string}
* Returns: {void}

#### `getConnection(dependency)`

* `dependency` {Dependency}
* Returns: {ModuleGraphConnection}

#### `getDepth(module)`

* `module` {Module}
* Returns: {number}

#### `getExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

#### `getExportsInfo(module)`

* `module` {Module}
* Returns: {ExportsInfo}

#### `getIncomingConnections(module)`

* `module` {Module}
* Returns: {Iterable}

#### `getIncomingConnectionsByOriginModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap}

#### `getIssuer(module)`

* `module` {Module}
* Returns: {Module}

#### `getMeta(thing)`

* `thing` {object}
* Returns: {Meta}

#### `getMetaIfExisting(thing)`

* `thing` {object}
* Returns: {Meta}

#### `getModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getOptimizationBailout(module)`

* `module` {Module}
* Returns: {string|object[]}

#### `getOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getOutgoingConnections(module)`

* `module` {Module}
* Returns: {Iterable}

#### `getOutgoingConnectionsByModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap}

#### `getParentBlock(dependency)`

* `dependency` {Dependency}
* Returns: {DependenciesBlock}

#### `getParentBlockIndex(dependency)`

* `dependency` {Dependency}
* Returns: {number}

#### `getParentModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getPostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

#### `getPreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

#### `getProfile(module)`

* `module` {Module}
* Returns: {ModuleProfile}

#### `getProvidedExports(module)`

* `module` {Module}
* Returns: {true|string[]}

#### `getReadOnlyExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

#### `getResolvedModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getResolvedOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getUsedExports(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean|SortableSet}

#### `isAsync(module)`

* `module` {Module}
* Returns: {boolean}

#### `isDeferred(module)`

* `module` {Module}
* Returns: {boolean}

#### `isExportProvided(module, exportName)`

* `module` {Module}
* `exportName` {string|string[]}
* Returns: {boolean}

#### `moveModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}
* Returns: {void}

#### `removeAllModuleAttributes()`

* Returns: {void}

#### `removeConnection(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `removeModuleAttributes(module)`

* `module` {Module}
* Returns: {void}

#### `setAsync(module)`

* `module` {Module}
* Returns: {void}

#### `setDepth(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {void}

#### `setDepthIfLower(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {boolean}

#### `setIssuer(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

#### `setIssuerIfUnset(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

#### `setModuleMemCaches(moduleMemCaches)`

* `moduleMemCaches` {Map}
* Returns: {void}

#### `setParentDependenciesBlockIndex(dependency, index)`

* `dependency` {Dependency}
* `index` {number}
* Returns: {void}

#### `setParents(dependency, block, module[, indexInBlock])`

* `dependency` {Dependency}
* `block` {DependenciesBlock}
* `module` {Module}
* `indexInBlock` {number}
* Returns: {void}

#### `setPostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

#### `setPostOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

#### `setPreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

#### `setPreOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

#### `setProfile(module[, profile])`

* `module` {Module}
* `profile` {ModuleProfile}
* Returns: {void}

#### `setResolvedModule(originModule, dependency, module)`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

#### `unfreeze()`

* Returns: {void}

#### `updateModule(dependency, module)`

* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

#### `updateParent(dependency[, connection][, parentModule])`

* `dependency` {Dependency}
* `connection` {ModuleGraphConnection}
* `parentModule` {Module}
* Returns: {void}

#### Static method: `clearModuleGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### Static method: `getModuleGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ModuleGraph}

#### Static method: `setModuleGraphForModule(module, moduleGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `moduleGraph` {ModuleGraph}
* Returns: {void}

***

## Class: `ModuleGraphConnection`

### Constructors

#### `new ModuleGraphConnection(originModule, dependency, module[, explanation][, weak][, condition])`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* `explanation` {string}
* `weak` {boolean}
* `condition` {false|object}
* Returns: {ModuleGraphConnection}

### Properties

* `condition` {false|object}
* `conditional` {boolean}
* `dependency` {Dependency}
* `explanation` {string}
* `explanations` {Set}
* `module` {Module}
* `originModule` {Module}
* `resolvedModule` {Module}
* `resolvedOriginModule` {Module}
* `weak` {boolean}
* `addConnectionStates` {object}
* `CIRCULAR_CONNECTION` {CIRCULAR_CONNECTION}
* `TRANSITIVE_ONLY` {TRANSITIVE_ONLY}

### Methods

#### `addCondition(condition)`

* `condition` {object}
* Returns: {void}

#### `addExplanation(explanation)`

* `explanation` {string}
* Returns: {void}

#### `clone()`

* Returns: {ModuleGraphConnection}

#### `getActiveState(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {ConnectionState}

#### `isActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `isTargetActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `setActive(value)`

* `value` {boolean}
* Returns: {void}

***

## Class: `MultiCompiler`

### Constructors

#### `new MultiCompiler(compilers, options)`

* `compilers` {Compiler[]|Record}
* `options` {MultiCompilerOptions}
* Returns: {MultiCompiler}

### Properties

* `compilers` {Compiler[]}
* `dependencies` {WeakMap}
* `hooks` {Readonly}
* `inputFileSystem` {InputFileSystem}
* `intermediateFileSystem` {IntermediateFileSystem}
* `options` {WebpackOptionsNormalized[]|MultiCompilerOptions}
* `outputFileSystem` {OutputFileSystem}
* `outputPath` {string}
* `running` {boolean}
* `watchFileSystem` {WatchFileSystem}

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

#### `getInfrastructureLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

#### `purgeInputFileSystem()`

* Returns: {void}

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

#### `runWithDependencies(compilers, fn, callback)`

> Stability: 0 - Deprecated

* `compilers` {Compiler[]}
* `fn` {object}
* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

This method should have been private

#### `setDependencies(compiler, dependencies)`

* `compiler` {Compiler}
* `dependencies` {string[]}
* Returns: {void}

#### `validateDependencies(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {boolean}

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions|WatchOptions[]}
* `handler` {CallbackWebpackFunction_2}
* Returns: {MultiWatching}

***

## Class: `MultiStats`

### Constructors

#### `new MultiStats()`

* Returns: {MultiStats}

### Properties

* `hash` {string}
* `stats` {Stats[]}

### Methods

#### `hasErrors()`

* Returns: {boolean}

#### `hasWarnings()`

* Returns: {boolean}

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

***

## Class: `NoEmitOnErrorsPlugin`

### Constructors

#### `new NoEmitOnErrorsPlugin()`

* Returns: {NoEmitOnErrorsPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `NormalModule`

### Extends

- {Module}

### Constructors

#### `new NormalModule(__namedParameters)`

* `__namedParameters` {NormalModuleCreateData}
* Returns: {NormalModule}

### Properties

* `binary` {boolean}
* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable}
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `depth` {number}
* `error` {WebpackError}
* `errors` {any}
* `exportsArgument` {string}
* `extractSourceMap` {boolean}
* `factoryMeta` {FactoryMeta}
* `generator` {Generator}
* `generatorOptions` {GeneratorOptions}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `loaders` {LoaderItem[]}
* `matchResource` {string}
* `moduleArgument` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `parser` {ParserClass}
* `parserOptions` {ParserOptions}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `rawRequest` {string}
* `renderedHash` {string}
* `request` {string}
* `resolveOptions` {ResolveOptions}
* `resource` {string}
* `resourceResolveData` {ResourceSchemeData|Partial}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet}
* `userRequest` {string}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

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

#### `applyNoParseRule(rule, content)`

* `rule` {string|RegExp|object}
* `content` {string}
* Returns: {boolean}

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

#### `createSource(context, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `content` {string|Buffer}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `createSourceForAsset(context, name, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `name` {string}
* `content` {string|Buffer}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getChunks()`

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getCurrentLoader(loaderContext[, index])`

* `loaderContext` {AnyLoaderContext}
* `index` {number}
* Returns: {LoaderItem}

#### `getErrors()`

* Returns: {Iterable}

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

#### `getNumberOfChunks()`

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

#### `getNumberOfWarnings()`

* Returns: {number}

#### `getResource()`

* Returns: {string}

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

#### `markModuleAsErrored(error)`

* `error` {WebpackError}
* Returns: {void}

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

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `shouldPreventParsing(noParseRule, request)`

* `noParseRule` {string|RegExp|object|string|RegExp|object[]}
* `request` {string}
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

#### Static method: `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {NormalModule}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {NormalModuleCompilationHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `NormalModuleReplacementPlugin`

### Constructors

#### `new NormalModuleReplacementPlugin(resourceRegExp, newResource)`

* `resourceRegExp` {RegExp}
* `newResource` {string|object}
* Returns: {NormalModuleReplacementPlugin}

Create an instance of the plugin

### Properties

* `newResource` {string|object}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Parser`

### Extended by

- {JavascriptParser}

### Constructors

#### `new Parser()`

* Returns: {ParserClass}

### Methods

#### `parse(source, state)`

* `source` {string|Buffer|PreparsedAst}
* `state` {ParserState}
* Returns: {ParserState}

***

## Class: `PlatformPlugin`

### Constructors

#### `new PlatformPlugin(platform)`

* `platform` {Partial}
* Returns: {PlatformPlugin}

### Properties

* `platform` {Partial}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `PrefetchPlugin`

### Constructors

#### `new PrefetchPlugin(context[, request])`

* `context` {string}
* `request` {string}
* Returns: {PrefetchPlugin}

### Properties

* `context` {string}
* `request` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ProgressPlugin`

### Constructors

#### `new ProgressPlugin([options])`

* `options` {ProgressPluginArgument}
* Returns: {ProgressPlugin}

### Properties

* `dependenciesCount` {number}
* `handler` {object}
* `modulesCount` {number}
* `options` {ProgressPluginOptions}
* `percentBy` {"entries"|"modules"|"dependencies"}
* `profile` {boolean}
* `showActiveModules` {boolean}
* `showDependencies` {boolean}
* `showEntries` {boolean}
* `showModules` {boolean}
* `createDefaultHandler` {object}
* `defaultOptions` {Required}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler|MultiCompiler}
* Returns: {void}

#### Static method: `getReporter(compiler)`

* `compiler` {Compiler}
* Returns: {object}

***

## Class: `ProvidePlugin`

### Constructors

#### `new ProvidePlugin(definitions)`

* `definitions` {Record}
* Returns: {ProvidePlugin}

### Properties

* `definitions` {Record}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Resolver`

### Constructors

#### `new Resolver()`

* Returns: {Resolver}

### Properties

* `fileSystem` {FileSystem}
* `hooks` {KnownHooks}
* `options` {ResolveOptionsResolverFactoryObject1}

### Methods

#### `doResolve(hook, request, message, resolveContext, callback)`

* `hook` {AsyncSeriesBailHook}
* `request` {ResolveRequest}
* `message` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}
* Returns: {void}

#### `ensureHook(name)`

* `name` {string|AsyncSeriesBailHook}
* Returns: {AsyncSeriesBailHook}

#### `getHook(name)`

* `name` {string|AsyncSeriesBailHook}
* Returns: {AsyncSeriesBailHook}

#### `isDirectory(path)`

* `path` {string}
* Returns: {boolean}

#### `isModule(path)`

* `path` {string}
* Returns: {boolean}

#### `isPrivate(path)`

* `path` {string}
* Returns: {boolean}

#### `join(path, request)`

* `path` {string}
* `request` {string}
* Returns: {string}

#### `normalize(path)`

* `path` {string}
* Returns: {string}

#### `parse(identifier)`

* `identifier` {string}
* Returns: {ParsedIdentifier}

#### `resolve(context, path, request, resolveContext, callback)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}
* Returns: {void}

#### `resolveSync(context, path, request)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* Returns: {string|false}

***

## Class: `RuntimeModule`

### Extends

- {Module}

### Extended by

- {GetChunkFilenameRuntimeModule}
- {JsonpChunkLoadingRuntimeModule}
- {CssLoadingRuntimeModule}
- {ModuleChunkLoadingRuntimeModule}

### Constructors

#### `new RuntimeModule(name[, stage])`

* `name` {string}
* `stage` {number}
* Returns: {RuntimeModule}

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

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `SourceMapDevToolPlugin`

### Constructors

#### `new SourceMapDevToolPlugin([options])`

* `options` {SourceMapDevToolPluginOptions}
* Returns: {SourceMapDevToolPlugin}

### Properties

* `fallbackModuleFilenameTemplate` {DevtoolFallbackModuleFilenameTemplate}
* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapFilename` {string|false}
* `sourceMappingURLComment` {string|false|object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Stats`

### Constructors

#### `new Stats(compilation)`

* `compilation` {Compilation}
* Returns: {Stats}

### Properties

* `compilation` {Compilation}
* `endTime` {number}
* `hash` {string}
* `startTime` {number}

### Methods

#### `hasErrors()`

* Returns: {boolean}

#### `hasWarnings()`

* Returns: {boolean}

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

***

## Class: `Template`

### Constructors

#### `new Template()`

* Returns: {Template}

### Properties

* `NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS` {number}
* `NUMBER_OF_IDENTIFIER_START_CHARS` {number}

### Methods

#### Static method: `asString(str)`

* `str` {string|string[]}
* Returns: {string}

#### Static method: `getFunctionContent(fn)`

* `fn` {Stringable}
* Returns: {string}

#### Static method: `getModulesArrayBounds(modules)`

* `modules` {WithId[]}
* Returns: {false|number|number}

#### Static method: `indent(s)`

* `s` {string|string[]}
* Returns: {string}

#### Static method: `numberToIdentifier(n)`

* `n` {number}
* Returns: {string}

#### Static method: `numberToIdentifierContinuation(n)`

* `n` {number}
* Returns: {string}

#### Static method: `prefix(s, prefix)`

* `s` {string|string[]}
* `prefix` {string}
* Returns: {string}

#### Static method: `renderChunkModules(renderContext, modules, renderModule[, prefix])`

* `renderContext` {ChunkRenderContextJavascriptModulesPlugin}
* `modules` {Module[]}
* `renderModule` {object}
* `prefix` {string}
* Returns: {Source}

#### Static method: `renderChunkRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* Returns: {Source}

#### Static method: `renderRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin|object}
* Returns: {Source}

#### Static method: `toComment(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toIdentifier(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toNormalComment(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toPath(str)`

* `str` {string}
* Returns: {string}

***

## Class: `WatchIgnorePlugin`

### Constructors

#### `new WatchIgnorePlugin(options)`

* `options` {WatchIgnorePluginOptions}
* Returns: {WatchIgnorePlugin}

### Properties

* `options` {WatchIgnorePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Watching`

### Constructors

#### `new Watching()`

* Returns: {Watching}

### Properties

* `blocked` {boolean}
* `callbacks` {object[]}
* `closed` {boolean}
* `compiler` {Compiler}
* `handler` {CallbackWebpackFunction_2}
* `invalid` {boolean}
* `lastWatcherStartTime` {number}
* `pausedWatcher` {Watcher}
* `running` {boolean}
* `startTime` {number}
* `suspended` {boolean}
* `watcher` {Watcher}
* `watchOptions` {WatchOptions}

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

#### `invalidate([callback])`

* `callback` {object}
* Returns: {void}

#### `resume()`

* Returns: {void}

#### `suspend()`

* Returns: {void}

#### `watch(files, dirs, missing)`

* `files` {Iterable}
* `dirs` {Iterable}
* `missing` {Iterable}
* Returns: {void}

***

## Class: `WebpackError`

### Extends

- {Error}

### Indexable

\[`index`: {number}\]: {object}

### Constructors

#### `new WebpackError([message][, options])`

* `message` {string}
* `options` {object}
* Returns: {WebpackError}

Creates an instance of WebpackError.

### Properties

* `chunk` {Chunk}
* `details` {string}
* `file` {string}
* `hideStack` {boolean}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `message` {string}
* `module` {Module}
* `name` {string}
* `stack` {string}
* `stackTraceLimit` {number} The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).
The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.
If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

### Methods

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.
```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```
The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.
The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.
The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:
```js
function a() {
  b();
}
function b() {
  c();
}
function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;
  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}
a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Class: `WebpackOptionsApply`

### Extends

- {OptionsApply}

### Constructors

#### `new WebpackOptionsApply()`

* Returns: {WebpackOptionsApply}

### Methods

#### `process(options, compiler[, interception])`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compiler` {Compiler}
* `interception` {WebpackOptionsInterception}
* Returns: {WebpackOptionsNormalizedWithDefaults}

***

## Class: `WebpackOptionsDefaulter`

### Constructors

#### `new WebpackOptionsDefaulter()`

* Returns: {WebpackOptionsDefaulter}

### Methods

#### `process(options)`

* `options` {Configuration}
* Returns: {WebpackOptionsNormalized}

***

## Class: `WebpackOptionsValidationError`

### Extends

- {Error}

### Constructors

#### `new WebpackOptionsValidationError(errors, schema[, configuration])`

* `errors` {SchemaUtilErrorObject[]} array of error objects
* `schema` {Schema} schema
* `configuration` {ValidationErrorConfiguration} configuration
* Returns: {ValidationError}

### Properties

* `baseDataPath` {string} 
* `errors` {SchemaUtilErrorObject[]} 
* `headerName` {string} 
* `message` {string}
* `name` {string}
* `postFormatter` {PostFormatter} 
* `schema` {Schema} 
* `stack` {string}
* `stackTraceLimit` {number} The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

### Methods

#### `formatSchema(schema[, logic][, prevSchemas])`

* `schema` {Schema} schema
* `logic` {boolean} logic
* `prevSchemas` {object[]} prev schemas
* Returns: {string} formatted schema

#### `formatValidationError(error)`

* `error` {SchemaUtilErrorObject} error object
* Returns: {string} formatted error object

#### `formatValidationErrors(errors)`

* `errors` {SchemaUtilErrorObject[]} errors
* Returns: {string} formatted errors

#### `getSchemaPart(path)`

* `path` {string} path
* Returns: {Schema} schema

#### `getSchemaPartDescription([schemaPart])`

* `schemaPart` {Schema} schema part
* Returns: {string} schema part description

#### `getSchemaPartText([schemaPart][, additionalPath][, needDot][, logic])`

* `schemaPart` {Schema} schema part
* `additionalPath` {boolean|string[]} additional path
* `needDot` {boolean} true when need dot
* `logic` {boolean} logic
* Returns: {string} schema part text

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Interface: `Argument`

### Properties

* `configs` {ArgumentConfig[]}
* `description` {string}
* `multiple` {boolean}
* `simpleType` {SimpleType}

***

## Interface: `Asset`

### Properties

* `info` {AssetInfo} info about the asset
* `name` {string} the filename of the asset
* `source` {Source} source of the asset

***

## Interface: `AssetEmittedInfo`

### Properties

* `compilation` {Compilation}
* `content` {Buffer}
* `outputPath` {string}
* `source` {Source}
* `targetPath` {string}

***

## Interface: `Colors`

### Properties

* `bgBlack` {object}
* `bgBlackBright` {object}
* `bgBlue` {object}
* `bgBlueBright` {object}
* `bgCyan` {object}
* `bgCyanBright` {object}
* `bgGreen` {object}
* `bgGreenBright` {object}
* `bgMagenta` {object}
* `bgMagentaBright` {object}
* `bgRed` {object}
* `bgRedBright` {object}
* `bgWhite` {object}
* `bgWhiteBright` {object}
* `bgYellow` {object}
* `bgYellowBright` {object}
* `black` {object}
* `blackBright` {object}
* `blue` {object}
* `blueBright` {object}
* `bold` {object}
* `cyan` {object}
* `cyanBright` {object}
* `dim` {object}
* `gray` {object}
* `green` {object}
* `greenBright` {object}
* `hidden` {object}
* `inverse` {object}
* `italic` {object}
* `magenta` {object}
* `magentaBright` {object}
* `red` {object}
* `redBright` {object}
* `reset` {object}
* `strikethrough` {object}
* `underline` {object}
* `white` {object}
* `whiteBright` {object}
* `yellow` {object}
* `yellowBright` {object}

***

## Interface: `ColorsOptions`

### Properties

* `useColor` {boolean} force use colors

***

## Interface: `Configuration`

Options object as provided by the user.

### Properties

* `amd` {false|object} Set the value of `require.amd` and `define.amd`. Or disable AMD support.
* `bail` {boolean} Report the first error as a hard error instead of tolerating it.
* `cache` {boolean|FileCacheOptions|MemoryCacheOptions} Cache generated modules and chunks to improve performance for multiple incremental builds.
* `context` {string} The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
* `dependencies` {string[]} References to other configurations to depend on.
* `devtool` {string|false|object[]} A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
* `dotenv` {boolean|DotenvPluginOptions} Enable and configure the Dotenv plugin to load environment variables from .env files.
* `entry` {string|string[]|EntryObject|object} The entry point(s) of the compilation.
* `experiments` {Experiments} Enables/Disables experiments (experimental features with relax SemVer compatibility).
* `extends` {string|string[]} Extend configuration from another configuration (only works when using webpack-cli).
* `externals` {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object|ExternalItem[]} Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
* `externalsPresets` {ExternalsPresets} Enable presets of externals for specific targets.
* `externalsType` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
* `ignoreWarnings` {RegExp|object|object[]} Ignore specific warnings.
* `infrastructureLogging` {InfrastructureLogging} Options for infrastructure level logging.
* `loader` {Loader} Custom values available in the loader context.
* `mode` {"development"|"none"|"production"} Enable production optimizations or development hints.
* `module` {ModuleOptions} Options affecting the normal modules (`NormalModuleFactory`).
* `name` {string} Name of the configuration. Used when loading multiple configurations.
* `node` {false|NodeOptions} Include polyfills or mocks for various node stuff.
* `optimization` {Optimization} Enables/Disables integrated optimizations.
* `output` {Output} Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
* `parallelism` {number} The number of parallel processed modules in the compilation.
* `performance` {false|PerformanceOptions} Configuration for web performance recommendations.
* `plugins` {false|""|0|WebpackPluginInstance|object[]} Add additional plugins to the compiler.
* `profile` {boolean} Capture timing information for each module.
* `recordsInputPath` {string|false} Store compiler state to a json file.
* `recordsOutputPath` {string|false} Load compiler state from a json file.
* `recordsPath` {string|false} Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
* `resolve` {ResolveOptions} Options for the resolver.
* `resolveLoader` {ResolveOptions} Options for the resolver when resolving loaders.
* `snapshot` {SnapshotOptionsWebpackOptions} Options affecting how file system snapshots are created and validated.
* `stats` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions} Stats options object or preset name.
* `target` {string|false|string[]} Environment to build for. An array of environments to build for all of them when possible.
* `validate` {boolean} Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
* `watch` {boolean} Enter watch mode, which rebuilds on file change.
* `watchOptions` {WatchOptions} Options for the watcher.

***

## Interface: `EntryObject`

Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.

### Indexable

\[`index`: {string}\]: {string|string[]|EntryDescription}

***

## Interface: `ExternalItemFunctionData`

### Properties

* `context` {string} the directory in which the request is placed
* `contextInfo` {ModuleFactoryCreateDataContextInfo} contextual information
* `dependencyType` {string} the category of the referencing dependency
* `getResolve` {object} get a resolve function with the current resolver options
* `request` {string} the request as written by the user in the require/import expression/statement

***

## Interface: `ExternalItemObjectKnown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Properties

* `byLayer` {object|object} Specify externals depending on the layer.

***

## Interface: `ExternalItemObjectUnknown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Indexable

\[`index`: {string}\]: {ExternalItemValue}

***

## Interface: `FileCacheOptions`

Options object for persistent file-based caching.

### Properties

* `allowCollectingMemory` {boolean} Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.
* `buildDependencies` {object} Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').
* `cacheDirectory` {string} Base directory for the cache (defaults to node_modules/.cache/webpack).
* `cacheLocation` {string} Locations for the cache (defaults to cacheDirectory / name).
* `compression` {false|"gzip"|"brotli"} Compression type used for the cache files.
* `hashAlgorithm` {string} Algorithm used for generation the hash (see node.js crypto package).
* `idleTimeout` {number} Time in ms after which idle period the cache storing should happen.
* `idleTimeoutAfterLargeChanges` {number} Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).
* `idleTimeoutForInitialStore` {number} Time in ms after which idle period the initial cache storing should happen.
* `immutablePaths` {string|RegExp[]} List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.
* `managedPaths` {string|RegExp[]} List of paths that are managed by a package manager and can be trusted to not be modified otherwise.
* `maxAge` {number} Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).
* `maxMemoryGenerations` {number} Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.
* `memoryCacheUnaffected` {boolean} Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.
* `name` {string} Name for the cache. Different names will lead to different coexisting caches.
* `profile` {boolean} Track and log detailed timing information for individual cache items.
* `readonly` {boolean} Enable/disable readonly mode.
* `store` {"pack"} When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).
* `type` {"filesystem"} Filesystem caching.
* `version` {string} Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.

***

## Interface: `GeneratorOptionsByModuleTypeKnown`

Specify options for each generator.

### Properties

* `asset` {AssetGeneratorOptions} Generator options for asset modules.
* `asset/bytes` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `asset/inline` {AssetInlineGeneratorOptions} Generator options for asset/inline modules.
* `asset/resource` {AssetResourceGeneratorOptions} Generator options for asset/resource modules.
* `asset/source` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `css` {CssGeneratorOptions} Generator options for css modules.
* `css/auto` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `css/global` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `css/module` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `javascript` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/auto` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/dynamic` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/esm` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `json` {JsonGeneratorOptions} Generator options for json modules.

***

## Interface: `InputFileSystem`

### Properties

* `dirname` {object}
* `join` {object}
* `lstat` {LStatFs}
* `lstatSync` {LStatSync}
* `purge` {object}
* `readdir` {ReaddirFs}
* `readdirSync` {ReaddirSync}
* `readFile` {ReadFileFs}
* `readFileSync` {ReadFileSync}
* `readJson` {object}
* `readJsonSync` {object}
* `readlink` {ReadlinkFs}
* `readlinkSync` {ReadlinkSync}
* `realpath` {RealPathFs}
* `realpathSync` {RealPathSync}
* `relative` {object}
* `stat` {StatFs}
* `statSync` {StatSync}

***

## Interface: `LibraryOptions`

Options for library.

### Properties

* `amdContainer` {string} Add a container for define/require functions in the AMD module.
* `auxiliaryComment` {string|LibraryCustomUmdCommentObject} Add a comment in the UMD wrapper.
* `export` {string|string[]} Specify which export should be exposed as library.
* `name` {string|string[]|LibraryCustomUmdObject} The name of the library (some types allow unnamed libraries too).
* `type` {string} Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).
* `umdNamedDefine` {boolean} If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.

***

## Interface: `LoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {string}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `LoaderModule`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

### Properties

* `default` {RawLoaderDefinitionFunction|LoaderDefinitionFunction}
* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {false}

***

## Interface: `MemoryCacheOptions`

Options object for in-memory caching.

### Properties

* `cacheUnaffected` {boolean} Additionally cache computation of modules that are unchanged and reference only unchanged modules.
* `maxGenerations` {number} Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).
* `type` {"memory"} In memory caching.

***

## Interface: `ModuleOptions`

Options affecting the normal modules (`NormalModuleFactory`).

### Properties

* `defaultRules` {false|""|0|"..."|RuleSetRule[]} An array of rules applied by default for modules.
* `exprContextCritical` {boolean} Enable warnings for full dynamic dependencies.
* `exprContextRecursive` {boolean} Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.
* `exprContextRegExp` {boolean|RegExp} Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.
* `exprContextRequest` {string} Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.
* `generator` {GeneratorOptionsByModuleType} Specify options for each generator.
* `noParse` {string|RegExp|object|string|RegExp|object[]} Don't parse files matching. It's matched against the full resolved request.
* `parser` {ParserOptionsByModuleType} Specify options for each parser.
* `rules` {false|""|0|"..."|RuleSetRule[]} An array of rules applied for modules.
* `strictExportPresence` {boolean} Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.
* `strictThisContextOnImports` {boolean} Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.
* `unknownContextCritical` {boolean} Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.
* `unknownContextRecursive` {boolean} Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.
* `unknownContextRegExp` {boolean|RegExp} Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.
* `unknownContextRequest` {string} Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.
* `unsafeCache` {boolean|object} Cache the resolving of module requests.
* `wrappedContextCritical` {boolean} Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.
* `wrappedContextRecursive` {boolean} Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.
* `wrappedContextRegExp` {RegExp} Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.

***

## Interface: `MultiCompilerOptions`

### Properties

* `parallelism` {number} how many Compilers are allows to run at the same time in parallel

***

## Interface: `ObjectDeserializerContext`

### Properties

* `read` {object}
* `setCircularReference` {object}

***

## Interface: `ObjectSerializerContext`

### Properties

* `rollback` {object}
* `setCircularReference` {object}
* `snapshot` {object}
* `write` {object}
* `writeLazy` {object}
* `writeSeparate` {object}

***

## Interface: `OutputFileSystem`

### Properties

* `createReadStream` {object}
* `dirname` {object}
* `join` {object}
* `lstat` {LStatFs}
* `mkdir` {Mkdir}
* `readdir` {ReaddirFs}
* `readFile` {ReadFileFs}
* `relative` {object}
* `rmdir` {object}
* `stat` {StatFs}
* `unlink` {object}
* `writeFile` {WriteFile}

***

## Interface: `ParserOptionsByModuleTypeKnown`

Specify options for each parser.

### Properties

* `asset` {AssetParserOptions} Parser options for asset modules.
* `asset/bytes` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/inline` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/resource` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/source` {EmptyParserOptions} No parser options are supported for this module type.
* `css` {CssParserOptions} Parser options for css modules.
* `css/auto` {CssModuleParserOptions} Parser options for css/module modules.
* `css/global` {CssModuleParserOptions} Parser options for css/module modules.
* `css/module` {CssModuleParserOptions} Parser options for css/module modules.
* `javascript` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/auto` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/dynamic` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/esm` {JavascriptParserOptions} Parser options for javascript modules.
* `json` {JsonParserOptions} Parser options for JSON modules.

***

## Interface: `PathData`

### Properties

* `basename` {string}
* `chunk` {Chunk|ChunkPathData}
* `chunkGraph` {ChunkGraph}
* `contentHash` {string}
* `contentHashType` {string}
* `contentHashWithLength` {object}
* `filename` {string}
* `hash` {string}
* `hashWithLength` {object}
* `module` {Module|ModulePathData}
* `noChunkHash` {boolean}
* `prepareId` {object}
* `query` {string}
* `runtime` {RuntimeSpec}
* `url` {string}

***

## Interface: `PitchLoaderDefinitionFunction(this, remainingRequest, previousRequest, data)`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `remainingRequest` {string}
* `previousRequest` {string}
* `data` {object}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `Problem`

### Properties

* `argument` {string}
* `expected` {string}
* `index` {number}
* `path` {string}
* `type` {ProblemType}
* `value` {string|number|boolean|RegExp}

***

## Interface: `RawLoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {Buffer}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `RenderManifestOptions`

### Properties

* `chunk` {Chunk} the chunk used to render
* `chunkGraph` {ChunkGraph}
* `codeGenerationResults` {CodeGenerationResults}
* `dependencyTemplates` {DependencyTemplates}
* `fullHash` {string}
* `hash` {string}
* `moduleGraph` {ModuleGraph}
* `moduleTemplates` {object}
* `outputOptions` {OutputNormalizedWithDefaults}
* `runtimeTemplate` {RuntimeTemplate}

***

## Interface: `ResolveData`

### Properties

* `attributes` {ImportAttributes}
* `cacheable` {boolean} allow to use the unsafe cache
* `context` {string}
* `contextDependencies` {LazySet}
* `contextInfo` {ModuleFactoryCreateDataContextInfo}
* `createData` {Partial}
* `dependencies` {ModuleDependency[]}
* `dependencyType` {string}
* `fileDependencies` {LazySet}
* `ignoredModule` {Module}
* `missingDependencies` {LazySet}
* `request` {string}
* `resolveOptions` {ResolveOptions}

***

## Interface: `ResolveOptions`

Options object for resolving requests.

### Properties

* `alias` {object[]|object} Redirect module requests.
* `aliasFields` {string|string[][]} Fields in the description file (usually package.json) which are used to redirect requests inside the module.
* `byDependency` {object} Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".
* `cache` {boolean} Enable caching of successfully resolved requests (cache entries are revalidated).
* `cachePredicate` {object} Predicate function to decide which requests should be cached.
* `cacheWithContext` {boolean} Include the context information in the cache identifier when caching.
* `conditionNames` {string[]} Condition names for exports field entry point.
* `descriptionFiles` {string[]} Filenames used to find a description file (like a package.json).
* `enforceExtension` {boolean} Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).
* `exportsFields` {string[]} Field names from the description file (usually package.json) which are used to provide entry points of a package.
* `extensionAlias` {object} An object which maps extension to extension aliases.
* `extensions` {string[]} Extensions added to the request when trying to find the file.
* `fallback` {object[]|object} Redirect module requests when normal resolving fails.
* `fileSystem` {InputFileSystem} Filesystem for the resolver.
* `fullySpecified` {boolean} Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).
* `importsFields` {string[]} Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).
* `mainFields` {string|string[][]} Field names from the description file (package.json) which are used to find the default entry point.
* `mainFiles` {string[]} Filenames used to find the default entry point if there is no description file or main field.
* `modules` {string[]} Folder names or directory paths where to find modules.
* `plugins` {false|""|0|"..."|object|object[]} Plugins for the resolver.
* `preferAbsolute` {boolean} Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.
* `preferRelative` {boolean} Prefer to resolve module requests as relative request and fallback to resolving as module.
* `resolver` {Resolver} Custom resolver.
* `restrictions` {string|RegExp[]} A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.
* `roots` {string[]} A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.
* `symlinks` {boolean} Enable resolving symlinks to the original location.
* `tsconfig` {string|boolean|object} TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options.
* `unsafeCache` {boolean|object} Enable caching of successfully resolved requests (cache entries are not revalidated).
* `useSyncFileSystemCalls` {boolean} Use synchronous filesystem calls for the resolver.

***

## Interface: `RuleSetRule`

A rule description with conditions and effects for modules.

### Properties

* `assert` {object} Match on import assertions of the dependency.
* `compiler` {string|RegExp|RuleSetLogicalConditions|object|RuleSetCondition[]} Match the child compiler name.
* `dependency` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match dependency type.
* `descriptionData` {object} Match values of properties in the description file (usually package.json).
* `enforce` {"pre"|"post"} Enforce this rule as pre or post step.
* `exclude` {string|RegExp|RuleSetLogicalConditionsAbsolute|object|RuleSetConditionAbsolute[]} Shortcut for resource.exclude.
* `extractSourceMap` {boolean} Enable/Disable extracting source map.
* `generator` {object} The options for the module generator.
* `include` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Shortcut for resource.include.
* `issuer` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the issuer of the module (The module pointing to this module).
* `issuerLayer` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match layer of the issuer of this module (The module pointing to this module).
* `layer` {string} Specifies the layer in which the module should be placed in.
* `loader` {string} Shortcut for use.loader.
* `mimetype` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match module mimetype when load from Data URI.
* `oneOf` {false|""|0|RuleSetRule[]} Only execute the first matching rule in this array.
* `options` {string|object} Shortcut for use.options.
* `parser` {object} Options for parsing.
* `realResource` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the real resource path of the module.
* `resolve` {ResolveOptions} Options for the resolver.
* `resource` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the resource path of the module.
* `resourceFragment` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match the resource fragment of the module.
* `resourceQuery` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match the resource query of the module.
* `rules` {false|""|0|RuleSetRule[]} Match and execute these rules when this rule is matched.
* `scheme` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match module scheme.
* `sideEffects` {boolean} Flags a module as with or without side effects.
* `test` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Shortcut for resource.test.
* `type` {string} Module type to use for the module.
* `use` {string|RuleSetUseFunction|string|false|0|RuleSetUseFunction|object[]|object} Modifiers applied to the module when rule is matched.
* `with` {object} Match on import attributes of the dependency.

***

## Interface: `StatsOptions`

Stats options object.

### Properties

* `all` {boolean} Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).
* `assets` {boolean} Add assets information.
* `assetsSort` {string|false} Sort the assets by that field.
* `assetsSpace` {number} Space to display assets (groups will be collapsed to fit this space).
* `builtAt` {boolean} Add built at time information.
* `cached` {boolean} Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).
* `cachedAssets` {boolean} Show cached assets (setting this to `false` only shows emitted files).
* `cachedModules` {boolean} Add information about cached (not built) modules.
* `children` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions|StatsValue[]} Add children information.
* `chunkGroupAuxiliary` {boolean} Display auxiliary assets in chunk groups.
* `chunkGroupChildren` {boolean} Display children of chunk groups.
* `chunkGroupMaxAssets` {number} Limit of assets displayed in chunk groups.
* `chunkGroups` {boolean} Display all chunk groups with the corresponding bundles.
* `chunkModules` {boolean} Add built modules information to chunk information.
* `chunkModulesSpace` {number} Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).
* `chunkOrigins` {boolean} Add the origins of chunks and chunk merging info.
* `chunkRelations` {boolean} Add information about parent, children and sibling chunks to chunk information.
* `chunks` {boolean} Add chunk information.
* `chunksSort` {string|false} Sort the chunks by that field.
* `colors` {boolean|object} Enables/Disables colorful output.
* `context` {string} Context directory for request shortening.
* `dependentModules` {boolean} Show chunk modules that are dependencies of other modules of the chunk.
* `depth` {boolean} Add module depth in module graph.
* `entrypoints` {boolean|"auto"} Display the entry points with the corresponding bundles.
* `env` {boolean} Add --env information.
* `errorCause` {boolean|"auto"} Add cause to errors.
* `errorDetails` {boolean|"auto"} Add details to errors (like resolving log).
* `errorErrors` {boolean|"auto"} Add nested errors to errors (like in AggregateError).
* `errors` {boolean} Add errors.
* `errorsCount` {boolean} Add errors count.
* `errorsSpace` {number} Space to display errors (value is in number of lines).
* `errorStack` {boolean} Add internal stack trace to errors.
* `exclude` {string|boolean|RegExp|ModuleFilterItemTypes[]|object} Please use excludeModules instead.
* `excludeAssets` {string|RegExp|AssetFilterItemTypes[]|object} Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.
* `excludeModules` {string|boolean|RegExp|ModuleFilterItemTypes[]|object} Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.
* `groupAssetsByChunk` {boolean} Group assets by how their are related to chunks.
* `groupAssetsByEmitStatus` {boolean} Group assets by their status (emitted, compared for emit or cached).
* `groupAssetsByExtension` {boolean} Group assets by their extension.
* `groupAssetsByInfo` {boolean} Group assets by their asset info (immutable, development, hotModuleReplacement, etc).
* `groupAssetsByPath` {boolean} Group assets by their path.
* `groupModulesByAttributes` {boolean} Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).
* `groupModulesByCacheStatus` {boolean} Group modules by their status (cached or built and cacheable).
* `groupModulesByExtension` {boolean} Group modules by their extension.
* `groupModulesByLayer` {boolean} Group modules by their layer.
* `groupModulesByPath` {boolean} Group modules by their path.
* `groupModulesByType` {boolean} Group modules by their type.
* `groupReasonsByOrigin` {boolean} Group reasons by their origin module.
* `hash` {boolean} Add the hash of the compilation.
* `ids` {boolean} Add ids.
* `logging` {boolean|"error"|"warn"|"info"|"log"|"verbose"|"none"} Add logging output.
* `loggingDebug` {string|boolean|RegExp|FilterItemTypes[]|object} Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.
* `loggingTrace` {boolean} Add stack traces to logging output.
* `moduleAssets` {boolean} Add information about assets inside modules.
* `modules` {boolean} Add built modules information.
* `modulesSort` {string|false} Sort the modules by that field.
* `modulesSpace` {number} Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).
* `moduleTrace` {boolean} Add dependencies and origin of warnings/errors.
* `nestedModules` {boolean} Add information about modules nested in other modules (like with module concatenation).
* `nestedModulesSpace` {number} Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).
* `optimizationBailout` {boolean} Show reasons why optimization bailed out for modules.
* `orphanModules` {boolean} Add information about orphan modules.
* `outputPath` {boolean} Add output path information.
* `performance` {boolean} Add performance hint flags.
* `preset` {string|boolean} Preset for the default values.
* `providedExports` {boolean} Show exports provided by modules.
* `publicPath` {boolean} Add public path information.
* `reasons` {boolean} Add information about the reasons why modules are included.
* `reasonsSpace` {number} Space to display reasons (groups will be collapsed to fit this space).
* `relatedAssets` {boolean} Add information about assets that are related to other assets (like SourceMaps for assets).
* `runtime` {boolean} Add information about runtime modules (deprecated: use 'runtimeModules' instead).
* `runtimeModules` {boolean} Add information about runtime modules.
* `source` {boolean} Add the source code of modules.
* `timings` {boolean} Add timing information.
* `usedExports` {boolean} Show exports used by modules.
* `version` {boolean} Add webpack version information.
* `warnings` {boolean} Add warnings.
* `warningsCount` {boolean} Add warnings count.
* `warningsFilter` {string|RegExp|WarningFilterItemTypes[]|object} Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.
* `warningsSpace` {number} Space to display warnings (value is in number of lines).

***

## Interface: `WebpackOptionsNormalized`

Normalized webpack options object.

### Properties

* `amd` {false|object} Set the value of `require.amd` and `define.amd`. Or disable AMD support.
* `bail` {boolean} Report the first error as a hard error instead of tolerating it.
* `cache` {CacheOptionsNormalized} Cache generated modules and chunks to improve performance for multiple incremental builds.
* `context` {string} The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
* `dependencies` {string[]} References to other configurations to depend on.
* `devServer` {false|object} Options for the webpack-dev-server.
* `devtool` {string|false|object[]} A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
* `dotenv` {boolean|DotenvPluginOptions} Enable and configure the Dotenv plugin to load environment variables from .env files.
* `entry` {EntryNormalized} The entry point(s) of the compilation.
* `experiments` {ExperimentsNormalized} Enables/Disables experiments (experimental features with relax SemVer compatibility).
* `externals` {Externals} Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
* `externalsPresets` {ExternalsPresets} Enable presets of externals for specific targets.
* `externalsType` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
* `ignoreWarnings` {object[]} Ignore specific warnings.
* `infrastructureLogging` {InfrastructureLogging} Options for infrastructure level logging.
* `loader` {Loader} Custom values available in the loader context.
* `mode` {"development"|"none"|"production"} Enable production optimizations or development hints.
* `module` {ModuleOptionsNormalized} Options affecting the normal modules (`NormalModuleFactory`).
* `name` {string} Name of the configuration. Used when loading multiple configurations.
* `node` {Node} Include polyfills or mocks for various node stuff.
* `optimization` {OptimizationNormalized} Enables/Disables integrated optimizations.
* `output` {OutputNormalized} Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
* `parallelism` {number} The number of parallel processed modules in the compilation.
* `performance` {false|PerformanceOptions} Configuration for web performance recommendations.
* `plugins` {WebpackPluginInstance|object[]} Add additional plugins to the compiler.
* `profile` {boolean} Capture timing information for each module.
* `recordsInputPath` {string|false} Store compiler state to a json file.
* `recordsOutputPath` {string|false} Load compiler state from a json file.
* `resolve` {ResolveOptions} Options for the resolver.
* `resolveLoader` {ResolveOptions} Options for the resolver when resolving loaders.
* `snapshot` {SnapshotOptionsWebpackOptions} Options affecting how file system snapshots are created and validated.
* `stats` {StatsValue} Stats options object or preset name.
* `target` {string|false|string[]} Environment to build for. An array of environments to build for all of them when possible.
* `validate` {boolean} Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
* `watch` {boolean} Enter watch mode, which rebuilds on file change.
* `watchOptions` {WatchOptions} Options for the watcher.

***

## Interface: `WebpackPluginInstance`

Plugin instance.

### Indexable

\[`index`: {string}\]: {any}

### Properties

* `apply` {object} The run point of the plugin, required method.

***

## Type: `AssetInfo`

> **AssetInfo** = {KnownAssetInfo|Record}

***

## Type: `Entry`

> **Entry** = {string|object|EntryObject|string[]}

***

## Type: `EntryNormalized`

> **EntryNormalized** = {object|EntryStaticNormalized}

***

## Type: `EntryOptions`

> **EntryOptions** = {object|Omit}

### Type Declaration

* `name` {string}

***

## Type: `ExternalItem`

> **ExternalItem** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object}

***

## Type: `ExternalItemFunction`

> **ExternalItemFunction** = {object|object}

***

## Type: `ExternalItemFunctionCallback`

> **ExternalItemFunctionCallback** = {object}

* `data` {ExternalItemFunctionData}
* `callback` {object}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolve`

> **ExternalItemFunctionDataGetResolve** = {object}

* `options` {ResolveOptions}
* Returns: {object|object}

***

## Type: `ExternalItemFunctionDataGetResolveCallbackResult`

> **ExternalItemFunctionDataGetResolveCallbackResult** = {object}

* `context` {string}
* `request` {string}
* `callback` {object}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolveResult`

> **ExternalItemFunctionDataGetResolveResult** = {object}

* `context` {string}
* `request` {string}
* Returns: {Promise}

***

## Type: `ExternalItemFunctionPromise`

> **ExternalItemFunctionPromise** = {object}

* `data` {ExternalItemFunctionData}
* Returns: {Promise}

***

## Type: `ExternalItemValue`

> **ExternalItemValue** = {string|boolean|string[]|object}

***

## Type: `Externals`

> **Externals** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object|ExternalItem[]}

***

## Type: `LoaderContext`

> **LoaderContext**\<`OptionsType`\> = {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext}

### Type Parameters

#### OptionsType

`OptionsType`

***

## Type: `LoaderDefinition`

> **LoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {LoaderDefinitionFunction|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {false}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## Type: `MultiConfiguration`

> **MultiConfiguration** = {ReadonlyArray|MultiCompilerOptions}

***

## Type: `ParserState`

> **ParserState** = {ParserStateBase|Record}

***

## Type: `RawLoaderDefinition`

> **RawLoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {RawLoaderDefinitionFunction|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {true}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## Type: `RenderManifestEntry`

> **RenderManifestEntry** = {RenderManifestEntryTemplated|RenderManifestEntryStatic}

***

## Type: `ResolvePluginInstance`

> **ResolvePluginInstance** = {object|object}

### Type Declaration

{object}

### Index Signature

\[`index`: {string}\]: {any}

* `apply` {object} The run point of the plugin, required method.

{object}

* `this` {Resolver}
* `arg1` {Resolver}
* Returns: {void}

***

## Type: `RuleSetCondition`

> **RuleSetCondition** = {string|RegExp|object|RuleSetLogicalConditions|RuleSetCondition[]}

***

## Type: `RuleSetConditionAbsolute`

> **RuleSetConditionAbsolute** = {string|RegExp|object|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]}

***

## Type: `RuleSetUse`

> **RuleSetUse** = {string|undefined|null|string|false|0|RuleSetUseFunction|object[]|RuleSetUseFunction|object}

### Type Declaration

{string}

{undefined|null|string|false|0|RuleSetUseFunction|object[]}

{RuleSetUseFunction}

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## Type: `RuleSetUseFunction`

> **RuleSetUseFunction** = {object}

* `data` {EffectData}
* Returns: {string|RuleSetUseFunction|object|undefined|null|string|false|0|RuleSetUseFunction|object[]}

***

## Type: `RuleSetUseItem`

> **RuleSetUseItem** = {string|RuleSetUseFunction|object}

### Type Declaration

{string}

{RuleSetUseFunction}

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## Type: `StatsAsset`

> **StatsAsset** = {KnownStatsAsset|Record}

***

## Type: `StatsChunk`

> **StatsChunk** = {KnownStatsChunk|Record}

***

## Type: `StatsChunkGroup`

> **StatsChunkGroup** = {KnownStatsChunkGroup|Record}

***

## Type: `StatsChunkOrigin`

> **StatsChunkOrigin** = {KnownStatsChunkOrigin|Record}

***

## Type: `StatsCompilation`

> **StatsCompilation** = {KnownStatsCompilation|Record}

***

## Type: `StatsError`

> **StatsError** = {KnownStatsError|Record}

***

## Type: `StatsLogging`

> **StatsLogging** = {KnownStatsLogging|Record}

***

## Type: `StatsLoggingEntry`

> **StatsLoggingEntry** = {KnownStatsLoggingEntry|Record}

***

## Type: `StatsModule`

> **StatsModule** = {KnownStatsModule|Record}

***

## Type: `StatsModuleIssuer`

> **StatsModuleIssuer** = {KnownStatsModuleIssuer|Record}

***

## Type: `StatsModuleReason`

> **StatsModuleReason** = {KnownStatsModuleReason|Record}

***

## Type: `StatsModuleTraceDependency`

> **StatsModuleTraceDependency** = {KnownStatsModuleTraceDependency|Record}

***

## Type: `StatsModuleTraceItem`

> **StatsModuleTraceItem** = {KnownStatsModuleTraceItem|Record}

***

## Type: `StatsProfile`

> **StatsProfile** = {KnownStatsProfile|Record}

***

## Type: `TemplatePath`

> **TemplatePath** = {string|object}

***

## Type: `WebpackPluginFunction`

> **WebpackPluginFunction** = {object}

* `this` {Compiler}
* `compiler` {Compiler}
* Returns: {void}

***

## `UsageState`

> `const` **UsageState**: {Readonly}

***

## `validate`

> `const` **validate**: {object}

* `configuration` {Configuration|MultiConfiguration}
* Returns: {void}

***

## `validateSchema`

> `const` **validateSchema**: {object}

* `schema` {Parameters}
* `options` {Parameters}
* `validationConfiguration` {ValidationErrorConfiguration}
* Returns: {void}

***

## `version`

> `const` **version**: {string}

***

## `webpack`

> `const` **webpack**: {_functionWebpack}

***

## `export=(options, callback)`

### Call Signature

* `options` {Configuration}
* `callback` {CallbackWebpackFunction_2}
* Returns: {Compiler}

### Call Signature

* `options` {Configuration}
* Returns: {Compiler}

### Call Signature

* `options` {MultiConfiguration}
* `callback` {CallbackWebpackFunction_2}
* Returns: {MultiCompiler}

### Call Signature

* `options` {MultiConfiguration}
* Returns: {MultiCompiler}

***

## `Argument`

Re-exports [Argument](#argument)

***

## `Asset`

Re-exports [Asset](#asset)

***

## `AssetEmittedInfo`

Re-exports [AssetEmittedInfo](#assetemittedinfo)

***

## `AssetInfo`

Re-exports [AssetInfo](#assetinfo-1)

***

## `AsyncDependenciesBlock`

Re-exports [AsyncDependenciesBlock](#asyncdependenciesblock)

***

## `AutomaticPrefetchPlugin`

Re-exports [AutomaticPrefetchPlugin](#automaticprefetchplugin)

***

## `BannerPlugin`

Re-exports [BannerPlugin](#bannerplugin)

***

## `Cache`

Re-exports [Cache](#cache)

***

## `Chunk`

Re-exports [Chunk](#chunk)

***

## `ChunkGraph`

Re-exports [ChunkGraph](#chunkgraph)

***

## `ChunkGroup`

Re-exports [ChunkGroup](#abstract-chunkgroup)

***

## `CleanPlugin`

Re-exports [CleanPlugin](#cleanplugin)

***

## `CodeGenerationResults`

Re-exports [CodeGenerationResults](#abstract-codegenerationresults)

***

## `Colors`

Re-exports [Colors](#colors)

***

## `ColorsOptions`

Re-exports [ColorsOptions](#colorsoptions)

***

## `Compilation`

Re-exports [Compilation](#compilation)

***

## `Compiler`

Re-exports [Compiler](#compiler-1)

***

## `ConcatenationScope`

Re-exports [ConcatenationScope](#concatenationscope)

***

## `Configuration`

Re-exports [Configuration](#configuration)

***

## `ContextExclusionPlugin`

Re-exports [ContextExclusionPlugin](#contextexclusionplugin)

***

## `ContextReplacementPlugin`

Re-exports [ContextReplacementPlugin](#contextreplacementplugin)

***

## `DefinePlugin`

Re-exports [DefinePlugin](#defineplugin)

***

## `DelegatedPlugin`

Re-exports [DelegatedPlugin](#delegatedplugin)

***

## `Dependency`

Re-exports [Dependency](#dependency)

***

## `DllPlugin`

Re-exports [DllPlugin](#dllplugin)

***

## `DllReferencePlugin`

Re-exports [DllReferencePlugin](#dllreferenceplugin)

***

## `DotenvPlugin`

Re-exports [DotenvPlugin](#dotenvplugin)

***

## `DynamicEntryPlugin`

Re-exports [DynamicEntryPlugin](#dynamicentryplugin)

***

## `Entry`

Re-exports [Entry](#entry-4)

***

## `EntryNormalized`

Re-exports [EntryNormalized](#entrynormalized)

***

## `EntryObject`

Re-exports [EntryObject](#entryobject)

***

## `EntryOptionPlugin`

Re-exports [EntryOptionPlugin](#entryoptionplugin)

***

## `EntryOptions`

Re-exports [EntryOptions](#entryoptions)

***

## `EntryPlugin`

Re-exports [EntryPlugin](#entryplugin)

***

## `Entrypoint`

Re-exports [Entrypoint](#abstract-entrypoint)

***

## `EnvironmentPlugin`

Re-exports [EnvironmentPlugin](#environmentplugin)

***

## `EvalDevToolModulePlugin`

Re-exports [EvalDevToolModulePlugin](#evaldevtoolmoduleplugin)

***

## `EvalSourceMapDevToolPlugin`

Re-exports [EvalSourceMapDevToolPlugin](#evalsourcemapdevtoolplugin)

***

## `ExternalItem`

Re-exports [ExternalItem](#externalitem)

***

## `ExternalItemFunction`

Re-exports [ExternalItemFunction](#externalitemfunction)

***

## `ExternalItemFunctionCallback`

Re-exports [ExternalItemFunctionCallback](#externalitemfunctioncallback)

***

## `ExternalItemFunctionData`

Re-exports [ExternalItemFunctionData](#externalitemfunctiondata)

***

## `ExternalItemFunctionDataGetResolve`

Re-exports [ExternalItemFunctionDataGetResolve](#externalitemfunctiondatagetresolve-1)

***

## `ExternalItemFunctionDataGetResolveCallbackResult`

Re-exports [ExternalItemFunctionDataGetResolveCallbackResult](#externalitemfunctiondatagetresolvecallbackresult)

***

## `ExternalItemFunctionDataGetResolveResult`

Re-exports [ExternalItemFunctionDataGetResolveResult](#externalitemfunctiondatagetresolveresult)

***

## `ExternalItemFunctionPromise`

Re-exports [ExternalItemFunctionPromise](#externalitemfunctionpromise)

***

## `ExternalItemObjectKnown`

Re-exports [ExternalItemObjectKnown](#externalitemobjectknown)

***

## `ExternalItemObjectUnknown`

Re-exports [ExternalItemObjectUnknown](#externalitemobjectunknown)

***

## `ExternalItemValue`

Re-exports [ExternalItemValue](#externalitemvalue)

***

## `ExternalModule`

Re-exports [ExternalModule](#externalmodule)

***

## `Externals`

Re-exports [Externals](#externals-3)

***

## `ExternalsPlugin`

Re-exports [ExternalsPlugin](#externalsplugin)

***

## `FileCacheOptions`

Re-exports [FileCacheOptions](#filecacheoptions)

***

## `Generator`

Re-exports [Generator](#generator)

***

## `GeneratorOptionsByModuleTypeKnown`

Re-exports [GeneratorOptionsByModuleTypeKnown](#generatoroptionsbymoduletypeknown)

***

## `HotModuleReplacementPlugin`

Re-exports [HotModuleReplacementPlugin](#hotmodulereplacementplugin)

***

## `HotUpdateChunk`

Re-exports [HotUpdateChunk](#hotupdatechunk)

***

## `IgnorePlugin`

Re-exports [IgnorePlugin](#ignoreplugin)

***

## `InitFragment`

Re-exports [InitFragment](#initfragment)

***

## `InputFileSystem`

Re-exports [InputFileSystem](#inputfilesystem-3)

***

## `JavascriptModulesPlugin`

Re-exports [JavascriptModulesPlugin](#javascriptmodulesplugin)

***

## `LibManifestPlugin`

Re-exports [LibManifestPlugin](#libmanifestplugin)

***

## `LibraryOptions`

Re-exports [LibraryOptions](#libraryoptions)

***

## `LibraryTemplatePlugin`

Re-exports [LibraryTemplatePlugin](#librarytemplateplugin)

***

## `LoaderContext`

Re-exports [LoaderContext](#loadercontext)

***

## `LoaderDefinition`

Re-exports [LoaderDefinition](#loaderdefinition)

***

## `LoaderDefinitionFunction`

Re-exports [LoaderDefinitionFunction](#loaderdefinitionfunction)

***

## `LoaderModule`

Re-exports [LoaderModule](#loadermodule)

***

## `LoaderOptionsPlugin`

Re-exports [LoaderOptionsPlugin](#loaderoptionsplugin)

***

## `LoaderTargetPlugin`

Re-exports [LoaderTargetPlugin](#loadertargetplugin)

***

## `ManifestPlugin`

Re-exports [ManifestPlugin](#manifestplugin)

***

## `MemoryCacheOptions`

Re-exports [MemoryCacheOptions](#memorycacheoptions)

***

## `Module`

Re-exports [Module](#module-2)

***

## `ModuleFactory`

Re-exports [ModuleFactory](#modulefactory)

***

## `ModuleGraph`

Re-exports [ModuleGraph](#modulegraph-2)

***

## `ModuleGraphConnection`

Re-exports [ModuleGraphConnection](#modulegraphconnection-1)

***

## `ModuleOptions`

Re-exports [ModuleOptions](#moduleoptions)

***

## `MultiCompiler`

Re-exports [MultiCompiler](#multicompiler)

***

## `MultiCompilerOptions`

Re-exports [MultiCompilerOptions](#multicompileroptions-1)

***

## `MultiConfiguration`

Re-exports [MultiConfiguration](#multiconfiguration)

***

## `MultiStats`

Re-exports [MultiStats](#abstract-multistats)

***

## `MultiStatsOptions`

Renames and re-exports [StatsOptions](#statsoptions)

***

## `MultiStatsOptions`

Renames and re-exports [StatsOptions](#statsoptions)

***

## `NoEmitOnErrorsPlugin`

Re-exports [NoEmitOnErrorsPlugin](#noemitonerrorsplugin)

***

## `NormalModule`

Re-exports [NormalModule](#normalmodule)

***

## `NormalModuleReplacementPlugin`

Re-exports [NormalModuleReplacementPlugin](#normalmodulereplacementplugin)

***

## `ObjectDeserializerContext`

Re-exports [ObjectDeserializerContext](#objectdeserializercontext)

***

## `ObjectSerializerContext`

Re-exports [ObjectSerializerContext](#objectserializercontext)

***

## `OutputFileSystem`

Re-exports [OutputFileSystem](#outputfilesystem-2)

***

## `Parser`

Re-exports [Parser](#parser-1)

***

## `ParserOptionsByModuleTypeKnown`

Re-exports [ParserOptionsByModuleTypeKnown](#parseroptionsbymoduletypeknown)

***

## `ParserState`

Re-exports [ParserState](#parserstate)

***

## `PathData`

Re-exports [PathData](#pathdata)

***

## `PitchLoaderDefinitionFunction`

Re-exports [PitchLoaderDefinitionFunction](#pitchloaderdefinitionfunction)

***

## `PlatformPlugin`

Re-exports [PlatformPlugin](#platformplugin)

***

## `PrefetchPlugin`

Re-exports [PrefetchPlugin](#prefetchplugin)

***

## `Problem`

Re-exports [Problem](#problem)

***

## `ProgressPlugin`

Re-exports [ProgressPlugin](#progressplugin)

***

## `ProvidePlugin`

Re-exports [ProvidePlugin](#provideplugin)

***

## `RawLoaderDefinition`

Re-exports [RawLoaderDefinition](#rawloaderdefinition)

***

## `RawLoaderDefinitionFunction`

Re-exports [RawLoaderDefinitionFunction](#rawloaderdefinitionfunction)

***

## `RenderManifestEntry`

Re-exports [RenderManifestEntry](#rendermanifestentry)

***

## `RenderManifestOptions`

Re-exports [RenderManifestOptions](#rendermanifestoptions)

***

## `ResolveData`

Re-exports [ResolveData](#resolvedata)

***

## `ResolveOptions`

Re-exports [ResolveOptions](#resolveoptions-5)

***

## `ResolvePluginInstance`

Re-exports [ResolvePluginInstance](#resolveplugininstance)

***

## `Resolver`

Re-exports [Resolver](#abstract-resolver)

***

## `RuleSetCondition`

Re-exports [RuleSetCondition](#rulesetcondition)

***

## `RuleSetConditionAbsolute`

Re-exports [RuleSetConditionAbsolute](#rulesetconditionabsolute)

***

## `RuleSetRule`

Re-exports [RuleSetRule](#rulesetrule)

***

## `RuleSetUse`

Re-exports [RuleSetUse](#rulesetuse)

***

## `RuleSetUseFunction`

Re-exports [RuleSetUseFunction](#rulesetusefunction)

***

## `RuleSetUseItem`

Re-exports [RuleSetUseItem](#rulesetuseitem)

***

## `RuntimeModule`

Re-exports [RuntimeModule](#runtimemodule)

***

## `SingleEntryPlugin`

Renames and re-exports [EntryPlugin](#entryplugin)

***

## `SingleEntryPlugin`

Renames and re-exports [EntryPlugin](#entryplugin)

***

## `SourceMapDevToolPlugin`

Re-exports [SourceMapDevToolPlugin](#sourcemapdevtoolplugin)

***

## `Stats`

Re-exports [Stats](#stats-1)

***

## `StatsAsset`

Re-exports [StatsAsset](#statsasset)

***

## `StatsChunk`

Re-exports [StatsChunk](#statschunk)

***

## `StatsChunkGroup`

Re-exports [StatsChunkGroup](#statschunkgroup)

***

## `StatsChunkOrigin`

Re-exports [StatsChunkOrigin](#statschunkorigin)

***

## `StatsCompilation`

Re-exports [StatsCompilation](#statscompilation-1)

***

## `StatsError`

Re-exports [StatsError](#statserror)

***

## `StatsLogging`

Re-exports [StatsLogging](#statslogging)

***

## `StatsLoggingEntry`

Re-exports [StatsLoggingEntry](#statsloggingentry)

***

## `StatsModule`

Re-exports [StatsModule](#statsmodule)

***

## `StatsModuleIssuer`

Re-exports [StatsModuleIssuer](#statsmoduleissuer)

***

## `StatsModuleReason`

Re-exports [StatsModuleReason](#statsmodulereason)

***

## `StatsModuleTraceDependency`

Re-exports [StatsModuleTraceDependency](#statsmoduletracedependency)

***

## `StatsModuleTraceItem`

Re-exports [StatsModuleTraceItem](#statsmoduletraceitem)

***

## `StatsOptions`

Re-exports [StatsOptions](#statsoptions)

***

## `StatsProfile`

Re-exports [StatsProfile](#statsprofile)

***

## `Template`

Re-exports [Template](#template)

***

## `TemplatePath`

Re-exports [TemplatePath](#templatepath)

***

## `ValidationError`

Renames and re-exports [WebpackOptionsValidationError](#webpackoptionsvalidationerror)

***

## `ValidationError`

Renames and re-exports [WebpackOptionsValidationError](#webpackoptionsvalidationerror)

***

## `WatchIgnorePlugin`

Re-exports [WatchIgnorePlugin](#watchignoreplugin)

***

## `Watching`

Re-exports [Watching](#abstract-watching)

***

## `WebpackError`

Re-exports [WebpackError](#webpackerror)

***

## `WebpackOptionsApply`

Re-exports [WebpackOptionsApply](#webpackoptionsapply)

***

## `WebpackOptionsDefaulter`

Re-exports [WebpackOptionsDefaulter](#webpackoptionsdefaulter)

***

## `WebpackOptionsNormalized`

Re-exports [WebpackOptionsNormalized](#webpackoptionsnormalized)

***

## `WebpackOptionsValidationError`

Re-exports [WebpackOptionsValidationError](#webpackoptionsvalidationerror)

***

## `WebpackPluginFunction`

Re-exports [WebpackPluginFunction](#webpackpluginfunction)

***

## `WebpackPluginInstance`

Re-exports [WebpackPluginInstance](#webpackplugininstance)
