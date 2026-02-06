const menu=document.getElementById("menuglav")
const black1=document.getElementById("black")
const buttonhouse=document.getElementById("buttonhouse1")
const buttonlangimg=document.getElementById("butlangerimg")
const buttonrazimg=document.getElementById("buttonrazimg1")
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

const but1=document.getElementById("button1")
const but2=document.getElementById("button2")
const but3=document.getElementById("button3")

but1.addEventListener("mouseover", function(event){
    but1.style.transform="scale(1.03,1.03)"
    but1.style.boxShadow="0 0 30px red"
    but2.style.filter="blur(5px)"
    but3.style.filter="blur(5px)"
    but1.style.zIndex="10"
    but1.style.transitionDuration="1s"
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
    but2.style.transitionDuration="1s"
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
    but3.style.transitionDuration="1s"
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
    info.style.zIndex="100"
})

dop1.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo1");
    info.style.opacity="0"
    dop1.style.textShadow=""
    dop1.style.color=""})
