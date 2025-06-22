// now in this file of js i am going to use the concept of the API call and fetching the API
// so we use fetch sunction to fecth the API

let url="https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     console.log(res)
//     res.json().then((data)=>{console.log(data)})
// }).catch((err)=>{
//     console.log(err)
// })

//now i ma going to use a async function to fetch the api and also going to use await because js is asynchrnous in nature

async function fetchData() {
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(url);
        let data2=await res2.json();
        console.log(data2.fact);
    }catch(err){
        console.log("Error fetching data:", err);
    }
}

fetchData(); 
