const { parse, quote } = require('./shellQuote');

describe('shellQuote', () => {
  describe('.quote(argv)', () => {
    it('should not escape safe characters', () => {
      expect(quote(['-w', '3'])).toBe('-w 3');
    });

    it('should escape unsafe characters', () => {
      const pattern = /^http:\/\/192.168.1.253:19001\/onchange$/;
      const expectedEscaping = process.platform === 'win32'
        ? `"(\\"${pattern.source}\\")"`
        : `'("${pattern.source}")'`;

      expect(quote(['--detoxURLBlacklistRegex', `("${pattern.source}")`])).toBe(`--detoxURLBlacklistRegex ${expectedEscaping}`);
    });
  });

  describe('.parse(str)', () => {
    it('should parse command line calls', () => {
