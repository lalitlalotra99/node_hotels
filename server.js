// function add(a,b){
//     return a+b
// }
// const result = add(5,15)
// console.log(result)

// const sum = (e,f)=> e+f;
// console.log(sum(20,20))

// const t = function(a,b){
//     return a*b
// }
// const result =t(2,20)
// console.log(result)

// (function (){
//     console.log("Prince is started")
// })()



// Ye In line function nhi ha alag se function likha ha esme.
// function callback(){
//     console.log("Prince is Printing the callback Function")
// }

// const add = function (a,b,callback){
//     const result = a * b
//     console.log("result"+result) // main function work complete
//     callback()
// }
// add(40,2,callback)



// const add = function(c,d,lalit){
//     const vinay = c+d 
//     console.log("Print the sum "+vinay)
//     lalit()
// }
// // in line Callback function
// add(4,6,function lalit(){
//     console.log("sum Have been Work succesfully")
// })


// inline callback function javascript.
// const sonnu = function (x,y,kavi){
//     const result = x/y 
//     console.log("division have been printed Successfully " +result)
//     kavi()
// }
// sonnu(100,2,()=>console.log("Division is successfully available"))


// const fs = require('fs')
// const os = require('os')

// const user =os.userInfo()
// console.log(user.username)

// fs.appendFile('navi.txt ', 'work is on ' + user.username + '!\n', ()=>{
//     console.log("Tree have been Begin")
// })

// console.log(os)

const notes = require('./notes.js')



console.log('server file is available')

age=notes.age
console.log(age)

let result = notes.number(age + 20,20)
console.log(result)


const result1 = notes.multiplication(age*2,2)
console.log(result1)


// Developer li end se data ko manage krne ke liye manipulate krne ka liye lodash ko use krta ha
const _= require('lodash');
const data =["lalit","person",1,2,3,"2","lalit"]
const filter = _.uniq(data)
console.log(filter)

console.log(_.isString(true))