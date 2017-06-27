# eslint-plugin-ternaries

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
        "ternaries/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





