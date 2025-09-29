// Color switching game interactivity
const body = document.querySelector('body');
const colorInput = document.getElementById('color-picker');
const colorDiv = document.querySelector('.color-div');
const hiddenText = document.querySelector('.color-div p');
const resetBtn = document.querySelector('.color-div button');
const playBtn = document.getElementById('play-game');

function playGame() {
    colorDiv.style.display = 'block';
    playBtn.style.display = 'none';
}

function changeColor() {
    const selectedColor = colorInput.value;
    body.style.background = selectedColor;
    hiddenText.style.display = 'block';
    resetBtn.style.display = 'block';
    colorInput.style.display = 'none';
}

function resetColor() {
    body.style.background = 'light-dark(#fff, #444)';
    colorInput.style.display = 'block';
    playBtn.style.display = 'block';

    hiddenText.style.display = 'none';
    resetBtn.style.display = 'none';
    colorDiv.style.display = 'none';
}