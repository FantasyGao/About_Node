define('b', ['require', 'exports', 'a'], function(require, exports, a) {
  console.log('enter b') 
  exports.test = function() {
    return {   
      now: a.getTime()    
    };   
  }  
});