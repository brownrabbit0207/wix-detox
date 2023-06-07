describe('External runtime-device factory', () => {
  describe('validation', () => {
    const path = '../fake/path';

    let factoryClass;
    beforeEach(() => {
      factoryClass = require('./external').External;
    });

    describe('given module with no runtime-driver class', () => {
      it('should throw an error', () => {
        const module = {
          RuntimeDriverClass: undefined,
        };
        expect(() => factoryClass.validateModule(module, path)).toThrowErrorMatchingSnapshot();
