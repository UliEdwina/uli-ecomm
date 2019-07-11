// let myObj = new Object(),
// str = "my string",
// rand = Math.random(),
// obj = new Object()

// myObj.type = "dot syntax"
// myObj[str] = "string value"
// myObj[rand] = "random number"
// myObj[obj] = "object"
// myObj[""] = "empty string"
// myObj['date created'] = "string with a space"

// function showProps(obj, objName) {
//     let result = ''

//     for (let i in obj) {
//         if (obj.hasOwnProperty(i)){
//             result += `${objName}.${i} = ${obj[i]}\n`
//         }
//     }
//     return result
// }
// console.log(showProps(myObj, "myObj"))

// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// let myCar2 = new Car("Eagle", "Talon tsi", 1993)

// console.log(myCar2)

// function Person(name, sex, age){
//     this.name = name
//     this.sex = sex
//     this.age = age

// }

// let person = new Person("Nene", "female", 45)
// console.log(showProps(person, "nene"))

// let Animal = {
//     type: "invertabrates",
//     displayType: function(){
//         console.log(this.type);
//     }
// }

// let animal1 = Object.create(Animal)

// console.log(`animal1: `, animal1);
// animal1.displayType()

// let fish = Object.create(Animal)
// fish.type = "Fish"
// fish.displayType()

// let obj = {
//     a: 7,
//     get b() {
//         return this.a+1
//     },
//     set c(x) {
//         this.a = x/2
//     }

// }

// console.log(obj.a)
// console.log(obj.b)
// obj.c = 50
// console.log(obj.a)


// let d = Date.prototype
// Object.defineProperty(d, 'year', {
//     get: function() { return this.getFullYear()},
//     set: function(y) { this.setFullYear(y) }
// })
// // console.log(`year: `, now.year);

// let now = new Date()
// now.year = 2001
// console.log('now.year: ', now.year)
// console.log('now: ', now.getFullYear())

// let myObj = new Object
// myObj.a = 5
// myObj.b = 12

// console.log('myObj: ', myObj)

let fruit = { name: "apple"}
let fruitBear = fruit

console.log(`fruit == fruitBear:`, fruit === fruitBear)// false


