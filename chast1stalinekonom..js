const text1="Согласно современным данным, демографические потери СССР составили 25—27 млн человек. Безвозвратные военные потери СССР составляют 11 444 100 человек, потери гражданского населения в зоне оккупации — 13 684 700 человек. Тяжелый урон понесла промышленность, где за годы войны было разрушено 65000 промышленных предприятий. Наибольший урон понесли такие отрасли,как чёрная и цветная металлургия, нефтяная, угольная и химическая промышленность, электроэнергетика и тяжёлое машиностроение. Огромные потери понесло и сельское хозяйство. За годы войны было разрушено 73000 сёл и деревень, около 100000 колхозов и почти 3000 МТС."
const text2="Потери Белорусской ССР в Великой Отечественной войне были катастрофическими: страна потеряла около 2,5-3 миллионов человек (свыше 25% довоенного населения), включая военнослужащих и мирных жителей, уничтоженных в ходе карательных операций, голода и принудительного вывоза. Экономический ущерб был колоссальным: было разрушено более 200 городов и 9 тысяч деревень (многие сожжены вместе с жителями), уничтожена большая часть промышленности, энергетики, транспорта и сельского хозяйства."
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
buttonhistoruimg1.addEventListener("mouseover",function(event){
    if(buttonhistoruimg1.src.includes("infoObsh/hIstoriussr.gif")){
        buttonhistoruimg1.src="infoObsh/hIstoriussron.gif"
    }
    else if(buttonhistoruimg1.src.includes("infoObsh/hIstoribssr.gif")){
        buttonhistoruimg1.src="infoObsh/hIstoribssron.gif"
    }
})
buttonhistori.addEventListener("mouseout",function(event){
    if(buttonhistoruimg1.src.includes("infoObsh/hIstoriussron.gif")){
        buttonhistoruimg1.src="infoObsh/hIstoriussr.gif"
    }
    else if(buttonhistoruimg1.src.includes("infoObsh/hIstoribssron.gif")){
        buttonhistoruimg1.src="infoObsh/hIstoribssr.gif"
    }
})

buttonhistori.addEventListener("click",function(event){
    if(buttonhistoruimg1.src.includes("infoObsh/hIstoriussron.gif")){
         nowtext.textContent=text2;
         buttonhistoruimg1.src="infoObsh/hIstoribssr.gif"
         buttonhistori.title="БССР"
    }
    else if(buttonhistoruimg1.src.includes("infoObsh/hIstoribssron.gif")){
         nowtext.textContent=text1;
         buttonhistoruimg1.src="infoObsh/hIstoriussr.gif"
         buttonhistori.title="CCCР"
    }
})


