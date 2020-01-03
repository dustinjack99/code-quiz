
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let name = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
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
  timerEl.textContent = " ";
  let audioElement = document.querySelector('audio');
  audioElement.setAttribute('src', './assets/audio/borg.mp3');
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", "assets/images/borg.gif");
  mainEl.replaceWith(imgEl);
  audioElement.play();

};

const questions = [
    {
      title: "How many seasons did Star Trek: The Next Generation run?",
      choices: ["Three", "Four", "Five", "Six"],
      answer: "Six"
    },
    {
      title: "Who was the creator of Star Trek: The Next Generation?",
      choices: ["George Lucas", "Gene Roddenberry", "Leonard Nimoy", "Steven Spielberg"],
      answer: "Gene Roddenberry"
    },
    {
      title: "Which crew-member of the Enterprise is a Klingon?",
      choices: ["Willam Riker", "Jean-Luc Picard", "Lieutenant Warf", "Dianna Troi"],
      answer: "Lieutenant Warf"
    },
    {
      title: "In what episode did the crew of the Enterprise lose their first comrade?",
      choices: ["The Color of Evil", "A Spock Out of Time", "Something Wicked", "Fall"],
      answer: "The Color of Evil"
    },
    ///etc.
  ];

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

  } else {
    e.preventDefault();
    window.location.href = "results.html";
    score = score + 10 + timer;
    localStorage.setItem("score", score);
  }

}