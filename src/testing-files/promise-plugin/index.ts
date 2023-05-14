let myPromise = new Promise.resolve("ok")
const doSomething = () => console.log("ok")
const catchErrors = () => console.log("ok")
myPromise.then(doSomething)
myPromise.then(doSomething, catchErrors) // catch() may be a little better
function doSomethingElse() {
  return myPromise.then(doSomething)
}

myPromise.then(function (val: number) {
  return Promise.resolve(val * 2)
})
myPromise.then(function (val: number) {
  return Promise.reject('bad thing')
})


myPromise.finally(function (val) {
  return val
})


new Promise(function (reject, resolve) { console.log("ok") }) // incorrect order
new Promise(function (ok, fail) { console.log("ok")}) // non-standard parameter names
new Promise(function (_, reject) { console.log("ok")}) // a simple underscore is not allowed
