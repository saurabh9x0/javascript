//create a number guessing game

let a = 34;
let b = Number(prompt("Guess the game number"));

while (b != a) {
    b = Number(prompt("Guess again"));
}

console.log("Wow! You guessed the right number");