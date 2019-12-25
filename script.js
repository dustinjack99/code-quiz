answer = localStorage.setItem('answer');
answer = document.getElementById('answers')

answer.addEventListener('click', function () {

})

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
  
  