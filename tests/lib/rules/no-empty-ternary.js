/**
 * @fileoverview Disallows ternaries that have &#39;&#39; or &#34;&#34; as either condition
 * @author divyagnan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-empty-ternary"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-empty-ternary", rule, {
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
      code: "condition ? 1 : ''",
      errors: [
        {
          message:
            "Consider using an if statement or short-circuit evaluation instead",
          type: "ConditionalExpression"
        }
      ]
    },
    {
      code: "condition ? '' : 1",
      errors: [
        {
          message:
            "Consider using an if statement or short-circuit evaluation instead",
          type: "ConditionalExpression"
        }
      ]
    },
    {
      code: 'condition ? "" : 1',
      errors: [
        {
          message:
            "Consider using an if statement or short-circuit evaluation instead",
          type: "ConditionalExpression"
        }
      ]
    },
    {
      code: 'condition ? 1 : ""',
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
