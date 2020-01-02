
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let player = document.querySelector("#player");
let lastName = document.querySelector("#lastName");
let firstName = document.querySelector("#firstName");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let score = 0;
let timer = 60;
let interval = setInterval(function () {
  timer--;
  timerEl.textContent = timer + " seconds until Borg invasion.";
  if(timer === 0) {
    clearInterval(interval);
    loseSplash();
      
  } 
}, 1000);

function loseSplash() {
  timerEl.textContent = " ";

  let imgEl = document.createElement("img");

  imgEl.setAttribute("src", "assets/images/borg.gif");
  mainEl.replaceWith(imgEl);
};

const questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which crew of the Enterprise is a Klingon?",
      choices: ["Riker", "Picard", "Warf", "Troi"],
      answer: "Warf"
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
  e.preventDefault()
  if (i < questions.length - 1) {
    i++;
    title.innerHTML = questions[i].title;
    a1.innerHTML = questions[i].choices[0];
    a2.innerHTML = questions[i].choices[1];
    a3.innerHTML = questions[i].choices[2];
    a4.innerHTML = questions[i].choices[3];    
  } else {
    clearInterval(interval);
    // window.location.href = "results.html"; 
  }
  console.log(i); 
}




    
    
    
