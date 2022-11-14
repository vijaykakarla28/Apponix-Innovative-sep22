var danushPromise = new Promise(function (resolve, notresolve) {
    // resolve('hello iam resolve')
    notresolve('not resolved');
});
danushPromise.then(function (a) { console.log(a); });
danushPromise["catch"](function (a) { console.log(a); });
