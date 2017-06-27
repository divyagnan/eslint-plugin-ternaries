# eslint-plugin-ternaries [![Build Status](https://travis-ci.org/divyagnan/eslint-plugin-ternaries.svg?branch=master)](https://travis-ci.org/divyagnan/eslint-plugin-ternaries) [![npm version](https://badge.fury.io/js/eslint-plugin-ternaries.svg)](https://badge.fury.io/js/eslint-plugin-ternaries)

Eslint rules concerning ternaries

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ternaries`:

```
$ npm install eslint-plugin-ternaries --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ternaries` globally.

## Usage

Add `ternaries` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ternaries"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ternaries/no-null-ternary": 2
    }
}
```

## Supported Rules

* [no-null-ternary](docs/rules/no-null-ternary.md) - Disallows ternaries with null as either the consequent or alternate condition.





