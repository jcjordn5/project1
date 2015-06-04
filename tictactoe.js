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

};
var player1 = {
score:0,

};
var player2 = {
  score:0,

};
$('#cell1').on('click', function () {('#cell').append('#crossBox')});
$('#cell2').on('click', function () {('#cell').append('#crossBox')});
$('#cell3').on('click', function () {('#cell').append('#crossBox')});
$('#cell4').on('click', function () {('#cell').append('#crossBox')});
$('#cell5').on('click', function () {('#cell').append('#crossBox')});
$('#cell6').on('click', function () {('#cell').append('#crossBox')});
$('#cell7').on('click', function () {('#cell').append('#crossBox')});
$('#cell8').on('click', function () {('#cell').append('#crossBox')});
$('#cell9').on('click', function () {('#cell').append('#crossBox')});

$('#cell1').on('click', function () {('#cell').append('#knotBox')});
$('#cell2').on('click', function () {('#cell').append('#knotBox')});
$('#cell3').on('click', function () {('#cell').append('#knotBox')});
$('#cell4').on('click', function () {('#cell').append('#knotBox')});
$('#cell5').on('click', function () {('#cell').append('#knotBox')});
$('#cell6').on('click', function () {('#cell').append('#knotBox')});
$('#cell7').on('click', function () {('#cell').append('#knotBox')});
$('#cell8').on('click', function () {('#cell').append('#knotBox')});
$('#cell9').on('click', function () {('#cell').append('#knotBox')});
