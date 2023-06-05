const path = require('path');

const pathUtils = require('./pathUtils');

describe('pathUtils', () => {

    test('when given a path outside the current working directory, should return it as-is', () => {
      const relativePath = path.join('example', 'test.js');
      const absolutePath = path.join(process.cwd(), relativePath);
      const otherCwd = path.join(process.cwd(), 'example2');

      expect(pathUtils.toSimplePath(absolutePath, otherCwd)).toBe(absolutePath);
    });
  });
});
