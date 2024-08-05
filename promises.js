const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async');
        resolve()
    },1000)
    
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task 1");
        resolve()
    },1000)
}).then(function(){
    console.log("Task 2");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai", email: "chai@gmail.com"})
    },1000)

})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFive = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username:"Nimish", passwor:"123"})
        }
        else{
            reject("Error is there")
        }
    },1000)
})

promiseFive
.then((user) => {
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
})
.catch((err) => {
    console.log(err)
})
.finally(() => console.log("Finally runs at the end of the programm"))

const promiseSix = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username:"Javascript", passwor:"123"})
        }
        else{
            reject("Error JS there")
        }
    },1000)
})

async function consumePromiseSix() {
    try {const response = await promiseSix
        console.log(response)
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseSix()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log("E: ",error)
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})