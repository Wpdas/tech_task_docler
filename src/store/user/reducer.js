import { UPDATE_USER_NAME } from './actions';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  name: localStorage.getItem('userName') || localStorage.getItem('providedUserName') || ''
};

const updateUserName = (state, action) => {
  const { userName } = action.payload;
  return updateObject(state, { name: userName });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return updateUserName(state, action);
    default:
      return state;
  }
};

export default reducer;
