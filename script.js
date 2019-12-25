
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let score = 0;
let timer = 60;


function clock() {
  let interval = setInterval(function () {
    timer--;
    timerEl.textContent = timer + " seconds until Borg invasion.";
  
    if(timer === 0) {
      clearInterval(interval);
      loseSplash();
        
    }
  
  }, 1000);
};

function loseSplash() {
  timerEl.textContent = " ";

  let imgEl = document.createElement("img");

  imgEl.setAttribute("src", "assets/images/borg.gif");
  mainEl.replaceWith(imgEl);
};

clock();

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

// answer = document.getElementsByName("answers");
// answer.addEventListener("click", nextQuestion() {
  
// });

// function nextQuestion () {

// }

// nextQuestion ();

  
  