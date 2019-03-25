import {
  UPDATE_THEME,
  UPDATE_CLOCK_FORMAT,
  UPDATE_KEYBOARD_SHORTCUT,
  UPDATE_LANGUAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE
} from './actions';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  themeOptions: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }],
  theme: 'light',
  clockOptions: [
    { label: '12 Hours', value: '12_hours' },
    { label: '24 Hours', value: '24_hours' }
  ],
  clockFormat: '12_hours',
  keyboardShortcutOptions: [{ label: 'On', value: 'true' }, { label: 'Off', value: 'false' }],
  keyboardShortcutEnabled: 'false',
  languageOptions: [{ label: 'English', value: 'en_EN' }, { label: 'Portuguese', value: 'pt_PT' }],
  language: 'en_EN',
  showErrorMessage: false,
  errorMessage: 'Insert a valid name'
};

export const showInputErrorMessage = (state, action) => {
  const { showErrorMessage } = action.payload;
  return updateObject(state, { showErrorMessage });
};

export const hideInputErrorMessage = (state, action) => {
  const { showErrorMessage } = action.payload;
  return updateObject(state, { showErrorMessage });
};

const updateTheme = (state, action) => {
  const { theme } = action.payload;
  return updateObject(state, { theme });
};

const updateClockFormat = (state, action) => {
  const { clockFormat } = action.payload;
  return updateObject(state, { clockFormat });
};

const updateKeyboardShortcut = (state, action) => {
  const { enabled } = action.payload;
  return updateObject(state, { keyboardShortcutEnabled: enabled });
};

const updateLanguage = (state, action) => {
  const { language } = action.payload;
  return updateObject(state, { language });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      return showInputErrorMessage(state, action);
    case HIDE_ERROR_MESSAGE:
      return hideInputErrorMessage(state, action);
    case UPDATE_THEME:
      return updateTheme(state, action);
    case UPDATE_CLOCK_FORMAT:
      return updateClockFormat(state, action);
    case UPDATE_KEYBOARD_SHORTCUT:
      return updateKeyboardShortcut(state, action);
    case UPDATE_LANGUAGE:
      return updateLanguage(state, action);
    default:
      return state;
  }
};

export default reducer;
