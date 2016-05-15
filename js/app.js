$(document).ready(function(){
  newGame();


/*display modal box*/

$(".what").click(function(){
  $(".overlay").fadeIn(1000);
});

/*hide box*/

$("a.close").click(function(){
  $(".overlay").fadeOut(1000);
});

/*new game*/
$("a.new").click(function(){
  newGame();
});

$("#guessButton").click(function(event) {
        event.preventDefault();
        guess();
    });
});


/*variables*/

var userGuess;
var feedBack;
var secretNumber;
var guessCount;
var guessList;

function newGame() {
  disableInput(false);
  secretNumber = getSecretNumber();

  
  userGuess = "";
  feedback = "Make your Guess!";
  guessCount = 0;
  guessList = [];
  updateDisplay ();
}

function guess() {
    var guess = $("#userGuess").val();
    if(!isValidGuess(guess)){
        userGuess = "";
        updateDisplay();
        return;
    }
    feedback = getFeedback(guess);
    guessCount++;
    guessList.push(guess);
    userGuess = "";
    updateDisplay();
}

function updateDisplay() {
    $("#feedback").text(feedback);
    $("#userGuess").val(userGuess);
    $("#count").text(guessCount);
    $("#guessList").empty();
    if(guessList.length > 0) {
        for(var i = 0; i < guessList.length; i++) {
            var listItem = "<li>" + guessList[i] + "</li>";
            $("#guessList").append(listItem);
        }
    }
    $("#userGuess").focus();
}
function getFeedback(guess) {
    
    if(guess == secretNumber) {
        disableInput(true);
        return "You guessed it!";
    }

    if(guess >= secretNumber - 5 && guess <= secretNumber + 5){
        return "You are hot!";
    }
  if(guess <= secretNumber - 30 || guess >= secretNumber + 30){
        return "You are cold!";
    }
 /* Intial Guess */
    if(guessList.length === 0){
        if (guess > secretNumber) {
            return "Your guess is too high";
        }
        else if (guess < secretNumber) {
            return "Your guess is too low";
        }
        return;
    }
    var previousGuess = guessList[guessList.length - 1];
    if((guess > secretNumber && guess > previousGuess) ||
        (guess < secretNumber && guess < previousGuess)) {
        return "You are getting colder";
    }

    /* Warmer*/
    if((guess > secretNumber && guess < previousGuess) ||
        (guess < secretNumber && guess > previousGuess)) {
        return "You are getting warmer";
    }
    
        return true; 
  }
    
function isValidGuess(guess) {    
    if(guess === undefined || guess === null || guess.trim().length === 0 ||
        !isInteger(guess) || guess < 1 || guess > 100) {
        alert("Please enter an integer between 1 and 100.");
        return false;
    }

    if($.inArray(guess, guessList) !== -1){
        alert("You have already guessed " + guess);
        return false;
    }

    return true;
}


function getSecretNumber() {
    
    return Math.floor((Math.random() * 100) + 1);
}

function disableInput(disabled) {
    $("#userGuess").prop("disabled", disabled);
    $("#guessButton").prop("disabled", disabled);
}

function isInteger(input) {
    var value = +input;
    if(isNaN(input)){
        return false;
    }
    if(input % 1 !== 0){
        return false;
    }
    return true;
}