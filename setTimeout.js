function any() {
    console.log('hello')
}
console.log('First: hello')
console.log('second: hello')
console.log('third: hello')
setTimeout(any, 2000)
setTimeout(function () {
    console.log('hello js')
}, 1000)
setTimeout(() => {
    console.log('Hello arrow funtion')
}, 3000)
console.log('fourth: hello')