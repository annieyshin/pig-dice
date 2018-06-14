var player1="";
var player2="";
var compVSplayer1="";
var computerPlayer="";

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

Player.prototype.AIPlay = function() {
  for (i = 0; i < 4; i++) {
    this.roll = rollDice();
    this.checkRoll();
    if (this.tempscore > 20) {
      console.log("Comp Turn: " + this.tempscore)
      this.hold();
      ;break
    }
  }
  computerPlayer.hold();
  computerPlayer.winner();
}

Player.prototype.checkRoll = function() {
  if ( this.roll === 1) {
    this.tempscore = 0;
    $("#playerTurn").text("Next Player's Turn! You rolled a 1.")
  } else {
    this.tempscore += this.roll
  }
}

Player.prototype.compCheckRoll = function() {
  if ( this.roll === 1) {
    computerPlayer.AIPlay();
    this.tempscore = 0;
    $("#compVSplayerTurn").text("Next Player's Turn! You rolled a 1.")
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
  alert(this.playerName + " is the winner!!!")
  }
}

// Start Screen One Player or Two Player Buttons
$(document).ready(function(){
 $("#onePlayerVSCompStartID").click(function(event) {
   event.preventDefault();
   $("#compVSplayerNamesID").show();
   $("#playerNamesID").hide();
   $("#twoPlayerOptionOpeningID").hide();
 });

 $("#playerVSplayerStartID").click(function(e) {
   e.preventDefault();
   $("#playerNamesID").show();
   $("#compVSplayerNamesID").hide();
   $("#twoPlayerOptionOpeningID").hide();
 });

 // Computer vs One Player Name Input Screen
  $("#compVSplayerNameStartID").click(function(event){
    event.preventDefault();
    compVSplayer1 = new Player()
    computerPlayer = new Player()
    $("#twoPlayerWrapperID").hide();
    $("#onePlayerVSCompStartID").hide();
    $("#compVSplayerNamesID").hide();
    $("#compVsgameBoardID").show();

    var compVSplayer1Name = $("#compVSplayerOneID").val();
    $("#compVSplayer1Name").text(compVSplayer1Name + "'s")
    compVSplayer1.playerName = compVSplayer1Name;
    var computerPlayerName = "Computer Player";
    computerPlayer.playerName = computerPlayerName;
    $("#computerPlayerName").text(computerPlayerName + "'s")

  });

// Two Players Name Input Screen
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

// Computer vs Player One Roll and Hold Buttons
  $("#compVSplayerOneRollBTNID").click(function(){
    compVSplayer1.roll = rollDice();
    $("#compVSplayerTurn").text("")
    $("#compVSdiceNumber span").text("")
    $("#compVSdiceNumber span").text(compVSplayer1.roll)
    compVSplayer1.compCheckRoll();
    $("#computerplayer2RoundScore").text(" " + computerPlayer.tempscore)
    $("#computerPlayer2Total").text(" " + computerPlayer.total)
    $("#compVSplayer1RoundScore").text(" " + compVSplayer1.tempscore)
  });

  $("#compVSplayerOneHoldBTNID").click(function(){
    compVSplayer1.hold();
    $("#compVSplayer1Total").text(" " + compVSplayer1.total)
    $("#compVSplayer1RoundScore").text(" " + compVSplayer1.tempscore)
    compVSplayer1.winner();
    $("#compVSplayerTurn").text(computerPlayer.playerName + "'s Turn!")
    computerPlayer.AIPlay();
    console.log(computerPlayer);
    $("#computerplayer2RoundScore").text(" " + computerPlayer.tempscore)
    $("#computerPlayer2Total").text(" " + computerPlayer.total)
    $("#compVSplayerTurn").text(compVSplayer1.playerName + "'s Turn!")
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
