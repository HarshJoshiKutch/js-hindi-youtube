// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(3.55))
// console.log(Math.max(2,3,4,5,7));
// console.log(Math.min(65,4,44,32,9));

// console.log("Hello Jii");
// let lastName = "Babbar";
// console.log(typeof(lastName));

// let firstName = new String("Harsh");

// console.log(lastname.includes('Bab'));
// console.log(lastname.startswith("love"));

// let lastName = "     harsh    ";
// console.log(lastName.toLowerCase());
// console.log(lastName.toUpperCase());
// console.log(lastName.endsWith('sh'));
// console.log(lastName.startsWith("har"));

// console.log(lastName.trim())   //for replace the space
// console.log(lastName.replace("harsh","HAR HAR MAHADEV"));   

// let message = " This is my first message";
// let words = message.split('');
// console.log(words);

// # Date and Time valu part che 

// let date =  new Date();

// let date2= new Date('June 20 1998 07:15');

// let date3= new Date(2003,10,11,12);
// console.log(date2);
// console.log(date3);

// # arrays in js

// let numbers=[1,2,5,7];

// console.log(numbers); 

// console.log(numbers.push(9));  // aa number e last ma add thase
// console.log(numbers);

// console.log(numbers.unshift(8));
// console.log(numbers);   

// console.log(numbers.splice(2,0,'a','b','c'));
// console.log(numbers);   

let arr= [10,20,30,40,50];

//  First method for using the for-of method using 
// for (let value of arr){
//     console.log(value);
// }
 
// Second method for using the for-each method using

// arr.forEach(function(number){
//     console.log(number);
// });

// aero-function banavanu hoi to ena mate

// arr.forEach(number =>console.log(number));

// Sorting karvanu che 

// let numbers = [ 40,30,10,20,50];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// Filtered method 

// let number= [1,2,-2,-4];

// let filtered = number.filter(function(value){
//     return value>=0;
// })

// console.log(filtered);

// Aero function ma pan convert kari sakay che 
// let filtered = number.filter(value => value >=0);
// console.log(filtered);

// Mapping arrays 

let number = [7,8,9,10];

let items= number.map(function(value){
    return 'student_no' + value;
});

console.log(items);