const audio=document.getElementById("audiorech")
const buttonaudio=document.getElementById("buttonradioplay")
const buttonimageplay=document.getElementById("buttonplayimage")
const buttonnow=document.getElementById("buttonradionazad")
buttonaudio.addEventListener("click", function(event) {
    const currentSrc = buttonimageplay.src;
    const fileName = currentSrc.split('/').pop();
    
    if (fileName === "buttonplay.svg") {
        buttonimageplay.src = "infoObsh/buttonstop.svg";
        audio.play();
    } else if (fileName === "buttonstop.svg") {
        buttonimageplay.src = "infoObsh/buttonplay.svg";
        audio.pause(); 
    }
});
buttonnow.addEventListener("click",function(event){
     const currentSrc = buttonimageplay.src;
    const fileName = currentSrc.split('/').pop();
    audio.load()
    if(currentSrc==="buttonstop.svg"){
        audio.play()
    }
})
const menu=document.getElementById("menuglav1")
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

const buttondopinfo=document.getElementById("buttoninfo");
buttondopinfo.addEventListener("click",function(event){
     const info1=document.querySelectorAll(".textdop");
    if(buttondopinfo.textContent==="ДОП"){
       info1.forEach(element => {
          element.style.color='red';
       });
       buttondopinfo.textContent="СКРЫТЬ";
    }
    else if(buttondopinfo.textContent==="СКРЫТЬ"){
           info1.forEach(element=>{
             element.style.color='wheat'
           });
           buttondopinfo.textContent="ДОП"
    }
})
const dop1=document.getElementById("doptext1");
dop1.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo1");
    info.style.opacity="1";
    dop1.style.textShadow="0 0 15px #d14545"
    dop1.style.transitionDuration="0.5s"
    dop1.style.color="red"
    info.style.animationDirection="";
})

dop1.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo1");
    info.style.opacity="0"
    dop1.style.textShadow=""
    dop1.style.color="";})

const dop2=document.getElementById("doptext2");
dop2.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo2");
    info.style.opacity="1";
    dop2.style.textShadow="0 0 15px #d14545"
    dop2.style.transitionDuration="0.5s"
    dop2.style.color="red"
    info.style.animationDirection="";
})

dop2.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo2");
    info.style.opacity="0"
    dop2.style.textShadow=""
    dop2.style.color="";})

const dop3=document.getElementById("doptext3");
dop3.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo3");
    info.style.opacity="1";
    dop3.style.textShadow="0 0 15px #d14545"
    dop3.style.transitionDuration="0.5s"
    dop3.style.color="red"
    info.style.animationDirection="";
})

dop3.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo3");
    info.style.opacity="0"
    dop3.style.textShadow=""
    dop3.style.color="";})


const dop4=document.getElementById("doptext4");
dop4.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo4");
    info.style.opacity="1";
    dop4.style.textShadow="0 0 15px #d14545"
    dop4.style.transitionDuration="0.5s"
    dop4.style.color="red"
    info.style.animationDirection="";
})

dop4.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo4");
    info.style.opacity="0"
    dop4.style.textShadow=""
    dop4.style.color="";})

const dop5=document.getElementById("doptext5");
dop5.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo5");
    info.style.opacity="1";
    dop5.style.textShadow="0 0 15px #d14545"
    dop5.style.transitionDuration="0.5s"
    dop5.style.color="red"
    info.style.animationDirection="";
})

dop5.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo5");
    info.style.opacity="0"
    dop5.style.textShadow=""
    dop5.style.color="";})



const dop7=document.getElementById("doptext7");
dop7.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo7");
    info.style.opacity="1";
    dop7.style.textShadow="0 0 15px #d14545"
    dop7.style.transitionDuration="0.5s"
    dop7.style.color="red"
    info.style.animationDirection="";
})

dop7.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo7");
    info.style.opacity="0"
    dop7.style.textShadow=""
    dop7.style.color="";})

const dop8=document.getElementById("doptext8");
dop8.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo8");
    info.style.opacity="1";
    dop8.style.textShadow="0 0 15px #d14545"
    dop8.style.transitionDuration="0.5s"
    dop8.style.color="red"
    info.style.animationDirection="";
})

dop8.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo8");
    info.style.opacity="0"
    dop8.style.textShadow=""
    dop8.style.color="";})
