const NEW_USER = 'user_entered';
const USER_LEFT = 'user_left';
const USER_SEND_MESSAGE = 'user_send_message';
const USER_CHANGED_NAME = 'user_changed_name';
const SERVER_SEND_MESSAGE = 'server:send_message';
const CLIENT_SEND_MESSAGE = 'client:send_message';

const socketEventsType = {
  SERVER_SEND_MESSAGE,
  CLIENT_SEND_MESSAGE
};

const socketMessagesType = {
  USER_SEND_MESSAGE,
  USER_CHANGED_NAME,
  NEW_USER,
  USER_LEFT
};

module.exports = {
  socketEventsType,
  socketMessagesType
};
