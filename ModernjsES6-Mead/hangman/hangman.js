const Hangman = function (word, guesses){
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.guessedLetters = ["c", "e", "y"]
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""
   
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " "){
        puzzle += letter
      } else {
        puzzle += "*"
      }     
    })
    return puzzle 
}
//console.log(getPuzzle("cat"))

const game1 = new Hangman("cat", 2)
console.log(game1.getPuzzle())

const game2 = new Hangman("New Jersey", 4)
console.log(game2.getPuzzle())
