# javascript

## Class: `EnableChunkLoadingPlugin`

### Constructors

#### Constructor

* `type` {string}
* Returns: {EnableChunkLoadingPlugin}

### Properties

* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

***

## Class: `JavascriptParser`

### Extends

- {ParserClass}

### Constructors

#### Constructor

* `sourceType` {"module"|"auto"|"script"}
* `options` {object}
* Returns: {JavascriptParser}

### Properties

* `comments` {CommentJavascriptParser[]}
* `currentTagData` {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `destructuringAssignmentProperties` {WeakMap}
* `hooks` {Readonly}
* `magicCommentContext` {Context}
* `options` {object}
* `prevStatement` {Identifier|ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* `scope` {ScopeInfo}
* `semicolons` {Set}
* `sourceType` {"module"|"auto"|"script"}
* `state` {JavascriptParserState}
* `statementPath` {StatementPathItem[]}
* `ALLOWED_MEMBER_TYPES_ALL` {3}
* `ALLOWED_MEMBER_TYPES_CALL_EXPRESSION` {1}
* `ALLOWED_MEMBER_TYPES_EXPRESSION` {2}
* `getImportAttributes` {object}
* `VariableInfo` {VariableInfo}
* `VariableInfoFlags` {Readonly}

### Methods

#### `blockPreWalkClassDeclaration(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}
* Returns: {void}

#### `blockPreWalkExportDefaultDeclaration(statement)`

* `statement` {ExportDefaultDeclaration}
* Returns: {void}

#### `blockPreWalkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

#### `blockPreWalkExpressionStatement(statement)`

* `statement` {ExpressionStatement}
* Returns: {void}

#### `blockPreWalkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

#### `blockPreWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Block pre walking iterates the scope for block variable declarations

#### `blockPreWalkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

#### `callHooksForExpression(hookMap, expr, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `args` {AsArray}
* Returns: {R}

#### `callHooksForExpressionWithFallback(hookMap, expr, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

#### `callHooksForInfo(hookMap, info, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `info` {ExportedVariableInfo}
* `args` {AsArray}
* Returns: {R}

#### `callHooksForInfoWithFallback(hookMap, info, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `info` {ExportedVariableInfo}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

#### `callHooksForName(hookMap, name, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `name` {string}
* `args` {AsArray}
* Returns: {R}

#### `callHooksForNameWithFallback(hookMap, name, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `name` {string}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

#### `defineVariable(name)`

* `name` {string}
* Returns: {void}

#### `destructuringAssignmentPropertiesFor(node)`

* `node` {Expression}
* Returns: {Set}

#### `detectMode(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration|Directive[]}
* Returns: {void}

#### `enterArrayPattern(pattern, onIdent)`

* `pattern` {ArrayPattern}
* `onIdent` {object}
* Returns: {void}

#### `enterAssignmentPattern(pattern, onIdent)`

* `pattern` {AssignmentPattern}
* `onIdent` {object}
* Returns: {void}

#### `enterDeclaration(declaration, onIdent)`

* `declaration` {Declaration}
* `onIdent` {object}
* Returns: {void}

#### `enterDestructuringAssignment(pattern, expression)`

* `pattern` {Pattern}
* `expression` {Expression}
* Returns: {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression}

#### `enterIdentifier(pattern, onIdent)`

* `pattern` {Identifier}
* `onIdent` {object}
* Returns: {void}

#### `enterObjectPattern(pattern, onIdent)`

* `pattern` {ObjectPattern}
* `onIdent` {object}
* Returns: {void}

#### `enterPattern(pattern, onIdent)`

* `pattern` {Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern}
* `onIdent` {object}
* Returns: {void}

#### `enterPatterns(patterns, onIdent)`

* `patterns` {string|Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `onIdent` {object}
* Returns: {void}

#### `enterRestElement(pattern, onIdent)`

* `pattern` {RestElement}
* `onIdent` {object}
* Returns: {void}

#### `evaluate(source)`

* `source` {string}
* Returns: {BasicEvaluatedExpression}

#### `evaluatedVariable(tagInfo)`

* `tagInfo` {TagInfo}
* Returns: {VariableInfo}

#### `evaluateExpression(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}
* Returns: {BasicEvaluatedExpression}

#### `extractMemberExpressionChain(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* Returns: {object}

#### `getComments(range)`

* `range` {number|number}
* Returns: {CommentJavascriptParser[]}

#### `getFreeInfoFromVariable(varName)`

* `varName` {string}
* Returns: {object}

#### `getMemberExpressionInfo(expression, allowedTypes)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `allowedTypes` {number}
* Returns: {CallExpressionInfo|ExpressionExpressionInfo}

#### `getNameForExpression(expression)`

* `expression` {Expression}
* Returns: {object}

#### `getNameInfoFromVariable(varName)`

* `varName` {string}
* Returns: {object}

#### `getRenameIdentifier(expr)`

* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement}
* Returns: {string|VariableInfo}

#### `getTagData(name, tag)`

* `name` {string}
* `tag` {symbol}
* Returns: {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}

#### `getVariableInfo(name)`

* `name` {string}
* Returns: {ExportedVariableInfo}

#### `inBlockScope(fn[, inExecutedPath])`

* `fn` {object}
* `inExecutedPath` {boolean}
* Returns: {void}

#### `inClassScope(hasThis, params, fn)`

* `hasThis` {boolean}
* `params` {Identifier[]}
* `fn` {object}
* Returns: {void}

#### `inFunctionScope(hasThis, params, fn)`

* `hasThis` {boolean}
* `params` {string|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}
* Returns: {void}

#### `inScope(params, fn)`

> Stability: 0 - Deprecated

* `params` {string|Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}
* Returns: {void}

#### `isAsiPosition(pos)`

* `pos` {number}
* Returns: {boolean}

#### `isPure(expr, commentsStartPos)`

* `expr` {Identifier|ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|PrivateIdentifier|VariableDeclaration}
* `commentsStartPos` {number}
* Returns: {boolean}

#### `isStatementLevelExpression(expr)`

* `expr` {Expression}
* Returns: {boolean}

#### `isVariableDefined(name)`

* `name` {string}
* Returns: {boolean}

#### `modulePreWalkExportAllDeclaration(statement)`

* `statement` {ExportAllDeclaration}
* Returns: {void}

#### `modulePreWalkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

#### `modulePreWalkImportDeclaration(statement)`

* `statement` {ImportDeclaration}
* Returns: {void}

#### `modulePreWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Module pre walking iterates the scope for import entries

#### `parse(source, state)`

* `source` {string|Buffer|PreparsedAst}
* `state` {ParserState}
* Returns: {ParserState}

#### `parseCalculatedString(expression)`

* `expression` {Expression}
* Returns: {CalculatedStringResult}

#### `parseCommentOptions(range)`

* `range` {number|number}
* Returns: {object}

#### `parseString(expression)`

* `expression` {Expression}
* Returns: {string}

#### `preWalkAssignmentExpression(expression)`

* `expression` {AssignmentExpression}
* Returns: {void}

#### `preWalkBlockStatement(statement)`

* `statement` {BlockStatement}
* Returns: {void}

#### `preWalkCatchClause(catchClause)`

* `catchClause` {CatchClause}
* Returns: {void}

#### `preWalkDoWhileStatement(statement)`

* `statement` {DoWhileStatement}
* Returns: {void}

#### `preWalkForInStatement(statement)`

* `statement` {ForInStatement}
* Returns: {void}

#### `preWalkForOfStatement(statement)`

* `statement` {ForOfStatement}
* Returns: {void}

#### `preWalkForStatement(statement)`

* `statement` {ForStatement}
* Returns: {void}

#### `preWalkFunctionDeclaration(statement)`

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}
* Returns: {void}

#### `preWalkIfStatement(statement)`

* `statement` {IfStatement}
* Returns: {void}

#### `preWalkLabeledStatement(statement)`

* `statement` {LabeledStatement}
* Returns: {void}

#### `preWalkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

Walking iterates the statements and expressions and processes them

#### `preWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Pre walking iterates the scope for variable declarations

#### `preWalkSwitchCases(switchCases)`

* `switchCases` {SwitchCase[]}
* Returns: {void}

#### `preWalkSwitchStatement(statement)`

* `statement` {SwitchStatement}
* Returns: {void}

#### `preWalkTryStatement(statement)`

* `statement` {TryStatement}
* Returns: {void}

#### `preWalkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

#### `preWalkVariableDeclarator(declarator)`

* `declarator` {VariableDeclarator}
* Returns: {void}

#### `preWalkWhileStatement(statement)`

* `statement` {WhileStatement}
* Returns: {void}

#### `preWalkWithStatement(statement)`

* `statement` {WithStatement}
* Returns: {void}

#### `setAsiPosition(pos)`

* `pos` {number}
* Returns: {void}

#### `setVariable(name, variableInfo)`

* `name` {string}
* `variableInfo` {ExportedVariableInfo}
* Returns: {void}

#### `tagVariable(name, tag[, data][, flags])`

* `name` {string}
* `tag` {symbol}
* `data` {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `flags` {0|1|2|4}
* Returns: {void}

#### `undefineVariable(name)`

* `name` {string}
* Returns: {void}

#### `unsetAsiPosition(pos)`

* `pos` {number}
* Returns: {void}

#### `walkArrayExpression(expression)`

* `expression` {ArrayExpression}
* Returns: {void}

#### `walkArrayPattern(pattern)`

* `pattern` {ArrayPattern}
* Returns: {void}

#### `walkArrowFunctionExpression(expression)`

* `expression` {ArrowFunctionExpression}
* Returns: {void}

#### `walkAssignmentExpression(expression)`

* `expression` {AssignmentExpression}
* Returns: {void}

#### `walkAssignmentPattern(pattern)`

* `pattern` {AssignmentPattern}
* Returns: {void}

#### `walkAwaitExpression(expression)`

* `expression` {AwaitExpression}
* Returns: {void}

#### `walkBinaryExpression(expression)`

* `expression` {BinaryExpression}
* Returns: {void}

#### `walkBlockStatement(statement)`

* `statement` {BlockStatement|StaticBlock}
* Returns: {void}

#### `walkCallExpression(expression)`

* `expression` {CallExpression}
* Returns: {void}

#### `walkCatchClause(catchClause)`

* `catchClause` {CatchClause}
* Returns: {void}

#### `walkChainExpression(expression)`

* `expression` {ChainExpression}
* Returns: {void}

#### `walkClass(classy)`

* `classy` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression}
* Returns: {void}

#### `walkClassDeclaration(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}
* Returns: {void}

#### `walkClassExpression(expression)`

* `expression` {ClassExpression}
* Returns: {void}

#### `walkConditionalExpression(expression)`

* `expression` {ConditionalExpression}
* Returns: {void}

#### `walkDoWhileStatement(statement)`

* `statement` {DoWhileStatement}
* Returns: {void}

#### `walkExportDefaultDeclaration(statement)`

* `statement` {ExportDefaultDeclaration}
* Returns: {void}

#### `walkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

#### `walkExpression(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}
* Returns: {void}

#### `walkExpressions(expressions)`

* `expressions` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement[]}
* Returns: {void}

