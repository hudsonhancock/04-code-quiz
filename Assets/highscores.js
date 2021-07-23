const highScores = JSON.parse(localStorage.getItem('scores')) || [];

const hsListEl = document.getElementById('highScoresList');


// console.log(liEl);


function generateText(){
    var element;
    
    for(i = 0; i <= 5; i++){
        var liEl = document.createElement('li');
        var nameText = highScores[i].name
        var scoreText = highScores[i].score
        var text = nameText + ': ' + scoreText;
        console.log(text)
        liEl.innerHTML = text;
        hsListEl.appendChild(liEl);
    }
}


generateText()


