//dot notation
var start = document.getElementById('start');
var greeting = document.getElementById('greeting');
var questionEl = document.getElementById('question');
var submit = document.getElementById('submit');
var postScore = document.getElementById('post_score');
var timerEl = document.getElementById('timer');
var lineEl = document.getElementById('line');
var inputEls = document.getElementsByTagName('input');
console.log(inputEls);

var saveMenu = document.getElementById('save_menu');
var saveText = document.getElementById('save_text');

var aText = document.getElementById('a_text');
var bText = document.getElementById('b_text');
var cText = document.getElementById('c_text');
var dText = document.getElementById('d_text');
var inputA = document.getElementById('a');
var inputB = document.getElementById('b');
var inputC = document.getElementById('c');
var inputD = document.getElementById('d');
var list = document.getElementById('list');

var currentQuiz = 0;


var quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: 'scripting',
        b: 'js',
        c: 'script',
        d: 'javascript',
        correct: 'script',
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

function startQuiz(){
    greeting.classList.add('hide');
    line.classList.add('hide');

    start.classList.add("hide");
    list.classList.remove('hide')
    submit.classList.remove("hide");
    timerEl.classList.remove("hide");
    loadQuiz();
    setInterval(startTimer, 1000);
    
}

function loadQuiz(){
    deselectAnswers();
 var currentQuizData = quizData[currentQuiz];
        setValue();
        questionEl.innerHTML = currentQuizData.question;
        aText.innerHTML = currentQuizData.a;
        bText.innerHTML = currentQuizData.b;
        cText.innerHTML = currentQuizData.c;
        dText.innerHTML = currentQuizData.d;
 }

function setValue(){
    var currentQuizData = quizData[currentQuiz];

    for(i = 0; i < quizData.length; i++){
            inputA.setAttribute('value', currentQuizData.a);
            inputB.setAttribute('value', currentQuizData.b);
            inputC.setAttribute('value', currentQuizData.c);
            inputD.setAttribute('value', currentQuizData.d);
        }
}

var totalTime = '100'

function startTimer(){
    if(currentQuiz < 5){
        totalTime--;
        // console.log(totalTime);
        timerEl.innerText = totalTime;
    } else{
        list.classList.add('hide');
        return;
    }
}

function deselectAnswers(){
    inputA.checked = false;
    inputB.checked = false;
    inputC.checked = false;
    inputD.checked = false;
}

function getSelected(){
    latestAnswer = "";

    var selected = document.querySelector('input[type="radio"]:checked');
    
    if(!selected){
        alert('You must select an answer.');
    } else{
        stringAnswer = selected.value;
        latestAnswer = latestAnswer.concat(stringAnswer);
        console.log(latestAnswer);
        currentQuiz++;
        loadQuiz();
    }
}

var latestAnswer = "";


//Handles the submit click event
    submit.addEventListener('click', function(){
        if(currentQuiz < 4){
        objectRule = quizData[currentQuiz].correct;
        stringRule = JSON.stringify(objectRule);
        console.log(stringRule);
        getSelected();
    
        if('"' + latestAnswer + '"' == stringRule){
            console.log('correct');
            // alert('correct');
        } else{
            console.log('wrong');
            // alert('wrong')
            totalTime = totalTime - 10;
        }
            setValue();
            loadQuiz();

        } else{

            submit.classList.add("hide");
            postScore.classList.remove("hide");
            postScore.setAttribute
        }
     });

     postScore.addEventListener('click', function(){
        list.classList.add("hide");
        currentQuiz++;
        postScore.classList.add('hide');
        saveBtnEl.classList.remove('hide');
        saveMenu.classList.remove('hide');
        questionEl.innerText = '';
        saveText.innerText = 'What is your name?';
        saveName.classList.remove('hide');
     });


     var saveBtnEl = document.getElementById('save');
     var saveName = document.getElementById('name');
     var mostRecentScore = localStorage.getItem('mostRecentScore');

     const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
     var saveLink = document.getElementById('saveLink');
     
     saveName.addEventListener('input', function (){
     saveBtnEl.removeAttribute('disabled');
     })

     saveBtnEl.addEventListener('click', function(){


         console.log('clicked the save button!');
         
         const score = {
             score: totalTime,
             name: saveName.value
         };

         savedScores.push(score);
         savedScores.sort( (a,b) => b.score - a.score)
         savedScores.splice(5);

         localStorage.setItem('scores', JSON.stringify(savedScores));
        
         console.log(savedScores);
       
    });

    // username = saveName.value;
    // localStorage.setItem("scores", JSON.stringify(userData));

    // scoreStorage.push(username);
    // console.log(scoreStorage);
    // localStorage.setItem('Name', username);
    // localStorage.setItem('Score', totalTime);

 

   
    const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

     start.addEventListener('click', startQuiz);
    //This loads up the next question until it display the high-score page.

            
    
    
    // if(currentQuiz <= quizData.length){
    //     setValue();
    //     loadQuiz();
        
    // } else{
    //     alert('You finished!');
    //     questionEl.innerHTML = "doop"
    //     aText.innerHTML = "doop"
    //     bText.innerHTML = "doop"
    //     cText.innerHTML = "doop"
    //     dText.innerHTML = "doop"
    // }
    
    
    
    
    
    
    
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
    

        // }
        // localStorage.setItem("scores", JSON.stringify(testObject));