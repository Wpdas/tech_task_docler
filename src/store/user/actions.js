export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const updateUserName = (userName, nameProvidedByServer = false) => {
  return { type: UPDATE_USER_NAME, payload: { userName, nameProvidedByServer } };
};
