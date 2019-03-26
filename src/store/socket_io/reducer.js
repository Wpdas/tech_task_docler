import { SOCKET_INIT, SOCKET_SET_ON_MESSAGE_HANDLER } from './actions';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  socket: () => {},
  sendMessage: () => {}, // Send message to server
  onReceiveMessage: () => {}, // Event listener
  initialized: false
};

const initSocket = (state, action) => {
  const { socket, sendMessage } = action.payload;
  if (!state.initialized) {
    return updateObject(state, { socket, sendMessage, initialized: true });
  }

  throw new Error("You can't init socket more than once.");
};

const setOnReceiveMessageHandler = (state, action) => {
  const { onReceiveMessage } = action.payload;
  return updateObject(state, { onReceiveMessage });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_INIT:
      return initSocket(state, action);
    case SOCKET_SET_ON_MESSAGE_HANDLER:
      return setOnReceiveMessageHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
