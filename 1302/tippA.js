
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})

//Game
window.addEventListener('load', init);

let score= 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#Message-type');
const seconds = document.querySelector('#seconds');

const words = [
    'а',
    'б',
    'в',
    'г',
    'д',
    'е',
    'ё',
    'ж',
    'з',
    'и',
    'й',
    'к',
    'л',
    'м',
    'о',
    'п',
    'р',
    'с',
    'т',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'ш',
    'щ',
    'ъ',
    'ы',
    'ь',
    'э',
    'ю',
    'я',

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


