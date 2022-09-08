//declare the variables needed to access all relevant elements from the html

const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('next-btn');
const resetButton = document.getElementById('reset-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersButtonsElement = document.getElementById('answer-buttons');
const startInstructionsElement = document.getElementById('startInstructions');
const spanTimer = document.getElementById('span-timer');

let timerId;

function startTimer(){

    timerId = setInterval(function(){
  
      // deduct the time by 1
      const timeRemaining = Number(spanTimer.textContent) - 1;
      spanTimer.textContent = timeRemaining;
      
      if(timeRemaining <= 0){
        clearInterval(timerId);
      }
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(timerId);
  }


let shuffledQuestions, currentQuestionIndex
//Event listener on start button click
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})



// hide start button , make question div visable, and hide start page intro blurb
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    startTimer() 
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    startInstructionsElement.classList.add('hide')
    setNextQuestion()
}


function endGame() {
    sectionEndGame.classList.remove('hide');
    questionContainerElement.add('hide');
    sectionTimer.classList.add('hide');
  }


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]) 
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswers)
        answersButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild(answersButtonsElement.firstChild)
    }
}

function selectAnswers(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        endGame()
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
      
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  






  
// Array with MC question list
const questions = [
    {
        question: 'Which of the following is correct about JavaScript?',
        answers: [
            {text: 'JavaScript is an Object-Based language', correct: false},
            {text: 'JavaScript is Assembly-language', correct: false},
            {text: 'JavaScript is an Object-Oriented language', correct: true},
            {text: 'JavaScript is a High-level language', correct: false}]
    },{
        question: 'Which of the following is not javascript data types?',
        answers: [
            {text: 'Null type', correct: false},
            {text: 'Undefined type', correct: false},
            {text: 'Number type', correct: false},
            {text: 'All of the mentioned', correct: true}]
    }, {
        question: 'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
        answers: [
            {text: 'Position', correct: false},
            {text: 'Window', correct: true},
            {text: 'Standard', correct: false},
            {text: 'Location', correct: false}]
    }, {
        question: 'The condition in an if/else statement is enclosed within ______.',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'square brackets', correct: false},
            {text: 'parentheses', correct: true}]

    }, {
        question: 'Which of the following can be used to call  JavaScript Code Snippet?',
        answers: [
            {text: 'Function/Method', correct: true},
            {text: 'Preprocessor', correct: false},
            {text: 'Triggering Event', correct: false},
            {text: 'RMI', correct: false}]

    }, {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        answers: [
            {text: 'It is an ordered list of values', correct: true},
            {text: 'It is an ordered list of objects', correct: false},
            {text: 'It is an ordered list of string', correct: false},
            {text: 'It is an ordered list of functions', correct: false}]
    }, {
        question: 'How do you write a "logical or" in Javascript code?',
        answers: [
            {text: '//', correct: false},
            {text: '$$', correct: false},
            {text: '%', correct: false},
            {text: '||', correct: true}]
    }
]// i