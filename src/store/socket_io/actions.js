export const SOCKET_INIT = 'SOCKET_INIT';
export const SOCKET_SET_ON_MESSAGE_HANDLER = 'SOCKET_SET_ON_MESSAGE_HANDLER';

export const initSocket = (socket, sendMessage) => {
  return {
    type: SOCKET_INIT,
    payload: { socket, sendMessage }
  };
};

export const setOnReceiveMessageHandler = handler => {
  return {
    type: SOCKET_SET_ON_MESSAGE_HANDLER,
    payload: { onReceiveMessage: handler }
  };
};
