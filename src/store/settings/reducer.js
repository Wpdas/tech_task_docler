import {
  SETTINGS_UPDATE_THEME,
  SETTINGS_UPDATE_CLOCK_FORMAT,
  SETTINGS_UPDATE_KEYBOARD_SHORTCUT,
  SETTINGS_UPDATE_LANGUAGE,
  SETTINGS_SHOW_ERROR_MESSAGE,
  SETTINGS_HIDE_ERROR_MESSAGE,
  SETTINGS_UPDATE_LANGUAGE_TEXTS,
  SETTINGS_LOAD,
  SETTINGS_RESET
} from './actions';

import { updateObject } from '../../utils/updateObject';
import i18next from '../../i18n';

export const initialState = {
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

const loadSettings = (state, action) => {
  const { theme, clockFormat, keyboardShortcutEnabled, language } = action.payload;
  return updateObject(state, { theme, clockFormat, keyboardShortcutEnabled, language });
};

export const resetSettings = state => {
  return updateObject(state, {
    theme: initialState.theme,
    clockFormat: initialState.clockFormat,
    keyboardShortcutEnabled: initialState.keyboardShortcutEnabled,
    language: initialState.language
  });
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
    case SETTINGS_LOAD:
      return loadSettings(state, action);
    case SETTINGS_RESET:
      return resetSettings(state);
    case SETTINGS_SHOW_ERROR_MESSAGE:
      return showInputErrorMessage(state, action);
    case SETTINGS_HIDE_ERROR_MESSAGE:
      return hideInputErrorMessage(state, action);
    case SETTINGS_UPDATE_THEME:
      return updateTheme(state, action);
    case SETTINGS_UPDATE_CLOCK_FORMAT:
      return updateClockFormat(state, action);
    case SETTINGS_UPDATE_KEYBOARD_SHORTCUT:
      return updateKeyboardShortcut(state, action);
    case SETTINGS_UPDATE_LANGUAGE:
      return updateLanguage(state, action);
    case SETTINGS_UPDATE_LANGUAGE_TEXTS:
      return updateLanguageTexts(state, action);
    default:
      return state;
  }
};

export default reducer;
