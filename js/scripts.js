var player1="";
var player2="";

var rollDice = function() {
  return Math.floor(Math.random() * (6 - 1) + 1)
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.total = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.checkRoll = function() {
  if ( this.roll === 1) {
    this.tempscore = 0;
    $("#playerTurn").text("Next Player's Turn! You rolled a 1.")
  } else {
    this.tempscore += this.roll
  }
}

Player.prototype.hold = function() {
  this.total += this.tempscore
  this.tempscore = 0;
}

Player.prototype.winner = function() {
  if(this.total >= 100) {
  alert(this.playerName + " are the winner!!!")
  }
}

$(document).ready(function(){
 $("#gameStartID").click(function(e){
   e.preventDefault();
   player1 = new Player()
   player2 = new Player()
   $("#playerNamesID").hide();
   $("#gameBoardID").show();

   var player1Name = $("#playerOne").val();
   $("#player1Name").text(player1Name + "'s")
   var player2Name = $("#playerTwo").val()
   $("#player2Name").text(player2Name + "'s")

   player1.playerName = player1Name;
   player2.playerName = player2Name
 });

// Player One Roll and Hold Buttons
  $("#playerOneRollBTNID").click(function(){
    player1.roll = rollDice();
    $("#playerTurn").text("")
    $("#diceNumber span").text("")
    $("#diceNumber span").text(player1.roll)
    player1.checkRoll();
    $("#player1RoundScore").text(" " + player1.tempscore)
  });

  $("#playerOneHoldBTNID").click(function(){
    player1.hold();
    $("#player1Total").text(" " + player1.total)
    $("#player1RoundScore").text(" " + player1.tempscore)
    player1.winner();
    $("#playerTurn").text(player2.playerName + "'s Turn!")
  });
// Player Two Roll and Hold Buttons
  $("#playerTwoRollBTNID").click(function(){
    player2.roll = rollDice();
    $("#playerTurn").text("")
    $("#diceNumber span").text("")
    $("#diceNumber span").text(player2.roll)
    player2.checkRoll();
    $("#player2RoundScore").text(" " + player2.tempscore)
  });

  $("#playerTwoHoldBTNID").click(function(){
    player2.hold();
    $("#player2Total").text(" " + player2.total)
    $("#player2RoundScore").text(" " + player2.tempscore)
    player2.winner();
    $("#playerTurn").text(player1.playerName + "'s Turn!")
  });

});
