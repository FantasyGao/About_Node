let loaderUtils = require('loader-utils');

module.exports = function(source) {
  console.log('loader enter add-author')
  console.log('loader ->', source)
  const author = loaderUtils.getOptions(this).author
  return source+author
};