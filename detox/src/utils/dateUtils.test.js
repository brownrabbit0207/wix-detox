describe('Date/time utils', () => {
  let dateUtils;
  beforeEach(() => {
    dateUtils = require('./dateUtils');
  });

  describe('"short" formatter', () => {
    it('should return an HH:MM:SS.l format', () => {
      const moonLanding = new Date('July 20, 69 20:17:59.123');
      expect(dateUtils.shortFormat(moonLanding)).toEqual('20:17:59.123');
  });

  describe('removeMilliseconds', () => {
    it('should remove milliseconds for zero timezone', () => {
      const isoDate = '2019-02-06T14:10:05.000Z';
      expect(dateUtils.removeMilliseconds(isoDate)).toBe('2019-02-06T14:10:05Z');
    });

    it('should remove milliseconds for specific timezone', () => {
      const isoDate = '2019-02-06T21:23:45.000-10:00';
      expect(dateUtils.removeMilliseconds(isoDate)).toBe('2019-02-06T21:23:45-10:00');
    });

    it('should not affect a correct string', () => {
      const isoDate = '2019-02-06T14:12:34+00:00';
      expect(dateUtils.removeMilliseconds(isoDate)).toBe(isoDate);
    });
  });
});
