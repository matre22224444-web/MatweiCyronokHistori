const menu=document.getElementById("menuglav")
menu.addEventListener('mouseover',function(event){
    menu.style.transitionDuration="1s"
    menu.style.opacity="1"
    menu.style.background='linear-gradient(180deg, ' +
    'rgba(255, 40, 40, 0.65) 0%, ' +      
    'rgba(255, 60, 60, 0.45) 30%, ' +   
    'rgba(255, 80, 80, 0.25) 60%, ' +     
    'rgba(255, 100, 100, 0.12) 85%, ' +   
    'transparent 100%)';

})

menu.addEventListener('mouseout',function(event){
    menu.style.transitionDuration="1s"
    menu.style.opacity="0"
    
})

const raz=document.getElementById("buttonraz")
raz.addEventListener('click',function(event){
    if(raz.textContent==="1"){

        menu.style.left="0"
        raz.textContent="2"
    }
    else if(raz.textContent==="2"){
        menu.style.left="70%"
        raz.textContent="3"
    }
    else if(raz.textContent==="3"){
        menu.style.left="35%"
        raz.textContent="1"
    }
})

const but1=document.getElementById("button1")
const but2=document.getElementById("button2")
const but3=document.getElementById("button3")

but1.addEventListener("mouseover", function(event){
    but1.style.transform="scale(1.03,1.03)"
    but1.style.boxShadow="0 0 30px red"
    but2.style.filter="blur(5px)"
    but3.style.filter="blur(5px)"
    but1.style.zIndex="10"
})
but1.addEventListener("mouseout", function(event){
   but1.style.transform=""
    but1.style.boxShadow=""
    but2.style.filter=""
    but3.style.filter=""
    but1.style.zIndex="0"
})

but2.addEventListener("mouseover", function(event){
    but2.style.transform="scale(1.03,1.03)"
    but2.style.boxShadow="0 0 30px red"
    but1.style.filter="blur(5px)"
    but3.style.filter="blur(5px)"
    but2.style.zIndex="10"
})
but2.addEventListener("mouseout", function(event){
   but2.style.transform=""
    but2.style.boxShadow=""
    but1.style.filter=""
    but3.style.filter=""
    but2.style.zIndex="0"
})

but3.addEventListener("mouseover", function(event){
    but3.style.transform="scale(1.03,1.03)"
    but3.style.boxShadow="0 0 30px red"
    but1.style.filter="blur(5px)"
    but2.style.filter="blur(5px)"
    but3.style.zIndex="10"
})
but3.addEventListener("mouseout", function(event){
   but3.style.transform=""
    but3.style.boxShadow=""
    but1.style.filter=""
    but2.style.filter=""
    but3.style.zIndex="0"
})

const dop1=document.getElementById("button1");
dop1.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo1");
    info.style.opacity="1";
    dop1.style.textShadow="0 0 15px #d14545"
    dop1.style.transitionDuration="0.5s"
    dop1.style.color="red"
    info.style.animationDirection=""
})

dop1.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo1");
    info.style.opacity="0"
    dop1.style.textShadow=""
    dop1.style.color=""})