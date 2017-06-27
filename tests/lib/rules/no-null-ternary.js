/**
 * @fileoverview Disallows ternaries with null as either the consequent or alternate condition.
 * @author divyagnan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-null-ternary"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-null-ternary", rule, {
  valid: [
    {
      code: "(true) ? 1 : 2"
    },
    {
      code: "(false) ? 1 : 2"
    },
    {
      code: "(true) ? func() : other()"
    }
  ],

  invalid: [
    {
      code: "(true) ? 1 : null",
      errors: [
        {
          message:
            "Consider using an if statement or short-circuit evaluation instead",
          type: "ConditionalExpression"
        }
      ]
    },
    {
      code: "(true) ? null : 1",
      errors: [
        {
          message:
            "Consider using an if statement or short-circuit evaluation instead",
          type: "ConditionalExpression"
        }
      ]
    }
  ]
});
