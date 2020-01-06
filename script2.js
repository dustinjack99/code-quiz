let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".questions");
let scoreBoard = document.querySelector("#scoreboard");
let nameBut = document.querySelector("#name");
let submit = document.querySelector("#submit");
let alertDiv = document.querySelector("#alertDiv");
let playerPost = document.querySelector("#player");
let ensigns = [];
ensigns.push(JSON.parse(localStorage.getItem('ensigns')));
localStorage.setItem('ensigns', JSON.stringify(ensigns));
let score = localStorage.getItem("score");
let timer = 60;

function SaveDataToLocalStorage(data)
{
    var ensigns = [];
   
    ensigns = JSON.parse(localStorage.getItem('ensigns'));
    
    ensigns.push(data);

    localStorage.setItem('ensigns', JSON.stringify(ensigns));
}

submit.addEventListener("click", function(e) {
    e.preventDefault();
    let name = nameBut.value;
    let user = {
      name: name,
      score: score
      };
      SaveDataToLocalStorage(user);

    $(submit).replaceWith("<button><a href='index.html'>Launch New Mission?</a></button>")
    console.log(name)
    console.log(user)
    
    
  });
  

  $(scoreBoard).append("<li>test</li>");





