# Disallows ternaries with null as either the consequent or alternate condition. (no-null-ternary)

This rule aims to cut down on ternary usage when it is not necessary. Instead use an `if` statement or use short-circuit (`&&`) evaluation

## Rule Details

This rule raises when either the consequent or alternate condition in a ternary is null.

Examples of **incorrect** code for this rule:

```js
// The consequent condition is null
someCondition ? null : value
```

```js
// The alternate condition is null
someCondition ? value : null
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

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading
*MDN Links*

* [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
* [Ternaries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [If/Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
