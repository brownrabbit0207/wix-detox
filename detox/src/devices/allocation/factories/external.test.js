describe('External allocator factory', () => {
  describe('validation', () => {
    const path = '../fake/module/path';

    let factoryClass;
        const module = {
          DeviceAllocationDriverClass: undefined,
        };
        expect(() => factoryClass.validateModule(module, path)).toThrowErrorMatchingSnapshot();
      });
    });

    describe('given allocation driver class', () => {
      it('should not throw an error', () => {
        const module = {
          DeviceAllocationDriverClass: class {},
        };
        factoryClass.validateModule(module, path);
      });
    });
  });
});
