var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.round(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer(){
    console.log('checkAnswer');
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct ! Score: ${score}`);
        if (score <= 6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }
        else {
            alert('Well done ! Your math garden is in full bloom ! End of Game, start again.')
            score = 0
            backgroundImages = []
            document.body.style.backgroundImage = backgroundImages;
        }
    }
    else {
        if (score > 0) {
            score--;
        }        
        alert(`Oops wrong ! Score: ${score}`);
        setTimeout(function (){ 
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 500);
        console.log(`Wrong ! Score: ${score}`);
    }
    
}