//constructor
let Promise = function() {
    this.callbacks = [];
};
Promise.prototype = {
    construct: Promise,
    resolve: function(result) {
      for (let i = 0; i < this.callbacks.length; i++) {
        this.callbacks.shift()["resolve"](result);
      }
    },
    reject: function(result) {
      for (let i = 0; i < this.callbacks.length; i++) {
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
};

// test
let promise = new Promise();
let delay1 = function() {
    setTimeout(function() {
        promise.resolve('数据1');
    }, 1000);
    return promise;
};

delay1().then(function(re) {
    re = re + '数据2';
    console.log(re);
});
