"use strict";

var user = prompt("Hi! What is your name?");
//console.log("Welcome to my About Me " + user + "!");
alert("Welcome " + user + "! Let's play a guessing game!")

// function for asking the user yes or no questions
function game (question, right, abr) {
    var answer = prompt(question).toLowerCase(); 
    if(answer == right || answer == abr) {
        // console.log("Correct! You nailed it!");
        alert("Correct! You nailed it!");
    } else {
        // console.log("Sorry... try again!");
        alert("Sorry... try again!");
    }
}

alert("Answers accepted are y/n, or yes/no");
game("Is my zodiac sign Taurus?", "yes", "y");
game("Do I have 3 cats?", "no", "n");
game("Is my degree in Graphic Design?","no","n");
game("Am I older than 21?", "yes","y");
game("Is my dream job working for Disney?", "yes","y");
alert("Thank you for playing " + user + "!")