#### `walkExpressionStatement(statement)`

* `statement` {ExpressionStatement}
* Returns: {void}

#### `walkForInStatement(statement)`

* `statement` {ForInStatement}
* Returns: {void}

#### `walkForOfStatement(statement)`

* `statement` {ForOfStatement}
* Returns: {void}

#### `walkForStatement(statement)`

* `statement` {ForStatement}
* Returns: {void}

#### `walkFunctionDeclaration(statement)`

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}
* Returns: {void}

#### `walkFunctionExpression(expression)`

* `expression` {FunctionExpression}
* Returns: {void}

#### `walkIdentifier(expression)`

* `expression` {Identifier}
* Returns: {void}

#### `walkIfStatement(statement)`

* `statement` {IfStatement}
* Returns: {void}

#### `walkImportExpression(expression)`

* `expression` {ImportExpressionJavascriptParser}
* Returns: {void}

#### `walkLabeledStatement(statement)`

* `statement` {LabeledStatement}
* Returns: {void}

#### `walkLeftRightExpression(expression)`

* `expression` {BinaryExpression|LogicalExpression}
* Returns: {void}

#### `walkLogicalExpression(expression)`

* `expression` {LogicalExpression}
* Returns: {void}

#### `walkMemberExpression(expression)`

* `expression` {MemberExpression}
* Returns: {void}

