
// define all const / var
const body = document.querySelector("body")
var questionOne = document.querySelector("#question-1")
var questionTwo = document.querySelector("#question-2")
var questionThree = document.querySelector("#question-3")
var questionFour = document.querySelector("#question-4")
var questionFive = document.querySelector("#question-5")
var finalSection = document.querySelector(".final-section")
var wrong = document.querySelectorAll("#wrong-answer")
var correct = document.querySelectorAll("#correct-answer")
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, finalSection]

    // add event listeners for wrong answer choices

   function wrongAnswerAlert () { 
        wrong.addEventListener("click", wrongChoice())
        function wrongChoice () {
        alert ("That answer was incorrect")
        }
    }


    // add event listener for correct answer choices

    function correctAnswerAlert () {
        correct.addEventListener("click", correctChoice())
        function correctChoice () {
        alert ("That answer was CORRECT!")
        }
    }

    // generate quiz 
    function generateQuiz (questionArray) {
        for ( i=0; i < questionArray.length; i++) {
        }
    }




