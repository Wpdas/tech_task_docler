import {
  UPDATE_THEME,
  UPDATE_CLOCK_FORMAT,
  UPDATE_KEYBOARD_SHORTCUT,
  UPDATE_LANGUAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE,
  UPDATE_LANGUAGE_TEXTS
} from './actions';

import { updateObject } from '../../utils/updateObject';
import i18next from '../../i18n';

const initialState = {
  headerTitle: i18next.t('settingsTitle.label'),
  themeOptions: [
    { label: i18next.t('interfaceColorLight.label'), value: 'light' },
    { label: i18next.t('interfaceColorDark.label'), value: 'dark' }
  ],
  theme: 'light',
  clockOptions: [
    { label: i18next.t('clockDisplay12.label'), value: '12_hours' },
    { label: i18next.t('clockDisplay24.label'), value: '24_hours' }
  ],
  clockFormat: '12_hours',
  keyboardShortcutOptions: [
    { label: i18next.t('sendMessagesOnCTRL_ENTERon.label'), value: 'true' },
    { label: i18next.t('sendMessagesOnCTRL_ENTERoff.label'), value: 'false' }
  ],
  keyboardShortcutEnabled: 'false',
  languageOptions: [
    { label: i18next.t('enLanguage.label'), value: 'en' },
    { label: i18next.t('ptLanguage.label'), value: 'pt' }
  ],
  language: 'en',
  showErrorMessage: false,
  errorMessage: 'Insert a valid name'
};

const showInputErrorMessage = (state, action) => {
  const { showErrorMessage } = action.payload;
  return updateObject(state, { showErrorMessage });
};

const hideInputErrorMessage = (state, action) => {
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

const updateLanguageTexts = (state, action) => {
  const {
    themeOptions,
    clockOptions,
    keyboardShortcutOptions,
    languageOptions,
    language
  } = action.payload;
  return updateObject(state, {
    language,
    themeOptions,
    clockOptions,
    keyboardShortcutOptions,
    languageOptions
  });
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
    case UPDATE_LANGUAGE_TEXTS:
      return updateLanguageTexts(state, action);
    default:
      return state;
  }
};

export default reducer;
