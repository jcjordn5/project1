var game = {
 gameOn:true,
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
//there are 8 way to win the game the conditional statements look for these for both X and O
   if ((this.cells[0][0].text() === this.cells[0][1].text() && this.cells[0][0].text() === this.cells[0][2].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[1][0].text() === this.cells[1][1].text() && this.cells[1][0].text() === this.cells[1][2].text() && (this.cells[1][0].text() === "X")) ||
   (this.cells[2][0].text() === this.cells[2][1].text() && this.cells[2][0].text() === this.cells[2][2].text() && (this.cells[2][0].text() === "X")) ||
   (this.cells[0][0].text() === this.cells[1][0].text() && this.cells[0][0].text() === this.cells[2][0].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[0][1].text() === this.cells[1][1].text() && this.cells[0][1].text() === this.cells[2][1].text() && (this.cells[0][1].text() === "X")) ||
   (this.cells[0][2].text() === this.cells[1][2].text() && this.cells[0][2].text() === this.cells[2][2].text() && (this.cells[0][2].text() === "X")) ||
   (this.cells[0][0].text() === this.cells[1][1].text() && this.cells[0][0].text() === this.cells[2][2].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[0][2].text() === this.cells[1][1].text() && this.cells[0][2].text() === this.cells[2][0].text() && (this.cells[0][2].text() === "X"))){
$("#board").append("<h2>" +  $('#player2').val() +" WINS!!!</h2>");
this.gameOn = false;
    }
    else if
       ((this.cells[0][0].text() === this.cells[0][1].text() && this.cells[0][0].text() === this.cells[0][2].text() && (this.cells[0][0].text() === "O")) ||
      (this.cells[1][0].text() === this.cells[1][1].text() && this.cells[1][0].text() === this.cells[1][2].text() && (this.cells[1][0].text() === "O")) ||
      (this.cells[2][0].text() === this.cells[2][1].text() && this.cells[2][0].text() === this.cells[2][2].text() && (this.cells[2][0].text() === "O")) ||
      (this.cells[0][0].text() === this.cells[1][0].text() && this.cells[0][0].text() === this.cells[2][0].text() && (this.cells[0][0].text() === "O")) ||
      (this.cells[0][1].text() === this.cells[1][1].text() && this.cells[0][1].text() === this.cells[2][1].text() && (this.cells[0][1].text() === "O")) ||
      (this.cells[0][2].text() === this.cells[1][2].text() && this.cells[0][2].text() === this.cells[2][2].text() && (this.cells[0][2].text() === "O")) ||
      (this.cells[0][0].text() === this.cells[1][1].text() && this.cells[0][0].text() === this.cells[2][2].text() && (this.cells[0][0].text() === "O")) ||
      (this.cells[0][2].text() === this.cells[1][1].text() && this.cells[0][2].text() === this.cells[2][0].text() && (this.cells[0][2].text() === "O"))){
      $("#board").append("<h2>" +  $('#player1').val() + " WINS!!!</h2>");
      this.gameOn = false;
    }

   else if (((this.cells[0][0].text() === "X") || (this.cells[0][0].text() === "O")) && ((this.cells[1][0].text() === "X") || (this.cells[1][0].text() ===
   "O")) && ((this.cells[2][0].text() === "X") || (this.cells[2][0].text() === "O")) && ((this.cells[0][1].text() === "X") || (this.cells[0][1].text()
   === "O")) && ((this.cells[1][1].text() === "X") || (this.cells[1][1].text() === "O")) && ((this.cells[1][2].text() === "X") || (this.cells[1][2].text()
   === "O"))
   && ((this.cells[0][2].text() === "X") || (this.cells[0][2].text() === "O")) && ((this.cells[1][2].text() === "X") || (this.cells[1][2].text() === "O"))
   && ((this.cells[2][2].text() === "X") || (this.cells[2][2].text() === "O"))){
     $("#board").append("<h2>TIE!!!</h2>");
     this.gameOn = false;
   }
 },
 //render resets the game by going through the two dimensional array cells and resets their value to null
 render: function () {
   for (var i = 0; i < this.cells.length; i++){
     for (var j = 0; j < this.cells[i].length; j++) {
       this.cells[i][j].remove('div');
     }
   }
 }
};

var player1 = {
score:0,
$name:$('#player1').val()
};

var player2 = {
  score:0,
  $name:$('#player2').val()

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
$('#reset').on('click', function () {game.render()});
