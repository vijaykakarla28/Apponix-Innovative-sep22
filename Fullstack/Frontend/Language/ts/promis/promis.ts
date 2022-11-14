var danushPromise = new Promise((resolve, notresolve) => {
    // resolve('hello iam resolve')
    notresolve('not resolved')
})
danushPromise.then((a) => { console.log(a) })
danushPromise.catch((a) => { console.log(a) })