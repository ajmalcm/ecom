// for hamburger icon
const ham=document.getElementById("ham")
let navbar=document.getElementById("navbar")
ham.addEventListener("click",()=>{
   navbar.classList.add("active") 
})
// for closing side menu
let close=document.getElementById("close")
close.addEventListener("click",function(){
    navbar.classList.remove("active") 
})

// for redirecting to single product page
let products=document.getElementsByClassName("pro")
Array.from(products).forEach(function(element)
{
element.addEventListener("click",()=>{
    window.location.href="singleproduct.html";
})

})