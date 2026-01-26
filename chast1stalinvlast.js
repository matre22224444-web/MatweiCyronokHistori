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

const text1="В марте 1946 г. на организационном Пленуме ЦК были сделаны крупные перестановки в высшем партийном руководстве:<br>1. Ввиду тяжёлой онкологической болезни из состава Политбюро был выведен М.И.Калинин, а его полноправными членами стали Л.П. Берия и Г.М. Маленков. <br>2. Кандидатами в члены Политбюро были избраны Н.А.Булганин и А.Н.Косыгин.<br> 3. С должности многолетнего секретаря ЦК был отставлен член Политбюро А.А.Андреев. <br> 4. Руководство всей оперативной работой Организационного бюро (Оргбюро) и Секретариата ЦК возлагалось на А.А.Кузнецова, который де-факто стал вторым секретарём ЦК.";
const text2="Сразу после завершения работы Пленума ЦК состоялась первая сессия Верховного Совета СССР II созыва, на которой: <br>1. Совет народных комиссаров СССР был преобразован в Совет Министров СССР, председателем которого был назначен И.В. Сталин.<br>2. Заместителями председателя Совета Министров СССР были назначены В.М. Молотов, Л.П. Берия, К.Е.Ворошилов, Н.А.Вознесенский, А.И. Микоян, А.А.Андреев и А.Н.Косыгин. <br>3. Советского Постановлением было образовано единое Бюро Совета Министров СССР во главе с Л.П. Берией и двумя его заместителями — Н.А.Вознесенским и А.Н.Косыгиным. <br> 4. председателем Президиума Верховного Совета СССР, который де-юре был главой Советского государства, был назначен Н.М.Шверник.";
const textbel2="Адразу пасля завяршэння працы Пленума ЦК адбылася першая сесія Вярхоўнага Савета СССР II склікання, на якой: <br>1. Савет народных Камісараў СССР быў ператвораны ў Савет Міністраў СССР, старшынёй якога быў прызначаны і.у. Сталін.<br>2. Намеснікамі старшыні Савета Міністраў СССР былі прызначаныя в.м.Молатаў, л.п.Берыя, К. Е. Варашылаў, н. а. Вазнясенскі, а. і. Мікаян, А. а. Андрэеў і А. Н. Касыгін. <br>3. Савецкай пастановай было створана адзінае Бюро Савета Міністраў СССР на чале з л.п.Берыяй і двума яго намеснікамі — н.а.Вазнясенскім і А. Н. Касыгіным. <br> 4. Старшынёй Прэзідыума Вярхоўнага Савета СССР, які дэ-юрэ быў кіраўніком Савецкай дзяржавы, быў прызначаны Н.м. Шверник.";
const textbel1="У сакавіку 1946 г. на арганізацыйным Пленуме ЦК былі зроблены буйныя перастаноўкі ў вышэйшым партыйным кіраўніцтве:<br>1. З прычыны цяжкай анкалагічнай хваробы са складу Палітбюро быў выведзены м.і. Калінін, а яго паўнапраўнымі членамі сталі л. п. Берыя і г. м. Маленков. <br>2. Кандыдатамі ў члены Палітбюро былі абраныя Н.А.Булганин і А. Н. Касыгін.<br> 3. З пасады шматгадовага сакратара ЦК быў адстаўлены член Палітбюро А. а. Андрэеў. <br> 4. Кіраўніцтва ўсёй аператыўнай працай арганізацыйнага бюро (Аргбюро) і Сакратарыята ЦК ўскладалася на А.а. Кузняцова, які дэ-факта стаў другім сакратаром ЦК.";
const Name="ПЛЕНУМ ЦК В МАРТЕ 1946г.";
const namebel="ПЛЕНУМ ЦК У САКАВIКУ 1946г.";
const button1=document.getElementById("butlanger");
button1.addEventListener('click', function(event){
    const textnow=document.getElementById("TEXT1");
    const textnow2=document.getElementById("TEXT2");
    const namenew=document.getElementById("name1")
    if(button1.textContent==="РУС"){
        textnow.innerHTML=textbel1;
        textnow2.innerHTML=textbel2;
        namenew.innerHTML=namebel;
        button1.textContent="БЕЛ";
        button1.style.color = "white";
        button1.style.width = "40px";
        button1.style.height = "33px";
        button1.style.borderWidth = "2px";
        button1.style.backgroundColor = "transparent";
        button1.style.padding = "1px";
        button1.style.fontWeight = "bolder";
        button1.style.borderRadius = "5px";
        button1.style.borderColor = "white";
        button1.style.transitionDuration = "0.5s";
        button1.style.borderStyle = "solid";
    }
    else if(button1.textContent==="БЕЛ"){
        textnow.innerHTML=text1;
        textnow2.innerHTML=text2;
        namenew.innerHTML=Name;
        button1.textContent="РУС";
        button1.style.color = "white";
        button1.style.width = "40px";
        button1.style.height = "33px";
        button1.style.borderWidth = "2px";
        button1.style.backgroundColor = "transparent";
        button1.style.padding = "1px";
        button1.style.fontWeight = "bolder";
        button1.style.borderRadius = "5px";
        button1.style.borderColor = "white";
        button1.style.transitionDuration = "0.5s";
        button1.style.borderStyle = "solid"; 
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

const dop10=document.getElementById("doptext10");
dop10.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo10");
    info.style.opacity="1";
    dop10.style.textShadow="0 0 15px #d14545"
    dop10.style.transitionDuration="0.5s"
    dop10.style.color="red"
    info.style.animationDirection=""


})

dop10.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo10");
    info.style.opacity="0"
    dop10.style.textShadow=""
    dop10.style.color=""})

