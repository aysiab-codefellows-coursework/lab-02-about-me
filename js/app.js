"use strict";

var user = prompt("Hi! What is your name?");
//console.log("Welcome to my About Me " + user + "!");
alert("Welcome " + user + "! Let's play a guessing game!")

// keeps track of total correct guesses
var total = 0;

// function for asking the user yes or no questions
function game (question, right, abr) {
    var answer = prompt(question).toLowerCase(); 
    if(answer == right || answer == abr) {
        // console.log("Correct! You nailed it!");
        alert("Correct! You nailed it!");
        total = total + 1; 
    } else {
        // console.log("Sorry... try again!");
        alert("Sorry... try again!");
    }
}

alert("Answers accepted for these questions are y/n, or yes/no");
game("Is my zodiac sign Taurus?", "yes", "y");
game("Do I have 3 cats?", "no", "n");
game("Is my degree in Graphic Design?","no","n");
game("Am I older than 21?", "yes","y");
game("Is my dream job working for Disney?", "yes","y");



alert("For the next question, you will get 4 opportunities to guess a number: 1-100");
// initializes a variable containing a random number from 1-100
var randNum = Math.floor(Math.random() * 101);

// loop to track 4 guesses of a random number 
for(var i = 1; i <= 4; i++) {
    var guess = prompt("Guess " + i + ": " );
    if (guess == randNum) {
        alert("You guessed the right number!");
        //console.log("You guessed the right number!");
        total = total + 1; 
        break;
    } else if (guess > randNum) {
        alert("Too high!");
        //console.log("That number is too high!");
    } else {
        alert("Too low!");
        //console.log("That number is too low!");
    }
}
alert("The correct number was " + randNum);


// guessing my favorite characters 
// array holding all my favorite characters
var faveChars = ["Hisoka","Sokka","Killua","Okuyasu","Kakyion","Terry","Rick","Korra","Linda","Happy"];
var char;
var count = 0;

while(count < 6) {
    var guess = prompt("Guess one of my favorite animated TV show characters:").toLowerCase();
    for(var j = 0; j < faveChars.length; j++) {
        if(guess === faveChars[j].toLowerCase()) {
            char = guess;
            break;
        }
    }
    if(char === guess) {
        alert(guess + " is one of my favorite characters!");
        //console.log(guess + "is one of my fave characters!");
        total = total + 1; 
        break;
    } else {
        alert("Sorry, that's not right :(");
        //console.log("That's not quite right!");
    }
    count++;
}
alert("My favorite characters are: " + faveChars);
alert("You got " + total + " out of 7 correct!");
//console.log("You got "+ total + " out of 7 correct!");

alert("Thank you for playing " + user + "!");