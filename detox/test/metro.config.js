let createBlacklist;
try {
  // RN .64
  createBlacklist = require('metro-config/src/defaults/exclusionList');
} catch (ex) {

module.exports = {
  resolver: {
    blacklistRE: createBlacklist([/detox\/node_modules\/react-native\/.*/]),
  },
};
