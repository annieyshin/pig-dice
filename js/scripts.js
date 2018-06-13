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
  if (rollDice === 1) {
    this.tempscore = 0;
  } else {
    this.tempscore += rollDice
  }
}

Player.prototype.hold = function() {
  this.total += this.tempscore
  this.tempscore = 0;
}

Player.prototype.winner = function() {
  this.total >= 100;
  alert("You are the winner!!!");
}

$(document).ready(function(){

 $("#gameStartID").click(function(e){
   e.preventDefault();
   player1 = $("#playerOne").val();
   player2 = $("#playerTwo").val()
   $("#playerNamesID").hide();
   $("#gameBoardID").show();
 });
  // var player = new Player()



  // $("#buttonRoll").click(function(event){
  //   event.preventDefault();
  //   // var playerNameVAR = $("input#slayerNameID").val();
  //   $("#playerOneTotalID").
  //   $("#playerTwoTotalID").
  // });

});
