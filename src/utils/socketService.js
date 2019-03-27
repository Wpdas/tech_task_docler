import io from 'socket.io-client';
import * as routes from '../routes';

const socketHost = process.env.REACT_APP_SOCKET_HOST || 'localhost';
const socketPort = process.env.REACT_APP_SOCKET_PORT;
const server = `${socketHost}:${socketPort}`;
let socket;
let userName;
let onConnectHandler;
let onFriendEnterHandler;
let onFriendSendMessageHandler;
let onFriendChangeNameHandler;
let onReceiveBackgroundMessageHandler;

/**
 * Send welcome message when user connect
 * @param {string} providedUserName Name provided by server
 */
const sendWelcome = providedUserName => {
  localStorage.setItem('providedUserName', providedUserName);
  userName = localStorage.getItem('userName') || providedUserName;

  if (socket) {
    socket.emit('user:welcome', userName);
  }

  if (onConnectHandler) {
    onConnectHandler(userName);
  }
};

/**
 * Send message
 * @param {string} message
 */
export const sendMessage = message => {
  if (socket) {
    socket.emit('user:send_message', { message, from: userName });
  }
};

/**
 * Change user name
 * @param {string} previousName
 * @param {string} newName
 */
export const changeName = (previousName, newName) => {
  userName = newName;

  if (socket) {
    socket.emit('user:change_name', {
      previousName,
      currentName: newName
    });
  }
};

/**
 * Connect to server
 */
export const connect = () => {
  socket = io(server);

  // Proccess all received messages
  socket.on('server:iam_connected', serverMessage => {
    sendWelcome(serverMessage.providedUserName);
  });

  socket.on('friend:enter', serverMessage => {
    if (onFriendEnterHandler) {
      onFriendEnterHandler(serverMessage.friendName);
    }
  });

  socket.on('friend:send_message', serverMessage => {
    if (onFriendSendMessageHandler) {
      onFriendSendMessageHandler(serverMessage);
    }

    if (onReceiveBackgroundMessageHandler && window.location.pathname !== routes.CHAT) {
      onReceiveBackgroundMessageHandler();
    }
  });

  socket.on('friend:change_name', serverMessage => {
    if (onFriendChangeNameHandler) {
      onFriendChangeNameHandler(serverMessage);
    }
  });
};

// Events
// After user connect to the server
export const onConnect = handler => {
  onConnectHandler = handler;
};

// When a friend enter to the chat
export const onFriendEnter = handler => {
  onFriendEnterHandler = handler;
};

// When a friend send a message
export const onFriendSendMessage = handler => {
  onFriendSendMessageHandler = handler;
};

// When a friend changes his/her name
export const onFriendChangeName = handler => {
  onFriendChangeNameHandler = handler;
};

// When user receive message in background
export const onReceiveBackgroundMessage = handler => {
  onReceiveBackgroundMessageHandler = handler;
};
