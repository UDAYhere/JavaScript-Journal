const express = require('express');
const app=express();

let port =3000;
app.set('view engine','ejs');
// app.use(express.static(path.join( __dirname ,'public')));
// app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send('this is the home page');
    // console.die(req);
});
app.get('/insta/:username',(req,res)=>{
    let username=req.params.username;
    const followers=["mukesh","nitin","uday","anil"];
    let instadata= require("./data.json");
    let data= instadata[username];

    if(data){
        res.render('instagram.ejs',{data});
    }else{
        res.render('error.ejs');

    }

});

// console.log(req.params);