#### `walkMemberExpressionWithExpressionName(expression, name, rootInfo, members, onUnhandled)`

###### R

`R`
* `expression` {MemberExpression}
* `name` {string}
* `rootInfo` {string|VariableInfo}
* `members` {string[]}
* `onUnhandled` {object}
* Returns: {void}

#### `walkMetaProperty(metaProperty)`

* `metaProperty` {MetaProperty}
* Returns: {void}

#### `walkNestedStatement(statement)`

* `statement` {Statement}
* Returns: {void}

Walks a statements that is nested within a parent statement
and can potentially be a non-block statement.
This enforces the nested statement to never be in ASI position.

#### `walkNewExpression(expression)`

* `expression` {NewExpression}
* Returns: {void}

#### `walkObjectExpression(expression)`

* `expression` {ObjectExpression}
* Returns: {void}

#### `walkObjectPattern(pattern)`

* `pattern` {ObjectPattern}
* Returns: {void}

#### `walkPattern(pattern)`

* `pattern` {Pattern}
* Returns: {void}

#### `walkProperty(prop)`

* `prop` {Property|SpreadElement}
* Returns: {void}

#### `walkRestElement(pattern)`

* `pattern` {RestElement}
* Returns: {void}

#### `walkReturnStatement(statement)`

* `statement` {ReturnStatement}
* Returns: {void}

