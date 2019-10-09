// Variables
var targetScore; // Random number selected
var currentScore = 0; // Score will be added as player clicks on gems
var wins = 0; // Score will be added as player clicks on gems
var losses = 0; // Number of player losses
var crystalOne; // Crytal will be given a random value at the start of each game
var crystalTwo;
var crystalThree;
var crystalFour;

// At the beginning of the game...
function startGame() {
  resetGame();
  currentScore = 0;

  //Show target score(random number) and current score at 0
  $("#random-number").text(targetScore);
  $("#total-score").text(currentScore);

  // Assign random values to crystals
  $("#one").attr("data-crystalvalue", crystalOne);
  $("#two").attr("data-crystalvalue", crystalTwo);
  $("#three").attr("data-crystalvalue", crystalThree);
  $("#four").attr("data-crystalvalue", crystalFour);

  // Show total number of wins and losses
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
  $("#winOrLose").text("");

  // console.log(crystalOne, crystalTwo, crystalThree, crystalFour);
}

// WHen the player wins or losses, a new value is assigned to the crystals and the target score
function resetGame() {
  targetScore = Math.floor(Math.random() * 120) + 1;
  crystalOne = Math.floor(Math.random() * 12) + 1;
  crystalTwo = Math.floor(Math.random() * 12) + 1;
  crystalThree = Math.floor(Math.random() * 12) + 1;
  crystalFour = Math.floor(Math.random() * 12) + 1;
}

// As the player clicks on the crystal, add values of clicked crystals are added together
$(".crystals").on("click", function() {
  if (currentScore >= targetScore) {
    return;
  }
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  currentScore += crystalValue;
  //Show total value as current score in html
  $("#total-score").text(currentScore);

  if (currentScore === targetScore) {
    playerWins();
  } else if (currentScore > targetScore) {
    playerLoses();
  }
});

// If player wins...
function playerWins() {
  $("#button").prepend("YOU WIN!" + " <button>Play Again</button>");
  wins++;
  $("#wins").text("Wins: " + wins);
}

// If player loses...
function playerLoses() {
  $("#button").prepend("YOU LOSE" + " <button>Play Again</button>");
  losses++;
  $("#losses").text("Losses: " + losses);
}

startGame();
