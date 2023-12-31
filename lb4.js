// Function :- a block of code that fulfill a specific task
// use for reusability

// console.log('Kya Haaal!');

// function run(){
//     console.log("running");
// }

// function call karvanu e game tya lai jai sakiye chiye

// console.log(run());

// Function assignment : aama je funciton ni calling e hamesha eni niche aavi joi
// let stand = function walk(){
//     console.log("walking");
// }

//function call 
// console.log(stand());

// Anonymous function assignment

// let stand2 = function(){
//     console.log("walking");
// }

// console.log(stand2());

// let x =1;
// x ="a";
// console.log(x);

// function sum(a,b){
//     // console.log(arguments);

//     let total = 0;
//     for(let value of arguments)
//         total = total +value;   
//     return a+b;
// };

// console.log(sum(1,2)); 
// console.log(sum(1)); 
// console.log(sum()); 
// console.log(sum(1,2,3,4)); 

// let ans = sum(1,2);
// console.log(ans);


// Rest function ==> aama array print thse

// function sum(num,value,...args){
//     console.log(args); // jya num ni ander 1 jatto rahe and 2 e value ni under jato rahese and baki bhadha args ma jata rahese
// }

// console.log(sum(1,2,3,4,5,6));

// Default parameter
// function interest(p,q=6,r=10){
//     return p*q*r/100;
// }

// console.log(interest(1000,));

let person = {
        fname:'Love',
        lname:'Babber',
        get fullName(){
            return `${person.fname} ${person.lname}`;
        }

        

};

console.log(person);

// function fullName(){
//     return `${person.fname}${person.lname}`;
// }

console.log(fullName);