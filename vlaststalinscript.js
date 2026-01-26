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