const dop11=document.getElementById("doptext11");
dop11.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo11");
    info.style.opacity="1";
    dop11.style.textShadow="0 0 15px #d14545"
    dop11.style.transitionDuration="0.5s"
    dop11.style.color="red"
    info.style.animationDirection=""

})

dop11.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo11");
    info.style.opacity="0"
    dop11.style.textShadow=""
    dop11.style.color=""})

const dop12=document.getElementById("doptext12");
dop12.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo12");
    info.style.opacity="1";
    dop12.style.textShadow="0 0 15px #d14545"
    dop12.style.transitionDuration="0.5s"
    dop12.style.color="red"
    info.style.animationDirection=""

})

dop12.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo12");
   info.style.opacity="0"
    dop12.style.textShadow=""
    dop12.style.color=""})

const dop13=document.getElementById("doptext13");
dop13.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo13");
    info.style.opacity="1";
    dop13.style.textShadow="0 0 15px #d14545"
    dop13.style.transitionDuration="0.5s"
    dop13.style.color="red"
    info.style.animationDirection=""

})

dop13.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo13");
    info.style.opacity="0"
    dop13.style.textShadow=""
    dop13.style.color=""})

const dop14=document.getElementById("doptext14");
dop14.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo14");
    info.style.opacity="1";
    dop14.style.textShadow="0 0 15px #d14545"
    dop14.style.transitionDuration="0.5s"
    dop14.style.color="red"
    info.style.animationDirection=""


})

dop14.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo14");
    info.style.opacity="0"
    dop14.style.textShadow=""
    dop14.style.color=""})

const dop15=document.getElementById("doptext15");
dop15.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo15");
    info.style.opacity="1";
    dop15.style.textShadow="0 0 15px #d14545"
    dop15.style.transitionDuration="0.5s"
    dop15.style.color="red"
    info.style.animationDirection=""
})

dop15.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo15");
    info.style.opacity="0"
    dop15.style.textShadow=""
    dop15.style.color=""})


const dop16=document.getElementById("doptext16");
dop16.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo16");
    info.style.opacity="1";
    dop16.style.textShadow="0 0 15px #d14545"
    dop16.style.transitionDuration="0.5s"
    dop16.style.color="red"
    info.style.animationDirection=""

})

dop16.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo16");
    info.style.opacity="0"
    dop16.style.textShadow=""
    dop16.style.color=""})


const dop17=document.getElementById("doptext17");
dop17.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo17");
    info.style.opacity="1";
    dop17.style.textShadow="0 0 15px #d14545"
    dop17.style.transitionDuration="0.5s"
    dop17.style.color="red"
    info.style.animationDirection=""

})

dop17.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo17");
     info.style.opacity="0"
    dop17.style.textShadow=""
    dop17.style.color=""})


const dop18=document.getElementById("doptext18");
dop18.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo18");
    info.style.opacity="1";
     dop18.style.textShadow="0 0 15px #d14545"
    dop18.style.transitionDuration="0.5s"
    dop18.style.color="red"
    info.style.animationDirection=""

})

dop18.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo18");
    info.style.opacity="0"
    dop18.style.textShadow=""
    dop18.style.color=""})



const dop19=document.getElementById("doptext19");
dop19.addEventListener("mouseover",function(event){
    const info=document.getElementById("dopinfo19");
    info.style.opacity="1";
   dop19.style.textShadow="0 0 15px #d14545"
    dop19.style.transitionDuration="0.5s"
    dop19.style.color="red"
    info.style.animationDirection=""

})

dop19.addEventListener("mouseout", function(event){
     const info=document.getElementById("dopinfo19");
    info.style.opacity="0"
    dop19.style.textShadow=""
    dop19.style.color=""})





