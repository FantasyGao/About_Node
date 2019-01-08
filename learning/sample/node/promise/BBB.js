function MPromise(fn) {
  var state = 'pending',
    value = null,
    callbacks = [];
  this.then = function (onFulfilled) {
    return new MPromise(function (resolve) {
      if (state === 'pending') {
        callbacks.push({
          onFulfilled,
          resolve
        });
        return;
      }
      // console.log('state', state)
      var ret = onFulfilled(value);
      resolve(ret);
    });
  };

  function resolve(newValue) {
    console.log('newValue', newValue)
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      // console.log('then', newValue, then)
      if (typeof then === 'function') {
        then.call(newValue, resolve);
        return;
      }
    }
    state = 'fulfilled';
    value = newValue;
    setTimeout(function () {
      callbacks.forEach(function (callback) {
        handle(callback);
      });
    }, 0);
  }

  function handle(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return;
    }
    //如果then中没有传递任何东西
    if (!callback.onFulfilled) {
      callback.resolve(value);
      return;
    }
    var ret = callback.onFulfilled(value);
    callback.resolve(ret);
  }
  fn(resolve);
}

var a = new MPromise(r => r(5))
var b = a.then(r => {
  console.log('then', r)
  return new MPromise(x => x(8))
})
var c = b.then(r => {
  console.log('then2', r)
})

// a: {ing, then}
// b: {ing, then}
// c: {ing, then}