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
        console.log(`Correct ! Score: ${score}`);
        score++;
        backgroundImages.push(`url('images/background1.svg')`);
        document.body.style.backgroundImage = backgroundImages;
    }
    else {
        console.log(`Wrong ! Score: ${score}`);
        score--;
        backgroundImages.push(`url('images/background1.svg')`);
        document.body.style.backgroundImage = backgroundImages;
    }
    if (score < 0) {
        score = 0;
    }

}