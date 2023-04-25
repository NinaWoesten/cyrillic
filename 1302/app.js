const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})

//Game
window.addEventListener('load', init);
let time = 15;
let score= 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#Message-type');
const seconds = document.querySelector('#seconds');

const words = [
    'восстание',
    'жираф',
    'заговаривать',
    'отвертеть',
    'буржуйка',
    'ванная',
    'довезти',
    'источниковедение',
    'молодежь',
    'нате',
    'обмякнуть',
    'подворье',
    'практик',
    'теплоемкость',
    'бармен',
    'охранник',
    'промоутер',
    'радиофизик',
    'синица',
    'скорпион',
    'кайра',
    'галлюцигения',
    'воронеж',
    'киншаса',
    'пушкино',
    'чандигарх',
    'кирибати',
    'непал',
    'афганистан',
    'зимбабве'

];

function init (){
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);

    setInterval(checkStatus, 50);
}
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = 15;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    scoreDisplay.innerHTML = score;
}
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}
function showWord(words) {
    const randIndex = Math.floor(Math.random()* words.length);
    currentWord.innerHTML = words[randIndex];
}
function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
       message.innerHTML = ("Game Over");
       score = 0;
    }
}