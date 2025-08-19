let humburger = document.querySelector(".hamburger-optn");
let optns = document.querySelector(".nav-optn");
let cross = document.querySelector(".cross-btn");
let form = document.querySelector("#login");


humburger.addEventListener("click",()=>{
    optns.classList.toggle("show"); 
    humburger.style.display="none";
    cross.style.display="flex"
    
});

cross.addEventListener("click",()=>{
    optns.classList.toggle("show"); 
    cross.style.display="none";
    humburger.style.display="flex"
    console.log("button clicked");
});

form.addEventListener("click",()=>{
    window.location.href = "form.html";
});

window.addEventListener("resize",()=>{
    if(window.innerWidth>786){
        optns.classList.remove("show");
        cross.classList.add("hidden");
        humburger.style.display="none";
    }
});