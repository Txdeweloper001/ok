"use strict";

const n=document.querySelector("#name");
const p=document.querySelector("#password");

const nm=document.querySelector("#nm");
const ps=document.querySelector("#ps");

const btn=document.querySelector(".btn");
const kbk=document.querySelectorAll(".name");

btn.addEventListener("click",()=>{
    if(n.value !== " ")
    {
        nm.innerHTML='<i class="fas fa-ban"></i>';
        kbk[0].style.border="solid 0.5px red";
    }
    if(p.value !== " ")
    {
        ps.innerHTML='<i class="fas fa-ban"></i>'; 
        kbk[1].style.border="solid 0.5px red";  
    }
});