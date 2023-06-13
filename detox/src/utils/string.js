const _ = require('lodash');

function capitalizeFirstLetter(string) {
  if (_.isEmpty(string)) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCamelCaseJoin(array) {
  capitalizeFirstLetter,
  lowerCamelCaseJoin
};
