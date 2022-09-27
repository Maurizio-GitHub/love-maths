// Waits for the DOM to finish loading before running the game:

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByTagName('button');

    // Gets the button elements and adds event listeners to them:

    for (const button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
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

    // Checks which one of the math games is running and call the relevant function:

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the user's answer agaist the calculated answer,
 * which is the first element in the returned calculateCorrectAnswer() array.
 */
 function checkAnswer() {

    // Parses the acquired user's answer as a number before comparison:

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    // Provides feedback to users about their answer:

    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Awwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    // Keeps running a math game of the same type, which is given by the second element of the returned calculateCorrectAnswer() array:

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and the operator directly from the DOM
 * and returns the correct answer.
 */
function calculateCorrectAnswer() {

    // Parses the acquired values as numbers:

    const operand1 = parseInt(document.getElementById('operand1').innerText);
    const operand2 = parseInt(document.getElementById('operand2').innerText);
    const operator = document.getElementById('operator').innerText;

    // Determins which math operation is running by the acquired operator and keeps running with the same (returned) operator until users choose otherwise:

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1.
 */
 function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1.
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';

}