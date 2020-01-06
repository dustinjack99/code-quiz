let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let nameBut = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let score = localStorage.getItem("score");
let timer = 60;

submit.addEventListener("click", function(e) {
    e.preventDefault();
    let name = nameBut.value;
    let user = name + "'s score: " + score;
    let li = document.createElement("li");
    li.textContent = user;
    scoreBoard.appendChild(li);
    
      
  
      
    $(submit).replaceWith("<button><a href='index.html'>Launch New Mission?</a></button>")
    console.log(user)
    
  });

     
    

  





