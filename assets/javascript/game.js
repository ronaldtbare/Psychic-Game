
// Global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var round = 1;

// create an array for alphabet

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// function generate random letter
function generateLetter() {
    var randomNum = Math.floor(Math.random() * 26);
    var computerChoice = alpha[randomNum];
    return computerChoice
}


// reset for next round
function reset(){
    guessesLeft = 9;
    document.getElementById("gl").innerHTML = guessesLeft;
    userChoice = "";
    document.getElementById("gsf").innerHTML = "";
}
  
    var computerChoice = generateLetter();
    // get user choice

    document.onkeyup = function (event) {

        keypress = event.key.toLowerCase();
        var userChoice = keypress;
        
        // create loop for 9 guesses

            if (guessesLeft >= 2) {
                //play the game

                document.getElementById("gsf").innerHTML = document.getElementById("gsf").innerHTML+userChoice;
                // alert("Computer chose " + computerChoice);

                // test if userChoice = computerChoice

                if (userChoice === computerChoice) {
                    wins = wins + 1;
                    alert("You win!");
                    document.getElementById("wins").innerHTML = wins; 
                    reset(); 
                    
                } else {
                    // update guesses left and guesses so far
                    guessesLeft = guessesLeft - 1;
                    document.getElementById("gl").innerHTML = guessesLeft;
                }

            }

            else {
                //nah
                losses = losses + 1;
                alert("You lose!");
                document.getElementById("losses").innerHTML = losses;
               reset();

            }

        
    }

   



















