
// let timerEl = document.querySelector(".timer");
// let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let player = document.querySelector("#player");
let lastName = document.querySelector("#lastName");
let firstName = document.querySelector("#firstName");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let score = 0;
// let timer = 60;


// function clock() {
//   let interval = setInterval(function () {
//     timer--;
//     timerEl.textContent = timer + " seconds until Borg invasion.";
  
//     if(timer === 0) {
//       clearInterval(interval);
//       loseSplash();
        
//     }
  
//   }, 1000);
// };

// function loseSplash() {
//   timerEl.textContent = " ";

//   let imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "assets/images/borg.gif");
//   mainEl.replaceWith(imgEl);
// };

// clock();


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

  
  // document.addEventListener('click', display);
  
  // function display () {
  //   for(i = 0; i < questions.length; i++) {
        // if (i = 0) {
        // title.replaceWith(questions[0].title);
        // a1.replaceWith(questions[0].choices[0]);
        // a2.replaceWith(questions[0].choices[1]);
        // a3.replaceWith(questions[0].choices[2]);
        // a4.replaceWith(questions[0].choices[3]);
        // 
      // } 
      // else if (i = 1) {
      //   title.replaceWith(questions[1].title);
      //   a1.replaceWith(questions[1].choices[0]);
      //   a2.replaceWith(questions[1].choices[1]);
      //   a3.replaceWith(questions[1].choices[2]);
      //   a4.replaceWith(questions[1].choices[3]);    
      //       
      // } else if (i = 2) {
        // title.replaceWith(questions[2].title);
        // a1.replaceWith(questions[2].choices[0]);
        // a2.replaceWith(questions[2].choices[1]);
        // a3.replaceWith(questions[2].choices[2]);
        // a4.replaceWith(questions[2].choices[3]); 
      //     
      // } else if (i = 3) {
      //   title.replaceWith(questions[3].title);
      //   a1.replaceWith(questions[3].choices[0]);
      //   a2.replaceWith(questions[3].choices[1]);
      //   a3.replaceWith(questions[3].choices[2]);
      //   a4.replaceWith(questions[3].choices[3]);
      //   
      // }
    //   }
    // };

    submit.addEventListener("click", function (e) {
        e.preventDefault();
        let highScores = [""];
        let user = {
          first: firstName.value.trim(),
          last: lastName.value.trim(),
          score: score
        };

        localStorage.setItem("user", user);
        console.log(user);

        function postScore() {
          let userScore = user.first + " " + user.last + ": " + score;
          for (let q = 0; q < highScores.length; q++) {
            let post = userScore;
            let li = document.createElement("li");
            li.textContent = post;
            scoreBoard.appendChild(li);
          }
        }
        
        postScore();

    });
    

    
    
    
