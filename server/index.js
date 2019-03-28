const app = require('express')();
const http = require('http').Server(app);
const debug = require('debug')('docler_chat');
const debugNewUser = require('debug')('docler_chat:new_user');
const debugNewMessage = require('debug')('docler_chat:new_message');
const debugUserChangeName = require('debug')('docler_chat:user_change_name');

const io = require('socket.io')(http);

const port = process.env.SOCKET_PORT;

let userCount = 0;

// When user connects
io.on('connection', socket => {
  // Sending to sender-client only
  socket.emit('server:iam_connected', { providedUserName: `guest${userCount}` });

  // When someone confirm his name, send welcome
  socket.on('user:welcome', userName => {
    // sending to all clients except sender
    // Send message saying that a new user entered
    socket.broadcast.emit('friend:enter', { friendName: userName });
    debugNewUser(`${userName} joined to the chat`);
  });

  // When someone send a message
  socket.on('user:send_message', messageData => {
    // sending to all clients except sender
    socket.broadcast.emit('friend:send_message', messageData);
    debugNewMessage(messageData);
  });

  // When someone change his/her name
  socket.on('user:change_name', messageData => {
    // sending to all clients except sender
    socket.broadcast.emit('friend:change_name', messageData);
    debugUserChangeName(messageData);
  });

  // User count used to create the initial default user name (guest9999)
  userCount++;
});

http.listen(port, () => {
  debug(`App is running!`);
  debug(`Server is running on port ${port}`);
});
