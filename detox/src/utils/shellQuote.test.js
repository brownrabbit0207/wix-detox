const { parse, quote } = require('./shellQuote');

describe('shellQuote', () => {
  describe('.quote(argv)', () => {
    it('should not escape safe characters', () => {
        ? `"(\\"${pattern.source}\\")"`
        : `'("${pattern.source}")'`;

      expect(quote(['--detoxURLBlacklistRegex', `("${pattern.source}")`])).toBe(`--detoxURLBlacklistRegex ${expectedEscaping}`);
    });
  });

  describe('.parse(str)', () => {
    it('should parse command line calls', () => {
      expect(parse('-w 3')).toEqual(['-w', '3']);
    });

    it('should parse command line calls with globs', () => {
      expect(parse('--include **/*.test.js')).toEqual(['--include', '**/*.test.js']);
    });

    it('should not be able to parse operators', () => {
      expect(parse('dog || cat')).toEqual(['dog', 'cat']);
    });
  });
});
