let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let name = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let ensigns = [];
let score = localStorage.getItem("score");
let highScore = JSON.parse(localStorage.getItem("name"));
let timer = 60;
let i = 0;
//^^^ get this out of the scope. this is the

submit.addEventListener("click", function(e) {
    e.preventDefault();
    ensigns[i] = name.value.trim();
    localStorage.setItem("name", JSON.stringify(ensigns));
    for (i = 0; i < ensigns.length; i++) {
      
    }
    li = document.createElement("li");
    scoreBoard.appendChild(li);
    let all = JSON.parse(localStorage.getItem("name"));
    li.innerHTML =  all[ensigns.length - 1] + " Score: " + score; 
    console.log(all)
  });
  

