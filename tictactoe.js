var game = {
 gameOn:false,
 start: function (){
   this.gameOn = true;
   while(this.gameOn === true){

   }
 },
 $cross:("<div class='crossBox'>" + "X" + "</div>"),
 $knot:("<div class='knotBox'>" + "O" + "</div>"),
 cells: [[$("#cell1"), $("#cell4"), $("#cell7")],
          [$("#cell2"), $("#cell5"), $("#cell8")],
          [$("#cell3"), $("#cell6"), $("#cell9")]],



 //this method alternates turns by switching the player property and event listener everytime a grid box is appended
  turn: function () {
    if (this.player === player1) {
      $(event.target).closest('div').append('<div class="crossBox">' + 'X' + '</div>');
      this.checkWinner();
      this.player = player2;
    }
    else {
      $(event.target).closest('div').append('<div class="knotBox">' + 'O' + '</div>');
      this.checkWinner();
      this.player = player1;
    }
  },
 checkWinner: function () {
   if ((this.cells[0][0].text() === "X" && this.cells[0][1].text() === "X" && this.cells[0][2].text() ==="X") ||
      (this.cells[1][0].text() === "X" && this.cells[1][1].text() === "X" && this.cells[1][2].text() ==="X") ||
      (this.cells[2][0].text() === "X" && this.cells[2][1].text() === "X" && this.cells[2][2].text() ==="X") ||
      (this.cells[0][0].text() === "X" && this.cells[1][0].text() === "X" && this.cells[2][0].text() ==="X") ||
      (this.cells[0][1].text() === "X" && this.cells[1][1].text() === "X" && this.cells[2][1].text() ==="X") ||
      (this.cells[0][2].text() === "X" && this.cells[1][2].text() === "X" && this.cells[2][2].text() ==="X") ||
      (this.cells[0][0].text() === "X" && this.cells[1][1].text() === "X" && this.cells[2][2].text() ==="X") ||
      (this.cells[0][2].text() === "X" && this.cells[1][1].text() === "X" && this.cells[2][0].text() ==="X"))
      {
$("#board").append("<h2>PLAYER2 WINS!!!</h2>");
      }
    else if
    ((this.cells[0][0].text() === "O" && this.cells[0][1].text() === "O" && this.cells[0][2].text() ==="O") ||
       (this.cells[1][0].text() === "O" && this.cells[1][1].text() === "O" && this.cells[1][2].text() ==="O") ||
       (this.cells[2][0].text() === "O" && this.cells[2][1].text() === "O" && this.cells[2][2].text() ==="O") ||
       (this.cells[0][0].text() === "O" && this.cells[1][0].text() === "O" && this.cells[2][0].text() ==="O") ||
       (this.cells[0][1].text() === "O" && this.cells[1][1].text() === "O" && this.cells[2][1].text() ==="O") ||
       (this.cells[0][2].text() === "O" && this.cells[1][2].text() === "O" && this.cells[2][2].text() ==="O") ||
       (this.cells[0][0].text() === "O" && this.cells[1][1].text() === "O" && this.cells[2][2].text() ==="O") ||
       (this.cells[0][2].text() === "O" && this.cells[1][1].text() === "O" && this.cells[2][0].text() ==="O"))
       {
    $("#board").append("<h2>PLAYER1 WINS!!!</h2>");
         }
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
$('#cell1').on('click', function () {game.turn()});
$('#cell2').on('click', function () {game.turn()});
$('#cell3').on('click', function () {game.turn()});
$('#cell4').on('click', function () {game.turn()});
$('#cell5').on('click', function () {game.turn()});
$('#cell6').on('click', function () {game.turn()});
$('#cell7').on('click', function () {game.turn()});
$('#cell8').on('click', function () {game.turn()});
$('#cell9').on('click', function () {game.turn()});
