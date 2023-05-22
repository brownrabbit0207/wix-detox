/**

	This code is generated.
	For more information see generation/README.md.
*/
      return {
        target: element,
        method: "element",
        args: [{
          type: "Invocation",
          value: webMatcher
        }]
      };
    }

    function element3(element, webMatcher, index) {
      if (typeof index !== "number") throw new Error("index should be a number, but got " + (index + (" (" + (typeof index + ")"))));
      return {
        target: element,
        method: "element",
        args: [{
          type: "Invocation",
          value: webMatcher
        }, {
          type: "Integer",
          value: index
        }]
      };
    }

    if (arguments.length === 2) {
      return element2.apply(null, arguments);
    }

    if (arguments.length === 3) {
      return element3.apply(null, arguments);
    }
  }

}

module.exports = WebViewElement;