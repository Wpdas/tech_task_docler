import { CHAT_TYPED_TEXT, CHAT_ADD_MESSAGE } from './actions';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  typedText: '',
  messages: [], // Format: {userName, text, time, type}
  unreadMessages: 0
};

const updateTypedText = (state, action) => {
  const { typedText } = action.payload;
  return updateObject(state, { typedText });
};

const addMessage = (state, action) => {
  const { userName, text, type, time } = action.payload;
  const messages = [...state.messages];
  messages.push({ userName, text, time, type });
  return updateObject(state, { messages });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_TYPED_TEXT:
      return updateTypedText(state, action);
    case CHAT_ADD_MESSAGE:
      return addMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
