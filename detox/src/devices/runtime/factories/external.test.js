describe('External runtime-device factory', () => {
  describe('validation', () => {
    const path = '../fake/path';

    let factoryClass;
    beforeEach(() => {
      factoryClass = require('./external').External;
    });

    describe('given module with no runtime-driver class', () => {
          RuntimeDriverClass: class {},
        };
        factoryClass.validateModule(module, path);
      });
    });
  });
});
