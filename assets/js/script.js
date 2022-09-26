// Wait for the DOM to finish loading before running the game.

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');

// Get the button elements and add event listeners to them.

    for (const button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {
                const gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
 function runGame() {

    // Creates two random numbers between 1 and 25.

    const num1 = Math.floor(Math.random() * 25) + 1;
    const num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}