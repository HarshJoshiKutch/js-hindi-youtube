const descripter = Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai)); // ama khali chai ne call karavathi kai nai thay but teni sathe ni property ne pan callkarai padse 

Object.defineProperty(chai,'name',{
    // Writable: false,
    enumerable: true   
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key}: ${value}`)    
    }
}
