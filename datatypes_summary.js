// primitive datatype

// 7 types: String , Number , Boolean , null , undefined ,Symbol , BigInt

const score =100
const scoreNum = 100.3

const isLoggedIn= false
const outsidTemp = null
let userEmail; // ama undefined values hoi che

const id= Symbol('123')
const anotheriId = Symbol('123')
console.log(id === anotheriId)

const bigNumber= 2342322323242333434n //jema big number hoi ema "n" pachad lagadvathi tema bigint ma fervai jay che 

 
//Refrence(Non Primitive)

// Arrays, Objects, Functions

const heros= ["shaktiman", "nagraj", "doga"]; //array
let myObj = {

    name:"harsh",
    age:"20",
}

const myFunction= function(){
    console.log("Hello World!")
}