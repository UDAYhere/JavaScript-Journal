//now we are going to us the axios for the api call in js till now we are using the fecth method to do that 
//axios is the javascript library we can also install the axios or simply us it in our code by taking a cdn link of it

let url="https://catfact.ninja/fact";

//in axois we do not need to parse the data first into the json format we can directly access the data
//we can learn more about the axois function in the git link:
//https://github.com/axios/axios
async function fetchData() {
    try{
        let res=await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    }catch(err){
        console.log("Error fetching data:", err);
        return "No fact"
    }
}

//now we will try to display the fact in our webpage
let btn =document.querySelector(".fact-btn")
let p=document.querySelector("p")

btn.addEventListener("click", async ()=>{
    let fact= await fetchData()
    p.innerText=fact
    console.log(fact);

})