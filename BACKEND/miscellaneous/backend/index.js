const express=require('express');
let app=express();

let port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`server is running at the port number: ${port}`);
});

app.get('/',(req,res)=>{
    res.send(`this is the home page`);
})
app.get('/register',(req,res)=>{
    let {username, password}=req.query;
    res.send(`this is the basic get response. welcome user: ${username}`);
});

app.post('/register',(req,res)=>{
    let {username, password}=req.body;
    res.send(`his is the basic post response. welcome user: ${username}`);
});