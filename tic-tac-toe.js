function TicTacToe() {
  this.board = [];
  this.turn = 1;
  this.status = {
    over: false,
    message: 'Blank Game'
  };
}

TicTacToe.prototype.reset = function() {
  this.board = [];
  this.turn = 1;
  this.status = {
    over: false,
    message: 'Blank Game'
  };
};

TicTacToe.prototype.createGame = function(dimensionsObj) {
  this.reset();
  this.status =  {
    over: false,
    message: 'Game in Progress'
  };
  this.board = [];
  for (var i = 0; i < dimensionsObj.rows; i++) {
    var row = [];
    for (var j = 0; j < dimensionsObj.cols; j++) {
      row.push(0);
    }
    this.board.push(row);
  }
};

TicTacToe.prototype.move = function(coordinates) {
  var x = coordinates[0];
  var y = coordinates[1];
  if ( this.turn === 1 ) {
    this.board[x][y] = 1;
    this.turn = 2;
  } else {
    this.board[x][y] = 2;
    this.turn = 1;
  }
};

TicTacToe.prototype.fullBoardCheck = function(gameBoard) {
  var flattened = gameBoard.reduce(function(a, b) {
    return a.concat(b);
  });
  if (flattened.indexOf(0) !== -1) {
    return;
  } else {
    this.status.message = 'Game Board is Full';
    this.status.over = true;
  }
};

module.exports = TicTacToe;
