//so in this file of code we are going to discuss about the async function and await keyword in javascript.

// await function always return a promise. it does not matter that we return a promise or anything else. it will return a promise.
async function getMessage(){
    // throw "error"
    //we can use throw keyword to throw an error in the async function.
    return "hello"
}

//we also need to handle the async function with the help of a then and catch block just like a promise.

//we can also use the the arrow function as a async function 

let hello= async()=>{
    return "hello"
}
// now the variable that we have created can be called as a function.

// so now we will se that what our await function do in javaScript.

function randomNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(num); // resolve the promise with the random number
        }, 1000);
    }); 
}

// we have created a function which will print a random number in the console after one second 

// async function display(){
//     randomNum();
//     randomNum()
//     randomNum()
//     randomNum()
// ;}
// now display is a async function that will call the function randomNum 4 times with 1sec of delay. but as we have called it many times and does have use the await keyword so it will not wait for the previous function to complete.

async function display(){
    await randomNum();
    await randomNum()
    await randomNum()
    await randomNum()
;}
//now the same function with the await keyword will make it wait for the previous function to be completed first and then it will be excuted.

