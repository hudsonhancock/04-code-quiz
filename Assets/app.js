//dot notation
var start = document.getElementById('start');
var questionEl = document.getElementById('question');
var submit = document.getElementById('submit');
var aText = document.getElementById('a_text');
var bText = document.getElementById('b_text');
var cText = document.getElementById('c_text');
var dText = document.getElementById('d_text');
var inputA = document.getElementById('a');
var inputB = document.getElementById('b');
var inputC = document.getElementById('c');
var inputD = document.getElementById('d');

var currentQuiz = 0;

// quizData[0].question
// quizData[0].a



var quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: 'scripting',
        b: 'js',
        c: 'script',
        d: 'javascript',
        correct: "script",
    }, {
        question: "The external JavaScript file must contain the script tag.",
        a: 'False',
        b: 'True',
        c: 'Red',
        d: 'Blue',
        correct: 'False'
    }, {
        question: 'How do you call a function named "myFunction"?',
        a: 'myFunction()',
        b: 'call my Function()',
        c: 'call function myFunction()',
        d: '===>',
        
        correct: 'myFunction()'
    }, {
        question: 'What does HTML stand for?',
        
        a: 'Hyper Text Markup Language',
        b: 'How The Money Lives',
        c: 'Hope Terry Makes Lunch',
        c: 'Hairy Toes Mustard Lake',
        
        correct: 'Hyper Text Markup Language'
    }, {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i == 5 then',
        b: 'if i = 5',
        c: 'if i = 5 then',
        d: 'if (i == 5)',
        correct: 'if (i == 5)'
    }
]

function getAnswer(){
    var selected = document.querySelector('input[type="radio"]:checked');
    var selectedAnswer = selected.value;
    console.log(selectedAnswer);
}

// var testObject = {
    //     name: 'Hudson',
    //     score: '89'
    // }
    // localStorage.setItem("scores", JSON.stringify(testObject));

function setValue(){
    var currentQuizData = quizData[currentQuiz];

    for(i = 0; i <= quizData.length; i++){
            inputA.setAttribute('value', currentQuizData.a);
            inputB.setAttribute('value', currentQuizData.b);
            inputC.setAttribute('value', currentQuizData.c);
            inputD.setAttribute('value', currentQuizData.d);
        }
    }

function loadQuiz(){
    var currentQuizData = quizData[currentQuiz];
            setValue();
            start.classList.add("hide");
            submit.classList.remove("hide");
            questionEl.innerHTML = currentQuizData.question;
            aText.innerHTML = currentQuizData.a;
            bText.innerHTML = currentQuizData.b;
            cText.innerHTML = currentQuizData.c;
            dText.innerHTML = currentQuizData.d;
        }
        
        

//Handles the submit click event
        submit.addEventListener('click', () => {
            currentQuiz++;

            if(currentQuiz <= quizData.length){
                getAnswer();
                setValue();
                loadQuiz();
            } else{
               alert('You finished!');
        }

        }); 
        






                


start.addEventListener('click', loadQuiz);




// GIVEN I am taking a code quiz 
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

////Is this one or two functions?
// startTimer()
// showQuestion()
//-----------------------------------------------
// if(answer == false), then deduct 6 from time

//What is the user going to have to do..

//start button, radio button, high-score button, percede to the next question

//go through loop to change index number
//event listener is going to trigger timer, 

// correct and incorrect function for answer that effects time

//JSON.parse()