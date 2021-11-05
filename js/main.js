console.log("main.js loaded");
 const buttonAntwoord = document.querySelector(".button-antwoord");
 const link = document.querySelector(".link");
 const buttonNext = document.querySelector(".button-next");
 if(buttonAntwoord){
     buttonAntwoord.addEventListener("click", function(){
          const x = document.querySelector(".myText").value;
         if(x == "RendiErenVerbliJf"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}

console.log("main.js loaded");
 const buttonAnswer = document.querySelector(".button-answer");
  const buttonAnswer1 = document.querySelector(".button-answer1");
  const buttonAnswer2 = document.querySelector(".button-answer2");
  const buttonAnswer3 = document.querySelector(".button-answer3");
  const buttonAnswer4 = document.querySelector(".button-answer4");


 if(buttonAnswer){
     buttonAnswer.addEventListener("click", function(){
          const x = document.querySelector(".myText").value;    
         if(x == "chanoeka"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}
if(buttonAnswer1){
     buttonAnswer1.addEventListener("click", function(){
          const y = document.querySelector(".myText1").value;    
         if(y == "noordpool"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}
if(buttonAnswer2){
     buttonAnswer2.addEventListener("click", function(){
          const b = document.querySelector(".myText2").value;    
         if(b == "acht" || b == 8){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}
if(buttonAnswer3){
     buttonAnswer3.addEventListener("click", function(){
          const n = document.querySelector(".myText3").value;    
         if(n == "rudolf"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}
if(buttonAnswer4){
     buttonAnswer4.addEventListener("click", function(){
          const g = document.querySelector(".myText4").value;    
         if(g == "elfjes" || g == "elven"|| g == "elf"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}


console.log("main.js loaded");
 const buttonAntwoorden = document.querySelector(".answer");
 if(buttonAntwoorden){
     buttonAntwoorden.addEventListener("click", function(){
          const x = document.querySelector(".answerText").value;
         if(x == "de kerstman vliegt op zijn slee"){
             document.querySelector(".demo").innerHTML = "goed gedaan";
             link.innerHTML = "doorgaan";
        }
    })
}   

