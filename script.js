
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let name = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let h1 = document.getElementsByTagName('h1');
let img = document.getElementById('img');
let ensigns = [];
let score = 0;
let timer = 60;

let interval = setInterval(function () {
  timer--;
  timerEl.textContent = timer + " seconds until Borg invasion.";
  if(timer <= 0) {
    clearInterval(interval);
    loseSplash();
      
  } 
}, 1000);
  
function loseSplash() {
  let audioElement = document.querySelector('audio');
  audioElement.setAttribute('src', './assets/audio/borg.mp3');
  audioElement.play();
  $(mainEl).replaceWith("<img src='assets/images/borg.gif' style='margin:auto;'>");
  $(h1).replaceWith("<h1>The Borg Have Come... Do Not Resist. <br> One of Us... One of Us...</h1>")
  $('<a href="index.html">Launch Next Mission?</a>').appendTo("body");

};

let title = document.getElementById("title");
let a1 = document.getElementById("a1text");
let a2 = document.getElementById("a2text");
let a3 = document.getElementById("a3text");
let a4 = document.getElementById("a4text");

let i = 0;
title.innerHTML = questions[i].title;
a1.innerHTML = questions[i].choices[0];
a2.innerHTML = questions[i].choices[1];
a3.innerHTML = questions[i].choices[2];
a4.innerHTML = questions[i].choices[3];

document.querySelector(".answers").addEventListener("click", nextQuestion);
function nextQuestion(e) {
  console.log(e.target.innerText, i, score, timer)
  e.preventDefault()
  if (i < questions.length - 1 && e.target.innerText == questions[i].answer) {
    score = score + 10; 
    i++;
    title.innerHTML = questions[i].title;
    a1.innerHTML = questions[i].choices[0];
    a2.innerHTML = questions[i].choices[1];
    a3.innerHTML = questions[i].choices[2];
    a4.innerHTML = questions[i].choices[3];    
  } else if (e.target.innerText != questions[i].answer) {
    timer = timer - 10;
//
  } else {
    e.preventDefault();
    window.location.href = "results.html";
    score = score + 10 + timer;
    localStorage.setItem("score", score);
  }

}