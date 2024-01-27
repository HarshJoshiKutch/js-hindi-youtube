//  javascript and classes 
// javascript is prototype bases language 
// OOPS 
// Object = -> collection of properties and methods
// -> toLowerCase   

// why use OOP
//  Object literals

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new, this)

// 4 pillers
// - Abstraction
// -Encapsulation
// -Inheritance
// -Polymorphism

// object 

const user = {
    username:"hitesh",
    logincount:8,
    signedIn: true,

    getUsersDetails: function(){ 
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this)

    }
}

// console.log(user);
// console.log(user.getUsersDetails());
// console.log(this); // ama khali parantheses j aavse jyare website ma jaine karsu tyare teni bhadhi details j avse


// const promiseOne = new Promise();
// const date = new Date();


function User(username , loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`); // aa ni help thi apne kahbar pan padi jay che ke aapne aama kem aagad ke kai method use karvama aavi che 
    }

    // return this; jo aa na lakhiye to pan aa potani rite return thayi jay j che  
}

const userOne = new User("hitesh",12,true);
const userTwo = new User("ChaiAurCode",11,false);
console.log(userOne.constructor); // potana vise j instruction hoi che ema
console.log(userTwo);

// Constructor fuction hamesha ek new keyword ni copy and instances aape che 
