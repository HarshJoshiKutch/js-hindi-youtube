// let myName = "harsh     "; // jo hve aama space aapi desu to tema harsh pachi "harsh     " aam aapiye to have truelength levi pde
// console.log(myName.trim().length);// aano use karine to medvi sakiye chiye
// console.log(myName.truelength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower :function(){
        console.log(`spidy power is ${thia.spiderman}`)
    }
}

Object.prototype.harsh =  function(){
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says hello`);
}

// myHeros.harsh();
// heroPower.harsh();
// heroPower.heyHarsh(); 


// inheritance 

const User = {
    name:"chai",
    email:"cjai@google.com"
}
const  Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable :false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername  = "Chaiaurcode   "

String.prototype.truelength = function() {
    console.log(`${this}`);

    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.truelength()
"harsh".truelength()