// var clickButton = document.querySelector("#start-game")


var score = 0;
var index = 0;

const countdownEl = document.querySelector("#countdown");
var timerID;
var seconds = 100;


 




var questions = [
  {
    "Quiz": " In which country is the building known as Burj Khalifa located aka the tallest building in the world? " ,
    "choice1":  "A. UAE",  
    "choice2": "B. China ", 
    "choice3": "C. Israel" ,
    "choice4": "D. Saudi Arabia" ,
   

  },

  {
    "Quiz": "Who was the first person to step on the Moon?" ,
   "choice1":  "A. Neil Armstrong",  
   "choice2": "B. Charles Pete Conrad ", 
   "choice3": "C. Buz Aldrin" ,
   "choice4": "D. Alan Bean" ,
   
 
  },
  {
    "Quiz": "Who was the first president of United States? " ,
   "choice1":  "A. George Washington",  
   "choice2": "B. Thomas Jefferson", 
   "choice3": "C. John Adams" ,
   "choice4": "D. Abraham Lincoln" ,
   
   
  },
  {
    "Quiz": "Who is the founder of Tesla?" ,
   "choice1":  "A. Elon Musk",  
   "choice2": "B. Jeff Bezos", 
   "choice3": "C. Steve Jobs" ,
   "choice4": "D. Mark Zuckerberg" ,

 
    
  },
  {
    "Quiz": "Who invented the Computer? " ,
   "choice1":  "A.  Charles Babbage",  
   "choice2": "B. Alexander Graham Bell", 
   "choice3": "C. Johannes Gutenberg" ,
   "choice4": "D. Albert Einstien" ,
    
   
  }

]


   

var showQuestions = function() {

    var headerEl = document.querySelector("#header-question")
    headerEl.innerHTML = "";
    var choicesEl = document.createElement("h2")
    choicesEl.textContent = questions[index].Quiz;
    headerEl.appendChild(choicesEl);
    for (var i = 1; i < 5; i++) {
      var option = document.createElement("button");
      option.textContent = questions[index]["choice" + i];
      option.addEventListener("click", function(event) {
        if (event.target.textContent === questions[index].choice1) {
          alert("Correct Answer");
          index++
          score += 20;
        } else {
          alert("Wrong Answer");
          seconds -= 8
          index++
          
        }
        showQuestions();
      })
      headerEl.appendChild(option);
    }
  }

  var time = function() { 
    countdownEl.innerHTML = `Timer : ${seconds} seconds`;
    
    if (seconds <= 0 || score >= 100 || questions.length[index] ) {
        
        // clearInterval(timerID)
        gameOver()
    }
    else {
        seconds--;
    }
   
};

  var gameOver = function() {
    var playerName = window.prompt("Enter players name: ");
    var outcome = alert(playerName + "score is " + score);

  
  }

  var button1 = document.querySelector("#start-game");
  button1.addEventListener("click", function () {
    time()
    showQuestions();
    timerID = setInterval(time, 1000)
})



  