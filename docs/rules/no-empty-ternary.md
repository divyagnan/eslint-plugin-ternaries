# Disallows ternaries that have &#39;&#39; or &#34;&#34; as either condition (no-empty-ternary)

This rule aims to cut down on ternary usage when it is not necessary. Instead use an `if` statement or use short-circuit (`&&`) evaluation

## Rule Details

This rule raises when either the consequent or alternate condition in a ternary is empty (ex '' or "").

Examples of **incorrect** code for this rule:

```js
// The consequent condition is empty
someCondition ? '' : value
```

```js
// The alternate condition is empty
someCondition ? value : ''
```

Examples of **correct** code for this rule:

```js
// Both the consequent and alternate conditions have non-null values
someContion ? value : otherValue
```

```js
// Can replace ternaries that are intended to do something only when a condition is truthy with short circuiting
someContion && value
```

```js
// Can also replace it with an if statement
if (someCondition) {
  value
}
```

### Options

There are currently no available options.

## Further Reading
*MDN Links*

* [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
* [Ternaries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [If/Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
