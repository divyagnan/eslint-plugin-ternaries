/**
 * @fileoverview Disallows ternaries with null as either the consequent or alternate condition.
 * @author divyagnan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "Disallows ternaries with null as either the consequent or alternate condition.",
      category: "Best Practices",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      ConditionalExpression(node) {
        if (node.alternate.raw === "null" || node.consequent.raw === "null") {
          context.report(
            node,
            "Consider using an if statement or short-circuit evaluation instead"
          );
        }
      }
    };
  }
};
