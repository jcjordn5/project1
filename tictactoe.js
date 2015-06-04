var game = {
 gameOn:false,
 start: function (){
   this.gameOn = true;
   while(this.gameOn === true){

   }
 },
 checkWinner: function () {

 },

 tally: function () {
   player1.score++;
   player2.score++;
 },
 player: player1,

 turn: function () {
   if (this.player === player1) {
     $(event.target).closest('div').append('<div class="crossBox">' + 'X' + '</div>');
     this.player = player2;
   }
   else {
     $(event.target).closest('div').append('<div class="knotBox">' + 'O' + '</div>');
     this.player = player1;
   }
 }

};
var player1 = {
score:0,

};
var player2 = {
  score:0,

};
$('#cell1').on('click', function () {game.turn()});
$('#cell2').on('click', function () {game.turn()});
$('#cell3').on('click', function () {game.turn()});
$('#cell4').on('click', function () {game.turn()});
$('#cell5').on('click', function () {game.turn()});
$('#cell6').on('click', function () {game.turn()});
$('#cell7').on('click', function () {game.turn()});
$('#cell8').on('click', function () {game.turn()});
$('#cell9').on('click', function () {game.turn()});
