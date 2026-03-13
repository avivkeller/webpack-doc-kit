# util

## Namespaces

- [comparators](namespaces/comparators.md)
- [compileBooleanMatcher](namespaces/compileBooleanMatcher.md)
- [runtime](namespaces/runtime.md)
- [serialization](namespaces/serialization.md)

## Class: `LazySet`

### Type Parameters

#### T

`T`

### Constructors

#### Constructor

###### T

`T`
* `iterable` {Iterable}
* Returns: {LazySet}

### Properties

* `size` {number}

### Methods

#### `[iterator]()`

* Returns: {SetIterator}

#### `add(item)`

* `item` {T}
* Returns: {LazySet}

#### `addAll(iterable)`

* `iterable` {LazySet|Iterable}
* Returns: {LazySet}

#### `clear()`

* Returns: {void}

#### `delete(value)`

* `value` {T}
* Returns: {boolean}

#### `entries()`

* Returns: {SetIterator}

#### `forEach(callbackFn, thisArg)`

###### K

`K`
* `callbackFn` {object}
* `thisArg` {K}
* Returns: {void}

#### `has(item)`

* `item` {T}
* Returns: {boolean}

#### `keys()`

* Returns: {SetIterator}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `values()`

* Returns: {SetIterator}

#### Static method: `deserialize(__namedParameters)`

###### T

`T`
* `__namedParameters` {ObjectDeserializerContext}
* Returns: {LazySet}

***

## `cleverMerge`

> `const` **cleverMerge**: {object}

#### T

`T`

#### O

`O`
* `first` {null|T}
* `second` {null|O}
* Returns: {T|O|T|O}

***

## `createHash`

> `const` **createHash**: {object}

* `algorithm` {HashFunction}
* Returns: {Hash}

***

## `compileBooleanMatcher(map)`

* `map` {Record}
* Returns: {boolean|object}
