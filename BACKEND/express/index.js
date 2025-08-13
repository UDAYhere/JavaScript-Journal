const express = require("express");
const app= express();
// console.dir(app);

let port=8080;
let porta =3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

//we use app.use to use it as a middleware to handle all the requests.
// app.use((req, res) =>{
//     console.log("request received");
//     let code="<h1>ye ik response hai </h1><ul><li>first point</li><li>second point</li><li>third point</li></ul>"
//     res.send(code);
// } )

// routing
//app.get
//app.post
//app.put 

//we will use get and post here one by one 
//--> app.get is the function which is use to handle the request and send the response handlinng routes.
app.get("/",(req,res)=>{
    res.send("you are in the root page and in get request ")
})

app.get("/client",(req,res)=>{
    res.send("you are in the client page and in get request ")
})

app.get("/admin",(req,res)=>{
    res.send("you are in the admin page and in get request ")
})

app.post("/",(req,res)=>{
    res.send("you are in the root page and in post request ")
})

app.post("/client",(req,res)=>{
    res.send("you are in the client page and in post request ")
})

app.post("/admin",(req,res)=>{
    res.send("you are in the admin page and in post request ")
})

//-->path parameter 
app.get("/:username/:id",(req,res)=>
{
    let {username, id}=req.params;
    res.send(`username is: ${username} reg no. is ${id} `)
})  
// there is also a concept of queryu == string which is used to give the additoinal or we can say the optional parameters to our path parameter which is also stored in our request as a req.query
// path parameters
//query strings