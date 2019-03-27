export const CHAT_TYPED_TEXT = 'CHAT_TYPED_TEXT';
export const CHAT_ADD_MESSAGE = 'CHAT_ADD_MESSAGE';
export const CHAT_UPDATE_UNREAD_MESSAGES = 'CHAT_UPDATE_UNREAD_MESSAGES';

export const messageTypes = {
  NEW_MESSAGE: 'newMessage',
  NEW_USER: 'newUser',
  USER_CHANGE_NAME: 'userChangeName',
  SEND_MESSAGE: 'sendMessage'
};

export const updateTypedText = text => {
  return { type: CHAT_TYPED_TEXT, payload: { typedText: text } };
};

export const addMessage = (userName, text, type) => {
  const time = Date.now();
  return { type: CHAT_ADD_MESSAGE, payload: { userName, text, type, time } };
};
