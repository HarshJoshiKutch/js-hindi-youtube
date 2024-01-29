// prototyple js means that is work for the prototype
// prototyple behaiviour means har nahi manvu thay 

function multiplyby5(num){
    return num*5;
}

multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username,score){
    this.username = username
}

createUser.prototype.increment = function(){ // .increment e method che 
    this.score++; // jene pan bolavyo che ene mate tene increment kari dyo
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);

}
const chai = new createUser("chai",25);
const tea = new createUser("chai",250)

chai.printMe();