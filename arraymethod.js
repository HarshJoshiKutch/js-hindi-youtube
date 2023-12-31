'use strict';

// let cars = ["audi","bmw","range rover","xuv"];
// console.log(cars.push("Toyota")); //add to end 
// console.log(cars);
// console.log(cars.push("Ferrari"));
// console.log(cars);

// console.log(cars.pop()); // delete from end

// console.log(cars.unshift("Jaguar")); //ama new things ne aagad add karva mate use thay che 
// console.log(cars);

// console.log(cars.shift()); //  aama aapde je first add karru hoi e delete karie chiye 

// concate method
// let primary = ["red", "yellow","orange"];
// let secondary = ["green", "violet","purple"];

// console.log(primary.concat(secondary));
// // reverse method
// console.log(primary.reverse());

// let cars = ["audi", "bmw", "xuv","maruti"];
// console.log(cars.slice());
// console.log(cars.slice(1));
// console.log(cars.slice(1,3));

// Splice method :- removes / replaces / add elements in place
// splice(start,deleteCount,item0...itemN)

// let colors = ["red","yellow","blue","orange","pink","white"];
// console.log(colors.splice(0,1));

// Sort an Array array ne ascending order or decending order ma karo

let cars = ["Toyota", "gwagon", "xuv","maruti","bmw","ferrari"];
console.log(cars.sort());

let chars = ['b','e','t','q'];
console.log(chars.sort());


// practise que.
let months =["January", "July","march","august"]; 
console.log(months.splice(0,2,"july","June"));
console.log(months);