var Socket = require('socket.io');
var TicTacToe = require('./tic-tac-toe');
var game = new TicTacToe();
var gameDimensions;

module.exports = function (server) {

  var io = Socket(server);

  io.on('connection', function(socket) {
    io.emit('new-connection', game);

    socket.on('new-game', function(dimensions) {
      gameDimensions = dimensions;
      game.createGame(dimensions);
      io.emit('load', game);
    });

    socket.on('move', function(location) {
      game.move(location);
      io.emit('load', game);
    });

    socket.on('reset', function() {
      game.reset();
      game.createGame(gameDimensions);
      io.emit('load', game);
    });

  });

};
