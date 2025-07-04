const express = require("express");
const app= express();
// console.dir(app);

let port=8080;
let porta =3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// app.use((req, res) =>{
//     console.log("request received");
//     res.send("this is a response");
// } )

// routing
//app.get
//app.post
//app.put 

app.get("/", (req, res) => {
    console.log("GET request received");
    res.send("Hello, this is a GET request response!");
});

app.get("/hello", (req, res) => {
    console.log("GET request received");
    res.send("Hello, theloo helovjhbdkasbd sponse!");
});

app.get("/terimadi", (req, res) => {
    console.log("GET request received");
    res.send("i am pro babe");
});
app.get( (req, res) => {
    console.log("GET request received");
    res.send("pagla hai kiya");
});

// path parameters
//query strings