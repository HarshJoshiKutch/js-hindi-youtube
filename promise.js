// //  the promise object represents the eventual completion of asynchronous operation and its resulting value 
// // promise future ma jai ne complete thay che 
// // promise is object and its representing the eventual completion or failure of an asynchronous operaion

// const promiseOne = new Promise(function(resolve,reject){  // ama promise create thay che 
// // DB as async task 
// // DB calls , cryptography , networkcall

// setTimeout(function(){
// console.log('Async task is complete');
// resolve()
// },1000)

// }) 

// // have jo uper promise create thayi gayo che to have ene consume karvu che to

// promiseOne.then(function(){
//     console.log('Promise consumed');
// });  // .then nu direct connection resolve sathe che and teni under call back made che 
// // and jya aa resolve e method che ene pan aapde call karvi padse 


// have jya new promise ne new variable ma create karvu jaruri nathi 

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chai@example.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);  
// });



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false // jya ahiya true karine pan check karjo error hase to e pan solve thayi jse 
//         if(!error){
//             resolve({username:'harsh', password:"11112003"})
//         }
//         else{
//             reject("EROOR: Something went wrong");  // jya reject e error aape che 
//         }

//     },1000)

// })

// // .then() lagadine values lai lesu and jo error aavse .catch() lagdine lai lesu
// // .then() ni further chaining pan kari sako cho

// promiseFour.
// then((user) =>{
//     console.log(user);
//     return user.username // jya user ni sathe username return karvu che 
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch(function(error){ // jya error aavse ene solve karse and promise pan clear thayi gaya 
//     console.log(error);
// })
// .finally(()=>console.log("The promise is either resolved or rejected")); // jya promise resolve thay ke rject thay aa ek time run to thay j che



// aa approach ma .catch , ,then , .finally no use nathi karvano and async no use karine thay che 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true // jya ahiya true karine pan check karjo error hase to e pan solve thayi jse 
        if(!error){
            resolve({username:'javascript', password:"123"})
        }
        else{
            reject("EROOR: JS went wrong");  // jya reject e error aape che 
        }

    },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))