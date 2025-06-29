let a= document.querySelector("h2");
a.innerText = a.innerText + " from apna college";

let divs= document.querySelectorAll(".box");

// divs[0].innerText="this is first box";
// divs[1].innerText="this is second box";
// divs[2].innerText="this is third box";
let idx=1;
for(div of divs){
     div.innerText=`this is the ${idx} box`;
     idx++;
}

let btn= document.createElement("button")
btn.innerText="this is a button"
btn.style.backgroundColor="red"
btn.style.color="white";

document.querySelector("body").prepend(btn)

let para= document.querySelector("p")
para.setAttribute("class", "newPara");

let theme=document.querySelector(".theme")
let body=document.querySelector("body")
let mode="light"

theme.addEventListener("click",()=>{
     if(mode==="light"){
          mode="dark"
           body.classList.remove("lightmode")
          body.classList.add("darkmode")
     }else{
          mode="light"
           body.classList.remove("darkmode")
          body.classList.add("lightmode")
     }
})


