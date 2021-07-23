const hsListEl = document.getElementById('highScoresList');
var goHomeBtn = document.getElementById('go_home');


// console.log(liEl);

const highScores = JSON.parse(localStorage.getItem('scores')) || [];

function generateText(){

    for(i = 0; i <= 5; i++) {
        var liEl = document.createElement('li');
        var nameText = highScores[i].name;
        var scoreText = highScores[i].score;
        var text = nameText + ': ' + scoreText;
        liEl.innerHTML = text;
        hsListEl.appendChild(liEl)
    }
}

generateText()


