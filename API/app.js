// now in this file of js i am going to use the concept of the API call and fetching the API
// so we use fetch sunction to fecth the API

let url="https://catfact.ninja/fact";

fetch(url).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})