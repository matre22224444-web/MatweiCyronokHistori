const textussr1=document.getElementById("ussr1")
const textussr2=document.getElementById("ussr2")
const textussr3=document.getElementById("ussr3")
const textbssr=document.getElementById("bssr")
const menu=document.getElementById("menuglav")
const buttonhistori=document.getElementById("history")
const black1=document.getElementById("black")
const buttonhouse=document.getElementById("buttonhouse1")
const buttonlangimg=document.getElementById("butlangerimg")
const buttonrazimg=document.getElementById("buttonrazimg1")
const buttonback1=document.getElementById("buttonback")
const buttonbackimg1=document.getElementById("buttonbackimg")
const buttonhistoruimg1=document.getElementById("buttonhistoryimg")
const nowtext=document.getElementById("GLAVTEXT")
const buttonifoimg=document.getElementById("buttoninfoimg1")
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

    
