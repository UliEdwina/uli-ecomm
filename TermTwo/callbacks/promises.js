// primises an obect that may produce a single value some time in the future. either resolved or reason that is not resolved,: fullfuilled, rejected, pending,

// Fillfilled: onFullfilled()
// Rejected: onRejected()
// Pending: not yet fuillfilled or rejected

// const wait = time => new Promise((resolve) => setTimeout(resolve, time))


// wait(3000).then(()=> console.log("hello promise"))

// our wait function takes two parameters
// in es6 promise constructor takes function.That function takes two parameters 'resolve()'
// and 'reject'

/**
 * Important Promise Rules.
 * 1. A promise is an object thats supplies a standart ".then()" methdod 
 * 2. A pending promise may transition into fullfilled or rejected state
 * 3. a Fullfilled or rejected Promise is settled, and must not transition into any other states
 * 4.Once Promise is settled it muust haved a value, which can be undefined and that value must not be chaneged
 * */

//  Promise.then(
//      onFullfilled?: Function,
//      onRejected?: Function)
//      => Promise 

// the then() method must comply with rules:
// 1. both onFullfilled and onRejected are optional
// 2. if arguements supplied are not functions, they must be ignored
// 3. onfullfilled will be called after the promise is fullfilled with the promised value as first arguement
// \4. unRejected() will be called after promise is rejected with reason of rejection as first arguement.
// 5. Neither onfull or onRej may be called more than once
// 6. .then() may be called many times on the same promise
//7 .then() muste return new promise (promise2)
// 8.if onfull or onRe return value x, and x is a promise, promise2 will be locked with (same state or value)
// if onfullfilled or onrejected throws an exemption, e, promidse2 must be rejected with "e"
//  as the reason
// 10. in ongfull is not a function and promise1 must be fullfilled with the same value as promise 1
// 11. if onRejected() is not a function and promise1 is rejected, promise2 must be rejected for the same requestAnimationFrame.
// 

fetch(url)
    .then(process)
    .then(save)
    .catch(handleError)

const wait = time => new Promise (
    res => setTimeout(() => res(), timeout)
)
wait(200)
//onfullfilled() acn return new promis, "x"
.then(()=> new Promise(res => res("Foo")))
//assumes state of x
.then(a=>a)
// above we returned unwrapped value "x"
//so .then() above returns a fullfilled promise
//with that value:

.then(b=> console.log(b)) // Foo
//Note:'null' is valid promise
.then(() => null)
.then(c => console.log())// null
//the Following Error is not reported yet
.then(() =>  {throw new Error("foo")})
//returned promise is rjected
//with an error and a reason
.then(
    //Nothin is logged due to the error above
    d => console.log('d: ${d}'),
    //we handle error(which is the rejection reason)
    e => console.log(e) // [error: foo]
)

then(f => console.log('f: ${f}'))// f:undefined
//th following does not log. "e was already handled"
// so this handler doesnnt ge4t called
.catch(e => console.log(e))
.then(()=> {throw new Error("barr")})
//when the promise is rejected, success handlers get skipped
//nothing logs here because of the "bar" exception
.then(g(console.log(`g: ${g}`)))
.catch(h => console.log(h)) //[Error:"bar"]

/**
 * Error handling
 */
//1 anti-pattern
 save().then(
    handleSuccess,
    handleError
 )

 //2
 save()
 .then(handleSuccess)
 .catch(handleError)
// 3
save()
    .then(
        handleSuccess,
        handleError
    )
    .catch(handleSomeOtherError)

    // !!!end all promise chain with a ".ca"!!

    // *cancel Promise
    // Common mistakes when canceling promise!
    // 1. adding.cancel() to the promise 

    const wait = (
        time,
        cancel = Promise.reject()
       ) => new Promise((resolve, reject) => {
            const timer = setTimeout(resolve, time) 
            const noop = () =>  {}
            
            cancel.then(()=>{
                clearTimeout(timer)
                reject(new Error('cancelled'))
            }, noop)
      })

      const shouldCancel =Promise.resolve()
      wait(2000, shouldCancel).then
     () = console.log("hello")
     (e) = console.log(e)
