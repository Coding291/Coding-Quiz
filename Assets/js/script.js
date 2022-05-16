//Created a variable called score and set it equals to 0.
var score = 0;
//Created a variable index and set it equals to 0.
var index = 0;
//Created a constant called countown and give it a EL to make it a element and then assigned with a query selector and inside that we have an ID we assigned in HTML to grab that onto javascript.
const countdownEl = document.querySelector("#countdown");
//Created a variable called timerID to work with time interval method which will be later be mentioned in thre code.
var timerID;
//Created a variable called seconds and assign it a number in this instance 100 so the user would know the exact time.
var seconds = 60;
//Created a variable called questions and inside of that we have an array of objects and inside each objects we have a question and four choices.
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
//Here we created a function where would most of the quiz will be donw
var presentQuestions = function() {
   //Here we created header element and gave it a query selector that would take the assigned ID presented in HTML and grab that onto JavaScript
    var headerEl = document.querySelector("#header-question")
    //We then give it innerHTML so it returns the HTML content and set it equals to whatever there will be.
    headerEl.innerHTML = "";
    //We then created a variable called Choices and give it a Element(EL) and set it equals to createElement to create a new Element in HTML
    var choicesEl = document.createElement("h2")
    //We then add the element a textContent property and set it equals to questions index that we created above in the questions variable and we assign Quiz as our value.
    choicesEl.textContent = questions[index].Quiz;
    //We then added a appendChild method to a header element which will appends an element as the last child of an element.
    headerEl.appendChild(choicesEl);
    //Here we created a for loop to make sure 5 times since we have 5 questions and keep going to next until all 5 are done
    for (var i = 1; i < 5; i++) {
      // we then created a variable called option and using create element we created a button
      var option = document.createElement("button");
      //we then give the option variable a textContent property and assigned it to each choice of the question index until it reaches all 5.
      option.textContent = questions[index]["choice" + i];
      //we then add a EventListener method and give it two parameter "click" and function() and inside the function we declared an argument called event
      option.addEventListener("click", function(event) {
        //here we added if statements if that argument named event target the textContent and if it does and if it equals to right answer which in this case are all As
        if (event.target.textContent === questions[index].choice1) {
          //we created an alert pop up that would tell the user that it is the correct answer
          alert("Correct Answer");
          //here it would increase index every time and move on to the next one
          index++
          //here we have assigned score to  plus 20 so the score will increment by 20 each time the user answers correctly.
          score += 20;
          //here is the else meaning otherwise
        } else {
          // popup would appear saying its a wrong answer
          alert("Wrong Answer");
          //As a result it would deduct 8 seconds from the timer
          seconds -= 8
          //But the index keeps increasing 
          index++  
        }
        //Here we called out function that we created earlier and we wrote tons of code to make this work
        presentQuestions();
      })
      //Towards the end of this we appendchild the variable option so it make sure to appends it as the last child of an element
      headerEl.appendChild(option);
    }
  }
  //Here we created time function
  var time = function() { 
    //Here we grab the ID countdown from HTML and give it El for it become a element and then we assign it back to HTML using innerHTML and set it equals to seconds using jquery
    countdownEl.innerHTML = `Timer : ${seconds} seconds`;
    //Here we created if else statement to check when the second is is less than 0 OR score >= the most possible score OR if the question reaches its limit
    if (seconds <= 0  || questions.length[index] || [index]>=5) {
        // Run the gameover function which would end the game which we will talk about it next
        gameOver()
    }
    else {
        //Otherwise keep the timer going down
        seconds--;
    }
   
};
  //Created a new function 
  var gameOver = function() {
    //create a variable called playername and assigned it to a window prompt and so the prompt would appear once the game ends and it would ask for Players name
    var playerName = window.prompt("Enter players name: ");
    //created another variable so through alert we can tell the users name and his/her final score
    var outcome = alert(playerName + " score is " + score);

  
  }
  //We created a variable called Button1 and assigned it to a querySelector inside of that is an ID from HTML where basically the game starts
  var button1 = document.querySelector("#start-game");
  //We then created a EventListener to make sure once the button click the function works
  button1.addEventListener("click", function () {
    //inside of this function is our timer call this is where all the clicking show its magic
    time()
    //here we called the showQuestions function
    presentQuestions();
    //Here we set the varibale timerID and assign it to setInterval method that would increment or decrement the time by 1 seconds 1000 = 1 second, 2000 = 2 seconds and so on...
    timerID = setInterval(time, 1000)
})



  