// In JavaScript, callbacks are used for handling operations like reading files and making API requests. When there is excessive nesting of the functions it leads to a problem known as the callback hell. Due to this, it becomes difficult to read the code, debug, and maintain. But when we implement the promises and async/await it helps in improving the code.

let h=document.querySelector("h1")

function chnageColor(color, time, callback){
    setTimeout(() => {
        h.style.color=color;
        if(callback) callback();
    }, time)
}

chnageColor("red", 1000, () => {
    chnageColor("blue", 1000, () => {
        chnageColor("green", 1000, () => {
            chnageColor("black", 1000);
        });
    });
});

// here i am calling the function chnageColor multiple times with a callback function. This is known as callback hell. It is difficult to read and maintain this code.
// To avoid this we can use promises and async/await.

