const num = document.getElementById('number');
const checkBtn = document.getElementById('check');
const errorMessage = document.getElementById('error');

const randomNumber = Math.floor(Math.random() * 10) + 1;
let counter = 0;


checkBtn.onclick = () => {
    if (randomNumber === +num.value) {
        errorMessage.style.display = 'none';
    addScore();
        return
    } else  if (randomNumber < +num.value) {
        errorMessage.textContent = 'Too high!';
        errorMessage.style.display = 'block';
    } else if (randomNumber > +num.value)  {
        errorMessage.textContent = 'Too low!';
        errorMessage.style.display = 'block';
    };
    counter++;
}

function addScore() {
    const score = localStorage.getItem('score');
    const user = {
            name: sessionStorage.getItem('username'),
            score: counter,
    };
    const table = [];
    table.push(user);
    if (score) {
        table.push(...JSON.parse(score));
    } 
        localStorage.setItem('score', JSON.stringify(table));
        window.location.href = '../score/score.html';
}
