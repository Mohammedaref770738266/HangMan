// // List of words for the game
// var words = ["hangman", "javascript", "programming", "computer", "openai"];

// // Select a random word from the list
// var randomIndex = Math.floor(Math.random() * words.length);
// var selectedWord = words[randomIndex];

// // Store the guessed word with underscores
// var guessedWord = "_".repeat(selectedWord.length);

// // Maximum number of allowed guesses
// var maxGuesses = 6;
// var remainingGuesses = maxGuesses;

// // Display the initial state of the word
// var wordContainer = document.getElementById("word-container");
// wordContainer.textContent = guessedWord;

// // Handle the guess button click event
// var guessButton = document.getElementById("guess-button");
// guessButton.addEventListener("click", function() {
//   var letterInput = document.getElementById("letter-input");
//   var letter = letterInput.value.toLowerCase();

//   if (!letter.match(/[a-z]/i)) {
//     alert("Please enter a valid letter.");
//     return;
//   }

//   if (selectedWord.includes(letter)) {
//     // Update the guessed word with the correctly guessed letter
//     for (var i = 0; i < selectedWord.length; i++) {
//       if (selectedWord[i] === letter) {
//         guessedWord = guessedWord.substr(0, i) + letter + guessedWord.substr(i + 1);
//       }
//     }
//     wordContainer.textContent = guessedWord;

//     if (!guessedWord.includes("_")) {
//       // All letters have been guessed correctly
//       alert("Congratulations! You won!");
//     }
//   } else {
//     remainingGuesses--;
//     if (remainingGuesses === 0) {
//       // No more remaining guesses
//       alert("Game over! The word was: " + selectedWord);
//     } else {
//       alert("Wrong guess! Remaining guesses: " + remainingGuesses);
//     }
//   }

//   letterInput.value = "";
// });

var words = ["mohammed","taha","shcool","bus","book","collage","car","door","laptop","shopping"];

var randomIndex = Math.floor(Math.random()*words.length);
var choosing_word = words[randomIndex];
console.log(choosing_word);

var word_contain =document.getElementById("word-contain");
word_contain.textContent = "_".repeat(choosing_word.length);

var maxtry = 6;
attemp =0;
var word = choosing_word.split("");
function checking() {
    var letter = document.getElementById("letter-input").value;
    var word_contains = word_contain.textContent.split("");        
                
    if (maxtry >0 && word_contains.includes("_")) {
        if (word.includes(letter)) {
            for(var i =0; i<word.length;i++)
            {
                if (letter == word[i]) {
                    word_contains[i]=letter;
                }
            }
            word_contain.textContent = word_contains.join("");
        }
        else
        {
            maxtry--;
            attemp ++;
            drawHangman(attemp);
            alert("its wrong gusse you still have only "+maxtry+" tries");
        }
        if (!word_contains.includes("_")) {
            alert("You Win!!");
        }        
    }
        else if (maxtry <= 0) {
            alert("You Lost!!!");
        }
        else alert("You Win!!");
    
}

function drawHangman(attempts) {
    var stages = [
      `
       +---+
           |
           |
           |
          ===`,
      `
       +---+
       O   |
           |
           |
          ===`,
      `
       +---+
       O   |
       |   |
           |
          ===`,
      `
       +---+
       O   |
      /|   |
           |
          ===`,
      `
       +---+
       O   |
      /|\\  |
           |
          ===`,
      `
       +---+
       O   |
      /|\\  |
      /    |
          ===`,
      `
       +---+
       O   |
      /|\\  |
      / \\  |
          ===`
    ];
    var hangman = document.getElementById("hangman_palce").textContent = stages[attempts];
  }