#### `walkSequenceExpression(expression)`

* `expression` {SequenceExpression}
* Returns: {void}

#### `walkSpreadElement(expression)`

* `expression` {SpreadElement}
* Returns: {void}

#### `walkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

#### `walkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Walking iterates the statements and expressions and processes them

#### `walkSwitchCases(switchCases)`

* `switchCases` {SwitchCase[]}
* Returns: {void}

#### `walkSwitchStatement(statement)`

* `statement` {SwitchStatement}
* Returns: {void}

#### `walkTaggedTemplateExpression(expression)`

* `expression` {TaggedTemplateExpression}
* Returns: {void}

#### `walkTemplateLiteral(expression)`

* `expression` {TemplateLiteral}
* Returns: {void}

#### `walkTerminatingStatement(statement)`

* `statement` {ReturnStatement|ThrowStatement}
* Returns: {void}

#### `walkThisExpression(expression)`

* `expression` {ThisExpression}
* Returns: {void}

#### `walkThrowStatement(statement)`

* `statement` {ThrowStatement}
* Returns: {void}

#### `walkTryStatement(statement)`

* `statement` {TryStatement}
* Returns: {void}

#### `walkUnaryExpression(expression)`

* `expression` {UnaryExpression}
* Returns: {void}

#### `walkUpdateExpression(expression)`

* `expression` {UpdateExpression}
* Returns: {void}

#### `walkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

#### `walkWhileStatement(statement)`

* `statement` {WhileStatement}
* Returns: {void}

#### `walkWithStatement(statement)`

* `statement` {WithStatement}
* Returns: {void}

#### `walkYieldExpression(expression)`

* `expression` {YieldExpression}
* Returns: {void}

#### Static method: `extend(plugins)`

* `plugins` {object[]}
* Returns: {JavascriptParser}

***

## `JavascriptModulesPlugin`

Re-exports [JavascriptModulesPlugin](../../globals.md#javascriptmodulesplugin)
