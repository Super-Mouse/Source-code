//constructor
var Promise = function() {
    this.callbacks = [];
}

Promise.prototype = {
    construct: Promise,
    resolve: function(result) {
      for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks.shift()["resolve"](result);
      }
    },
    reject: function(result) {
      for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks.shift()["reject"](result);
      }
    },
    then: function(successCallback, failedCallback) {
        this.callbacks.push({
            resolve: successCallback,
            reject: failedCallback
        });
        return this;
    }
}

// test
var promise = new Promise();
var delay1 = function() {
    setTimeout(function() {
        promise.resolve('数据1');
    }, 1000);
    return promise;
};
var callback1 = function(re) {
    re = re + '数据2';
    console.log(re);
};
delay1().then(callback1)
