const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');
const socketUtils = require('./socketUtils');

const port = process.env.PORT || config.get('PORT');

let userCount = 0;

io.on('connection', socket => {
  // When someone enter
  socket.broadcast.emit(
    socketUtils.socketEventsType.SERVER_SEND_MESSAGE,
    JSON.stringify({
      type: socketUtils.socketMessagesType.NEW_USER,
      userName: `guest${userCount}`
    })
  );

  // When someone disconnect
  socket.on('disconnect', () => {
    console.log('server:user_left');
    socket.broadcast.emit('saiu'); // Quando alguem sair
  });

  // When someone send message
  socket.on(socketUtils.socketEventsType.CLIENT_SEND_MESSAGE, data => {
    const messageData = JSON.parse(data);
    const { type, userName, message } = messageData;

    // User message
    if (type === socketUtils.socketMessagesType.USER_SEND_MESSAGE) {
      io.emit(socketUtils.socketEventsType.SERVER_SEND_MESSAGE, data); // Envia para todos
    }
  });

  // socket.on('client:user_changed_name', msg => {
  //   console.log(`message: ${msg}`);
  //   io.emit('server:send_message', msg); // Envia para todos
  // });

  userCount++;
});

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
