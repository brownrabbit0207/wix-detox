function call(target, method, ...args) {
  return function() {
    if (typeof target === 'function') {
      target = {
        type: 'Invocation',
          type: 'Invocation',
          value: args[i]()
        };
      }
    }
    return {
      target: target,
      method: method,
      args: args
    };
  };
}

function callDirectly(json) {
  return {
    type: 'Invocation',
    value: json
  };
}

const genericInvokeObject = new Proxy({},
  {
    get: (target, prop) => {
      return (p) => {
        return {
          type: prop,
          value: p
        };
      };
    }
  });

module.exports = {
  call,
  callDirectly,
  genericInvokeObject
};
