
var submitBtn = document.querySelector("#start-btn")
var questionSection = document.querySelector(".question-section")
var finalSection = document.querySelector(".final-section")


// set question variables
var questionOne = {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. strings " , "B. booleans" , "C. alerts" , "D. numbers"],
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
    question:"The condition in an if / else statement is enclosed with",
    choices: ["A. quotes", "B. parenthesis", "C. curly brackets", "D. square brackets"],
    answer: "C. curly brackets",
    
}
var questionFive = {
    question: "Arrays in JavaScript can be used to store _________.",
    choices:["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
    answer: "D. all of the above",
}

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive]
var i = 0

// start quiz function

var quizStart = function () {

    var questionOneDiv = document.createElement("div")
    questionOneDiv.textContent = questionArray[i].question
    questionSection.append(questionOneDiv)

        for ( 
            j=0; j < questionArray[i].choices.length;  j++) {
            var choicesDiv = document.createElement("button")
            choicesDiv.textContent = questionArray[i].choices[j]
            choicesDiv.addEventListener("click" , answerValidation)
            questionSection.append(choicesDiv)
        }   
}
    
var answerValidation = function (event) { 
    if (event.target.textContent === questionArray[i].answer) {
        alert("CORRECT!")

    }else{
        alert("Incorrect, time has been subracted by 10 seconds")
    }
    
     if  (i===5) {
         break;
     }else{
    i++
    questionSection.innerHTML = ""
     quizStart ()   
     }     
};

// end quiz section

var endQuiz = function () {

    var finalSection = document.querySelector(".final-section")
    quizCompleteDiv = document.createElement("div")
    quizCompleteDiv.textContent = "Quiz Complete!"
    finalSection.append(quizCompleteDiv)
    scoreDiv = document.createElement("div")
    scoreDiv.textContent = "Your final score is:"
    finalSection.append(scoreDiv)
    initialsDiv = document.createElement("div")
    initialsDiv.textContent = "Enter your initials"
    finalSection.append(initialsDiv)
    submitBtnDiv = document.createElement("button")
    finalSection.append(submitBtnDiv)

    endQuiz ()
}

submitBtn.addEventListener("click" , quizStart)


