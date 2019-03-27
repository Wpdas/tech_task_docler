export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const updateUserName = userName => {
  localStorage.setItem('userName', userName);
  return { type: UPDATE_USER_NAME, payload: { userName } };
};
