let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let nameBut = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let score = localStorage.getItem("score");
let list = JSON.parse(localStorage.getItem('allEnsigns'));
let timer = 60;

submit.addEventListener("click", function() {
    let name = nameBut.value;
    let ensigns = JSON.parse(localStorage.getItem("allEnsigns"));
    if(ensigns == null) ensigns = [];
    let user = {
        name: name,
        score: score
      };
    let li = document.createElement("li");
    localStorage.setItem("ensign", JSON.stringify(user));
    ensigns.push(user);
    localStorage.setItem("allEnsigns", JSON.stringify(ensigns));
    $(submit).replaceWith("<br><a id='engage' href='index.html'>Launch New Mission?</a>")
    scoreBoard.appendChild(li);
    li.textContent = "Ensign " + user.name + "'s score:   " + user.score;
    
  });

for (i =0; i < list.length; i++) {
  let li = document.createElement("li");
  scoreBoard.appendChild(li);
  li.textContent = "Ensign " + list[i].name + "'s score:   " + list[i].score;
}