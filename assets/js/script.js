// Wait for the DOM to finish loading before running the game:

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');

// Get the button elements and add event listeners to them:

    for (const button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {
                const gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }
    runGame('addition');
});


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
 function runGame(gameType) {

    // Creates two random numbers between 1 and 25:

    const num1 = Math.floor(Math.random() * 25) + 1;
    const num2 = Math.floor(Math.random() * 25) + 1;

    // Check which one of the math games is running and call the relevant function:

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}