/**
 * @fileoverview Disallows ternaries that have '' or "" as either condition
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
        "Disallows ternaries that have '' or \"\" as either condition",
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
        if (node.alternate.value === "" || node.consequent.value === "") {
          context.report(
            node,
            "Consider using an if statement or short-circuit evaluation instead"
          );
        }
      }
    };
  }
};
