const glavfon=document.getElementById("gfon")
const Fon1=document.getElementById("fon1")
const Fon2=document.getElementById("fon2")


const Menu1=document.getElementById("menu1")
const Menu2=document.getElementById("menu2")
Menu1.addEventListener('mouseover', function(event){
    glavfon.style.display="none"
    Fon1.style.opacity="1"
    Fon1.style.transitionDuration="0.5s"
})

Menu1.addEventListener('mouseout',function(event){
    Fon1.style.opacity="0"
    Fon1.style.transitionDuration="0.5s"
    if(Fon1.style.opacity==="0"){
       glavfon.transitionDuration=
       glavfon.opacity="1"
       glavfon.style.display=""}
})

Menu2.addEventListener('mouseover', function(event){
    glavfon.style.display="none"
    Fon2.style.opacity="1"
    Fon2.style.transitionDuration="0.5s"
})

Menu2.addEventListener('mouseout',function(event){
    Fon2.style.opacity="0"
    Fon2.style.transitionDuration="0.5s"
    if(Fon2.style.opacity==="0"){
       glavfon.transitionDuration=
       glavfon.opacity="1"
       glavfon.style.display=""}
})