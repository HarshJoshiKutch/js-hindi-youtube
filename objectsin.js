console.log("Chaliye ji suru karte hai!");

//object create karte hai

// const rectangle = {
//     length :2,
//     breadth :3,
    
//     draw: function() {
//         console.log("draw");

//     }
// };

// console.log(rectangle.draw());

// Factory Function

// function createRectangle(length,breadth){
//     return rectangle = {
//         length,
//         breadth,

//         draw() {
//             console.log("Drawing rectangle");
//         }
//     };
// }

// let rectangleObj1 = createRectangle(4,5); 
// let rectangleObj2 = createRectangle(6,7);
// let rectangleObj3 = createRectangle(2,1);


// Constructor Functin -> ama return karvanu aavtu nathi 
// prperty/ methods initialize karva mate use thay che 

// function Rectangle(){
//     this.length=3,
//     this.breadth=4,
//     this.draw= function(){
//         console.log("Drawing");
//     }
// }
// object create using constructor function

// let rectangleObj1 = new Rectangle();
// rectangleObj1.color= 'yellow';
// console.log(rectangleObj1);

// delete rectangleObj1.color;
// console.log(rectangleObj1);

// For-in loop

// let rectangle = {
//     length:3,
//     breadth:4
// }

// for(let key in rectangle){
    //keys are reflected through key variable
    // value are reflected through key variable
    // console.log(key);
    // console.log(key,rectangle[key]);
// }

// For-of loop

// for(let key of  Object.keys(rectangle)){
//     console.log(key); 
// }
 
// if ("length" in rectangle){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }

// Object cloning 

// object clone #1 iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest= {};

// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

// object clone #2 assign

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = Object.assign({},src);
// console.log(dest);

// object clone #3 spread

let src  = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};
console.log(dest);

