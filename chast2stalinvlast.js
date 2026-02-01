const menu=document.getElementById("menuglav")
const black1=document.getElementById("black")
const buttonhouse=document.getElementById("buttonhouse1")
const buttonlangimg=document.getElementById("butlangerimg")
const buttonrazimg=document.getElementById("buttonrazimg1")
const buttonback1=document.getElementById("buttonback")
const buttonbackimg1=document.getElementById("buttonbackimg")
const buttonifoimg=document.getElementById("buttoninfoimg1")
const videoinfo1=document.getElementById("vidioinfo")
menu.addEventListener('mouseover', function(event) {
    menu.style.transitionDuration = "1s"
    menu.style.opacity = "1"
    black1.style.zIndex="50"
    black1.style.transitionDuration="1s"
    black1.style.opacity="0.9"
})

menu.addEventListener('mouseout', function(event) {
    menu.style.transitionDuration = "1s"
    menu.style.opacity = "0"
    black1.style.zIndex="0"
    black1.style.opacity="0"
})
buttonhouse.addEventListener('mouseover', function(event){
    buttonhouse.src="infoObsh/houseon.svg"
})
buttonhouse.addEventListener('mouseout', function(event){
    buttonhouse.src="infoObsh/house.svg"
})
buttonlangimg.addEventListener('mouseover', function(event){
    buttonlangimg.src="infoObsh/RUSON.svg"
})
buttonlangimg.addEventListener('mouseout', function(event){
    buttonlangimg.src="infoObsh/RUS.svg"
})


const raz=document.getElementById("buttonraz")
raz.addEventListener('click',function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1on.svg")){
        menu.style.left="0"
        buttonrazimg.src="infoObsh/raz2.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2on.svg")){
        menu.style.left="70%"
        buttonrazimg.src="infoObsh/raz3.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3on.svg")){
        menu.style.left="35%"
        buttonrazimg.src="infoObsh/raz1.svg"
    }
})

buttonrazimg.addEventListener("mouseover",function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1.svg")){
        buttonrazimg.src="infoObsh/raz1on.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2.svg")){
        buttonrazimg.src="infoObsh/raz2on.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3.svg")){
        buttonrazimg.src="infoObsh/raz3on.svg"
    }
})

buttonrazimg.addEventListener("mouseout",function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1on.svg")){
        buttonrazimg.src="infoObsh/raz1.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2on.svg")){
        buttonrazimg.src="infoObsh/raz2.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3on.svg")){
        buttonrazimg.src="infoObsh/raz3.svg"
    }
})

buttonback1.addEventListener("mouseover",function(event){
    buttonbackimg1.src="infoObsh/backon.svg"
})
buttonback1.addEventListener("mouseout",function(event){
    buttonbackimg1.src="infoObsh/back.svg"
})
buttonifoimg.addEventListener("mouseover",function(event){
    buttonifoimg.src="infoObsh/infoON.svg"
})
buttonifoimg.addEventListener("mouseout",function(event){
    buttonifoimg.src="infoObsh/info.svg"
})


const buttondopinfo=document.getElementById("buttoninfo");
buttondopinfo.addEventListener("click",function(event){
     const info1=document.querySelectorAll(".textdop");
       info1.forEach(element => {
          element.style.color='red';
       });
})

const dop1=document.getElementById("doptext1");
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

const dop2=document.getElementById("doptext2");
dop2.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo2");
    info.style.opacity="1";
    dop2.style.textShadow="0 0 15px #d14545"
    dop2.style.transitionDuration="0.5s"
    dop2.style.color="red"
    info.style.animationDirection=""
    
})

dop2.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo2");
     info.style.opacity="0"
    dop2.style.textShadow=""
    dop2.style.color=""})

const dop3=document.getElementById("doptext3");
dop3.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo3");
    info.style.opacity="1";
    dop3.style.textShadow="0 0 15px #d14545"
    dop3.style.transitionDuration="0.5s"
    dop3.style.color="red"
    info.style.animationDirection=""

})

dop3.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo3");
    info.style.opacity="0"
    dop3.style.textShadow=""
    dop3.style.color=""})

const dop4=document.getElementById("doptext4");
dop4.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo4");
    info.style.opacity="1";
    dop4.style.textShadow="0 0 15px #d14545"
    dop4.style.transitionDuration="0.5s"
    dop4.style.color="red"
    info.style.animationDirection=""

})

dop4.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo4");
    info.style.opacity="0"
    dop4.style.textShadow=""
    dop4.style.color=""})

const dop5=document.getElementById("doptext5");
dop5.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo5");
    info.style.opacity="1";
    dop5.style.textShadow="0 0 15px #d14545"
    dop5.style.transitionDuration="0.5s"
    dop5.style.color="red"
    info.style.animationDirection=""

})

dop5.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo5");
    info.style.opacity="0"
    dop5.style.textShadow=""
    dop5.style.color=""})

const dop6=document.getElementById("doptext6");
dop6.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo6");
    info.style.opacity="1";
    dop6.style.textShadow="0 0 15px #d14545"
    dop6.style.transitionDuration="0.5s"
    dop6.style.color="red"
    info.style.animationDirection=""

})

dop6.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo6");
    info.style.opacity="0"
    dop6.style.textShadow=""
    dop6.style.color=""})

const dop7=document.getElementById("doptext7");
dop7.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo7");
    info.style.opacity="1";
    dop7.style.textShadow="0 0 15px #d14545"
    dop7.style.transitionDuration="0.5s"
    dop7.style.color="red"
    info.style.animationDirection=""

})

dop7.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo7");
    info.style.opacity="0"
    dop7.style.textShadow=""
    dop7.style.color=""})

const dop8=document.getElementById("doptext8");
dop8.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo8");
    info.style.opacity="1";
    dop8.style.textShadow="0 0 15px #d14545"
    dop8.style.transitionDuration="0.5s"
    dop8.style.color="red"
    info.style.animationDirection=""

})

dop8.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo8");
    info.style.opacity="0"
    dop8.style.textShadow=""
    dop8.style.color=""})

const dop9=document.getElementById("doptext9");
dop9.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo9");
     info.style.opacity="1";
    dop9.style.textShadow="0 0 15px #d14545"
    dop9.style.transitionDuration="0.5s"
    dop9.style.color="red"
    info.style.animationDirection=""

})

dop9.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo9");
    info.style.opacity="0"
    dop9.style.textShadow=""
    dop9.style.color=""})