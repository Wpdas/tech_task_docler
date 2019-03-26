import { CHAT_TYPED_TEXT } from './actions';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  typedText: ''
};

const updateTypedText = (state, action) => {
  const { typedText } = action.payload;
  return updateObject(state, { typedText });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_TYPED_TEXT:
      return updateTypedText(state, action);
    default:
      return state;
  }
};

export default reducer;
