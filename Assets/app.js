//dot notation
var start = document.getElementById('start');
var submit = document.getElementById('submit');
var questionEl = document.getElementById('question');
var aText = document.getElementById('a_text');
var bText = document.getElementById('b_text');
var cText = document.getElementById('c_text');
var dText = document.getElementById('d_text');

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





var testObject = {
    name: 'Hudson',
    score: '89'
}

function takeQuiz(){
        console.log(quizData.length)
        start.classList.add("hide");
        submit.classList.remove("hide");
        questionEl.innerHTML = quizData[0].question;
        aText.innerHTML = quizData[0].a;
        bText.innerHTML = quizData[0].b;
        cText.innerHTML = quizData[0].c;
        dText.innerHTML = quizData[0].d;
    }

    $(function(){
        console.log($('input:checked').closest('.answer').find('.answer').html());
      })

localStorage.setItem("scores", JSON.stringify(testObject));

start.addEventListener('click', takeQuiz);




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

