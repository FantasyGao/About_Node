define('a', function(require, exports, module) {
  console.log('enter a')
  exports.getTime = function() {   
    return new Date();   
  }  
});