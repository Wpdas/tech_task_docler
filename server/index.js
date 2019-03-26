const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

const port = process.env.PORT || config.get('PORT');

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.broadcast.emit('entrou'); // Quando alguem entrar

  socket.on('disconnect', function() {
    console.log('user disconnected');
    socket.broadcast.emit('saiu'); // Quando alguem sair
  });

  socket.on('client:sendMessage', function(msg) {
    console.log(`message: ${msg}`);
    io.emit('server:sendMessage', msg); // Envia para todos
  });
});

http.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
