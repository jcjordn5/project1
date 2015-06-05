var player1 = {
  score:0,
  $name:$('#player1').val(),
  sign:"O"
};

var player2 = {
  score:0,
  $name:$('#player2').val(),
  sign:"X"
};

var game = {
    player:player1,
   gameOn:true,
   start: function (){
     this.gameOn = true;
 },
 cells: [[$("#cell1"), $("#cell4"), $("#cell7")],
          [$("#cell2"), $("#cell5"), $("#cell8")],
          [$("#cell3"), $("#cell6"), $("#cell9")]],



 //this method alternates turns by switching the player property and event listener everytime a grid box is appended
  turn: function () {
    if (this.gameOn){
      $(event.target).closest('div').html('<div class="knotBox">' + this.player.sign + '</div>');
      this.checkWinner();
      if (this.player === player1) {
        this.player = player2;
      }
      else if (this.player === player2){
          this.player = player1;
        }
    }
  },
 checkWinner: function () {
//there are 8 ways to win the game the conditional statements look for these for both X and O
   if ((this.cells[0][0].text() === this.cells[0][1].text() && this.cells[0][0].text() === this.cells[0][2].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[1][0].text() === this.cells[1][1].text() && this.cells[1][0].text() === this.cells[1][2].text() && (this.cells[1][0].text() === "X")) ||
   (this.cells[2][0].text() === this.cells[2][1].text() && this.cells[2][0].text() === this.cells[2][2].text() && (this.cells[2][0].text() === "X")) ||
   (this.cells[0][0].text() === this.cells[1][0].text() && this.cells[0][0].text() === this.cells[2][0].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[0][1].text() === this.cells[1][1].text() && this.cells[0][1].text() === this.cells[2][1].text() && (this.cells[0][1].text() === "X")) ||
   (this.cells[0][2].text() === this.cells[1][2].text() && this.cells[0][2].text() === this.cells[2][2].text() && (this.cells[0][2].text() === "X")) ||
   (this.cells[0][0].text() === this.cells[1][1].text() && this.cells[0][0].text() === this.cells[2][2].text() && (this.cells[0][0].text() === "X")) ||
   (this.cells[0][2].text() === this.cells[1][1].text() && this.cells[0][2].text() === this.cells[2][0].text() && (this.cells[0][2].text() === "X"))){
$("#board").append("<h2 id='result'>" +  this.player.name.toUpperCase() +" WINS!!!</h2>");
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
      $("#board").append("<h2 id='result'>" + this.player.name.toUpperCase() + " WINS!!!</h2>");
      this.gameOn = false;
    }

   else if (((this.cells[0][0].text() === "X") || (this.cells[0][0].text() === "O")) && ((this.cells[1][0].text() === "X") || (this.cells[1][0].text() ===
   "O")) && ((this.cells[2][0].text() === "X") || (this.cells[2][0].text() === "O")) && ((this.cells[0][1].text() === "X") || (this.cells[0][1].text()
   === "O")) && ((this.cells[1][1].text() === "X") || (this.cells[1][1].text() === "O")) && ((this.cells[1][2].text() === "X") || (this.cells[1][2].text()
   === "O"))
   && ((this.cells[0][2].text() === "X") || (this.cells[0][2].text() === "O")) && ((this.cells[1][2].text() === "X") || (this.cells[1][2].text() === "O"))
   && ((this.cells[2][2].text() === "X") || (this.cells[2][2].text() === "O"))){
     $("#board").append("<h2 id='result'>TIE!!!</h2>");
     this.gameOn = false;
   }
 },
 //render resets the game by going through the two dimensional array cells and resets their value to null
 render: function () {
   for (var i = 0; i < this.cells.length; i++){
     for (var j = 0; j < this.cells[i].length; j++) {
       this.cells[i][j].html("");
     }
   }
   $('#result').remove();
   this.setListeners();
   this.player = player1;
   this.gameOn = true;
 },
 setListeners: function () {
   $('#cell1').one('click', function () {game.turn()}).bind(this);
   $('#cell2').one('click', function () {game.turn()}).bind(this);
   $('#cell3').one('click', function () {game.turn()}).bind(this);
   $('#cell4').one('click', function () {game.turn()}).bind(this);
   $('#cell5').one('click', function () {game.turn()}).bind(this);
   $('#cell6').one('click', function () {game.turn()}).bind(this);
   $('#cell7').one('click', function () {game.turn()}).bind(this);
   $('#cell8').one('click', function () {game.turn()}).bind(this);
   $('#cell9').one('click', function () {game.turn()}).bind(this);
 }
};

game.setListeners();
$('#reset').on('click', function () {game.render()});
$('#setName1').on('click', function () {
  $('#playerBoard').append('<h2 id="name1">' + $('#player1').val() + '</h2>');
  player1.name = $('#player1').val();
});
$('#setName2').on('click', function () {
  $('#playerBoard').append('<h2 id="name2">' + $('#player2').val() + '</h2>')
  player2.name = $('#player2').val();
});
$('#setName1').on('click', function () {$('#player1').remove()});
$('#setName2').on('click', function () {$('#player2').remove()});
$('#setName1').on('click', function () {$('#setName1').remove()});
$('#setName2').on('click', function () {$('#setName2').remove()});
