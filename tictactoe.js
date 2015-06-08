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
    player: player1,
    curPlayer:0,
   gameOn:true,
 cells: [[$("#cell1"), $("#cell4"), $("#cell7")],
          [$("#cell2"), $("#cell5"), $("#cell8")],
          [$("#cell3"), $("#cell6"), $("#cell9")]],

run: function () {
  if (player1.name != "" && player2.name != "") {
    $("#overlay").addClass("goup");
    $("#overlay").css("height", "0%");
  }


},
 //this method alternates turns by switching the player property and event listener everytime a grid box is appended
  turn: function () {
    if (this.gameOn){
      if (this.curPlayer % 2 === 0) {
        $(event.target).closest('div').html('<div class="knotBox">' + this.player.sign + '</div>');
        this.checkWinner();
        this.player = player2;
        this.curPlayer++;
      }
      else {
        $(event.target).closest('div').html('<div class="crossBox">' + this.player.sign + '</div>');
        this.checkWinner();
        this.player = player1;
        this.curPlayer++;
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
player2.score++;
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
      player1.score++;
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
$('#setNames').on('click', function () {
  $('#playerBoard').append('<h2 id="name1">' + $('#player1').val() + '</h2>');
  player1.name = $('#player1').val();
  $('#playerBoard').append('<h2 id="name2">' + $('#player2').val() + '</h2>');
  player2.name = $('#player2').val();
  game.run();
});
$('#setNames').on('click', function () {$('#player1').remove()});
$('#setNames').on('click', function () {$('#player2').remove()});
$('#setNames').on('click', function () {$('#setNames').remove()});
