    

// remove title page when quiz starts

function titleDisplay() {
    var quizTitleDisplay  = document.getElementById("quiz-title")
    quizTitleDisplay.style.display = "none"
}

   // timer interval

    var time = 60
    function setTimer() {
        setInterval(function() {
            var timer = document.getElementById("time-display")
            if (time > 0 && i < 5 ) {
            time = time - 1
            timer.textContent = "Time Remaining: " + time

            }else {
            endQuiz()
           }
        }, 1000)
    }

// set html section variables

var submitBtn = document.querySelector("#start-btn")
var questionSection = document.querySelector(".question-section")
var finalSection = document.querySelector(".final-section")


// set question variables

var questionOne = {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. strings ", "B. booleans", "C. alerts", "D. numbers"],
    answer: "C. alerts"
}
var questionTwo = {
    question: "String values must be enclosed within __________ when being associated with variables.",
    choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
    answer: "C. quotes"
}

var questionThree = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["A. javascript", "B. terminal/bash", "C. for loops", "D. console.log"],
    answer: "D. console.log"
}
var questionFour = {
    question: "The condition in an if / else statement is enclosed with",
    choices: ["A. quotes", "B. parenthesis", "C. curly brackets", "D. square brackets"],
    answer: "C. curly brackets",

}
var questionFive = {
    question: "Arrays in JavaScript can be used to store _________.",
    choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
    answer: "D. all of the above",
}

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive]
var i = 0


// start quiz function

var quizStart = function () {
    titleDisplay()
    setTimer()

    if (i > 4) {
        endQuiz()
        return;
    }
    var questionOneDiv = document.createElement("div")
    questionOneDiv.textContent = questionArray[i].question
    questionOneDiv.className = "question-div"
    questionSection.append(questionOneDiv)

    for (
        j = 0; j < questionArray[i].choices.length; j++) {
        var choicesDiv = document.createElement("button")
        choicesDiv.textContent = questionArray[i].choices[j]
        choicesDiv.className = "button-style"
        choicesDiv.addEventListener("click", answerValidation)
        questionSection.append(choicesDiv)
    
    }

}
// check aswer section
var answerValidation = function (event) {

    if (i > 4) return;

    if (event.target.textContent === questionArray[i].answer && i < 5) {
        alert("CORRECT!")

    }
    else {
        alert("Incorrect, time has been subracted by 5 seconds")
        time -=5
    }

    i++
    questionSection.innerHTML = ""
    quizStart()

}

// end quiz section
function endQuiz () {

    // remove questions when quiz is over
    var questionDisplay = document.getElementById("question-id")
    questionDisplay.style.display = "none"

    // remove display:none from CSS
    var displayFinalSection = document.getElementsByClassName("final-section")
    finalSection.classList.remove("final-section");

    var input = document.createElement("input")
    input.setAttribute('type', 'text')
    var enterInitials = document.getElementById("initials")
    enterInitials.append(input)
  }

submitBtn.addEventListener("click", quizStart)




