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

const dop9=document.getElementById("doptext9");
dop9.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo9");
    info.style.opacity="1";
    dop9.style.textShadow="0 0 15px #d14545"
    dop9.style.transitionDuration="0.5s"
    dop9.style.color="red"
    info.style.animationDirection="";
})

dop9.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo9");
    info.style.opacity="0"
    dop9.style.textShadow=""
    dop9.style.color="";})

const dop10=document.getElementById("doptext10");
dop10.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo10");
    info.style.opacity="1";
    dop10.style.textShadow="0 0 15px #d14545"
    dop10.style.transitionDuration="0.5s"
    dop10.style.color="red"
    info.style.animationDirection="";
})

dop10.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo10");
    info.style.opacity="0"
    dop10.style.textShadow=""
    dop10.style.color="";})

const dop11=document.getElementById("doptext11");
dop11.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo11");
    info.style.opacity="1";
    dop11.style.textShadow="0 0 15px #d14545"
    dop11.style.transitionDuration="0.5s"
    dop11.style.color="red"
    info.style.animationDirection="";
})

dop11.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo11");
    info.style.opacity="0"
    dop11.style.textShadow=""
    dop11.style.color="";})

const dop12=document.getElementById("doptext12");
dop12.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo12");
    info.style.opacity="1";
    dop12.style.textShadow="0 0 15px #d14545"
    dop12.style.transitionDuration="0.5s"
    dop12.style.color="red"
    info.style.animationDirection="";
})

dop12.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo12");
    info.style.opacity="0"
    dop12.style.textShadow=""
    dop12.style.color="";})

const dop13=document.getElementById("doptext13");
dop13.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo13");
    info.style.opacity="1";
    dop13.style.textShadow="0 0 15px #d14545"
    dop13.style.transitionDuration="0.5s"
    dop13.style.color="red"
    info.style.animationDirection="";
})

dop13.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo13");
    info.style.opacity="0"
    dop13.style.textShadow=""
    dop13.style.color="";})

const dop14=document.getElementById("doptext14");
dop14.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo14");
    info.style.opacity="1";
    dop14.style.textShadow="0 0 15px #d14545"
    dop14.style.transitionDuration="0.5s"
    dop14.style.color="red"
    info.style.animationDirection="";
})

dop14.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo14");
    info.style.opacity="0"
    dop14.style.textShadow=""
    dop14.style.color="";})

const dop15=document.getElementById("doptext15");
dop15.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo15");
    info.style.opacity="1";
    dop15.style.textShadow="0 0 15px #d14545"
    dop15.style.transitionDuration="0.5s"
    dop15.style.color="red"
    info.style.animationDirection="";
})

dop15.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo15");
    info.style.opacity="0"
    dop15.style.textShadow=""
    dop15.style.color="";})

const dop16=document.getElementById("doptext16");
dop16.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo16");
    info.style.opacity="1";
    dop16.style.textShadow="0 0 15px #d14545"
    dop16.style.transitionDuration="0.5s"
    dop16.style.color="red"
    info.style.animationDirection="";
})

dop16.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo16");
    info.style.opacity="0"
    dop16.style.textShadow=""
    dop16.style.color="";})

const dop17=document.getElementById("doptext17");
dop17.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo17");
    info.style.opacity="1";
    dop17.style.textShadow="0 0 15px #d14545"
    dop17.style.transitionDuration="0.5s"
    dop17.style.color="red"
    info.style.animationDirection="";
})

dop17.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo17");
    info.style.opacity="0"
    dop17.style.textShadow=""
    dop17.style.color="";})

const dop18=document.getElementById("doptext18");
dop18.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo18");
    info.style.opacity="1";
    dop18.style.textShadow="0 0 15px #d14545"
    dop18.style.transitionDuration="0.5s"
    dop18.style.color="red"
    info.style.animationDirection="";
})

dop18.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo18");
    info.style.opacity="0"
    dop18.style.textShadow=""
    dop18.style.color="";})


const dop19=document.getElementById("doptext19");
dop19.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo19");
    info.style.opacity="1";
    dop19.style.textShadow="0 0 15px #d14545"
    dop19.style.transitionDuration="0.5s"
    dop19.style.color="red"
    info.style.animationDirection="";
})

dop19.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo19");
    info.style.opacity="0"
    dop19.style.textShadow=""
    dop19.style.color="";})

const dop20=document.getElementById("doptext20");
dop20.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo20");
    info.style.opacity="1";
    dop20.style.textShadow="0 0 15px #d14545"
    dop20.style.transitionDuration="0.5s"
    dop20.style.color="red"
    info.style.animationDirection="";
})

dop20.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo20");
    info.style.opacity="0"
    dop20.style.textShadow=""
    dop20.style.color="";})


const dop21=document.getElementById("doptext21");
dop21.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo21");
    info.style.opacity="1";
    dop21.style.textShadow="0 0 15px #d14545"
    dop21.style.transitionDuration="0.5s"
    dop21.style.color="red"
    info.style.animationDirection="";
})

dop21.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo21");
    info.style.opacity="0"
    dop21.style.textShadow=""
    dop21.style.color="";})

const dop22=document.getElementById("doptext22");
dop22.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo22");
    info.style.opacity="1";
    dop22.style.textShadow="0 0 15px #d14545"
    dop22.style.transitionDuration="0.5s"
    dop22.style.color="red"
    info.style.animationDirection="";
})

dop22.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo22");
    info.style.opacity="0"
    dop22.style.textShadow=""
    dop22.style.color="";})

const dop23=document.getElementById("doptext23");
dop23.addEventListener("mouseover",function(event){
     const info=document.getElementById("dopinfo23");
    info.style.opacity="1";
    dop23.style.textShadow="0 0 15px #d14545"
    dop23.style.transitionDuration="0.5s"
    dop23.style.color="red"
    info.style.animationDirection="";
})

dop23.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo23");
    info.style.opacity="0"
    dop23.style.textShadow=""
    dop23.style.color="";})









