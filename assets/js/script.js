// Wait for the DOM to finish loading before running the game.

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');

// Get the button elements and add event listeners to them.

    for (const button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                const gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

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