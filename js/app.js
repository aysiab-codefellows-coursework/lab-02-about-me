"use strict";

var user = prompt("Hi! What is your name?");
alert("Welcome " + user + "! Let's play a guessing game!")

// keeps track of total correct guesses
var total = 0;

// function for asking the user yes or no questions
function game (question, right, abr) {
    var answer = prompt(question).toLowerCase(); 
    if(answer == right || answer == abr) {
        alert("Correct! You nailed it!");
        total = total + 1; 
    } else {
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
function guessNumber(random, max) {
    for(var i = 1; i <= max; i++) {
        var guess = prompt("Guess " + i + ": " );
        if (guess == random) {
            alert("You guessed the right number!");
            total = total + 1; 
            break;
        } else if (guess > random) {
            alert("Too high!");
        } else {
            alert("Too low!");
        }
    }
    alert("The correct number was " + random);
}

guessNumber(randNum, 4);

// guessing my favorite characters 
// array holding all my favorite characters

function faveTvChars(chars, max){
    var char;
    var count = 0;
    
    while(count < max) {
        var guess = prompt("Guess one of my favorite animated TV show characters:").toLowerCase();
        for(var j = 0; j < chars.length; j++) {
            if(guess === chars[j].toLowerCase()) {
                char = guess;
                break;
            }
        }
        if(char === guess) {
            alert(guess + " is one of my favorite characters!");
            total = total + 1; 
            break;
        } else {
            alert("Sorry, that's not right :(");
        }
        count++;
    }
    alert("My favorite characters are: " + chars);
    alert("You got " + total + " out of 7 correct!");
}
var faveChars = ["Hisoka","Sokka","Killua","Okuyasu","Kakyion","Terry","Rick","Korra","Linda","Happy"];

faveTvChars(faveChars, 6);

alert("You got " + total + " out of 7 correct!");

alert("Thank you for playing " + user + "!");