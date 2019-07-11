// ajax("..", function(...){

// })


// listen("click", function handler(evt){
//     setTimeout(function request() => {
//         ajax("...", function response(text){
//             if(test === "hello"){
//                 handler()}if else(text === "world"){
//                     request()
//                 }

//                 }
//             }
//         })
//     , 1000);
// })

// function listen(){
//    const click =  document.addEventListener("click", handler)
// }

// function handler(){...}

// function request(){...}

// function response(){...}

// analytics.trackPurchase(purchaseData, function(){
//     if(!tracked){
//     chargeCreditCard()
// }
//     displayThankYouPage()
// })

// function addNumbers (x,y){
//     let numOne = parseInt(x, 10)
//     let numTwo = parseInt(y, 10)
//     return numOne + numTwo }




// doA(ajax(function response(text){
//     doB(setTimeOut(function() => {

//     }), 1000)

//     doC(){
//         doD(){
//     })
//     doE(){})
//     doF()
    
// if(typeof x != "number" || typeof y !=  "number" ) throw Error("B par"){
//     return x + y
// }

// function success(data){
//     console.log(data)
// }
// function failure(err){
//     console.error(err)
// }

// // Error first 
// function response(error, data){
//     // error?
//     if(error){
//         console.error(error)
//     }else{
//         console.log(data)
//     }
// // }
// function timeoutify(fn,delay){
//     let intv = setTimeout(() => {
//         intv = null
//         fn(new Error("Timeout!"))
//     }, delay)
//     return function(){
//         if(intv){clearTimeout(intv)

//             fn.apply(this, [null].concat([]slice.call(arguments))
//     }


//     function foo(err, data){
//         if(error){
//             console.error(error)
//         }else{
//             console.log(data)
//         }
//     }

// }

Array.prototype.myfunc = function(callback) {
    let arr = []

    

    for(i=0; i < this.length; i++)arr.push(callback(this[i], this)) 
        return arr
    

}






// [1,2,3].solution(e=> `${e}` == [1,2,3])
// ["1","2","3"].solution(e => parseInt(e)=== [1,2,3])

// [8,3,6].solution((e,i) => `${i}: ${e * 2}`===)


