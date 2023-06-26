describe('External runtime-device factory', () => {
  describe('validation', () => {
    const path = '../fake/path';

    let factoryClass;
        const module = {
          RuntimeDriverClass: undefined,
        };
        expect(() => factoryClass.validateModule(module, path)).toThrowErrorMatchingSnapshot();
      });
    });

    describe('given a valid module', () => {
      it('should not throw', () => {
        const module = {
          RuntimeDriverClass: class {},
        };
        factoryClass.validateModule(module, path);
      });
    });
  });
});
