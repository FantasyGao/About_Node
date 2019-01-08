let loaderUtils = require('loader-utils');

module.exports = function(source) {
  console.log('loader enter to-down-case')
  console.log('loader ->', source)
  console.log(loaderUtils.getOptions(this))
  return source.toLowerCase()
};