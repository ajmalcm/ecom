let s=document.getElementsByClassName("s");
let mainimg=document.getElementById("mainimg");
Array.from(s).forEach(function(element)
{
    element.addEventListener("click",()=>{
        mainimg.src=element.src;

    })
})