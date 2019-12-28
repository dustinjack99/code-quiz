
// let timerEl = document.querySelector(".timer");
// let mainEl = document.querySelector(".questions");
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

  title = document.getElementById("title");
  a1 = document.getElementById("a1text");
  a2 = document.getElementById("a2text");
  a3 = document.getElementById("a3text");
  a4 = document.getElementById("a4text");

  
  document.addEventListener('click', display);
  i = 0;
  function display () {

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

    };

    let lastName = document.querySelector("#lastName");
    let firstName = document.querySelector("#firstName");
    let submit = document.querySelector("#submit");
    let alertDiv = document.querySelector("#alertDiv");
    let playerPost = document.querySelector("#player");

    function errorMessage (type, message) {
        alertDiv.textContent = message;
        alertDiv.setAttribute("class", type);
    }
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        let user = {
          first: firstName.value.trim(),
          last: lastName.value.trim(),
          score: score
        };
        
        if (user.lastName === "") {
          errorMessage("error", "You must submit a name for your score.");  
        } else if (user.firstName === "") {
          errorMessage("error", "You must submit a name for your score.");
        } else {
          errorMessage("Score posted", "Thank you for playing!");
        
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));

            let lastUser = JSON.parse(localStorage.getItem("user"));
                console.log("lastUser", lastUser);
                playerPost.textContent = lastUser.firstName + lastUser.lastName + score;
        }

    });
    
    let scoreBoard = document.querySelector("#scoreboard");
    let player = document.querySelector("#player");

    function postScore() {
      // Clear todoList element and update todoCountSpan
      let player = [""];
      player.innerHTML = "";
      scoreBoard.textContent = player.length;
      // Render a new li for each todo
      for (let i = 0; i < player.length; i++) {
        let post = player[i];
        let li = document.createElement("li");
        li.textContent = post;
        scoreBoard.appendChild(li);
      }
    }
    
    
    
    postScore();
