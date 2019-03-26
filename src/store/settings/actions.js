import setBodyColor from '../../theme/setBodyColor';
import i18next from '../../i18n/index';
import { initialState } from './reducer';

export const SETTINGS_UPDATE_THEME = 'SETTINGS_UPDATE_THEME';
export const SETTINGS_UPDATE_CLOCK_FORMAT = 'SETTINGS_UPDATE_CLOCK_FORMAT';
export const SETTINGS_UPDATE_KEYBOARD_SHORTCUT = 'SETTINGS_UPDATE_KEYBOARD_SHORTCUT';
export const SETTINGS_UPDATE_LANGUAGE = 'SETTINGS_UPDATE_LANGUAGE';
export const SETTINGS_UPDATE_LANGUAGE_TEXTS = 'SETTINGS_UPDATE_LANGUAGE_TEXTS';
export const SETTINGS_SHOW_ERROR_MESSAGE = 'SETTINGS_SHOW_ERROR_MESSAGE';
export const SETTINGS_HIDE_ERROR_MESSAGE = 'SETTINGS_HIDE_ERROR_MESSAGE';
export const SETTINGS_LOAD = 'SETTINGS_LOAD';
export const SETTINGS_RESET = 'SETTINGS_RESET';

export const loadSettings = () => {
  const theme = localStorage.getItem('theme') || initialState.theme;
  const clockFormat = localStorage.getItem('clockFormat') || initialState.clockFormat;
  const keyboardShortcutEnabled =
    localStorage.getItem('useKeyboardShortcut') || initialState.keyboardShortcutEnabled;
  const language = localStorage.getItem('language') || initialState.language;

  setBodyColor(theme);

  return {
    type: SETTINGS_LOAD,
    payload: { theme, clockFormat, keyboardShortcutEnabled, language }
  };
};

export const resetSettings = () => {
  localStorage.removeItem('theme');
  localStorage.removeItem('clockFormat');
  localStorage.removeItem('useKeyboardShortcut');
  localStorage.removeItem('language');

  setBodyColor(initialState.theme);
  i18next.changeLanguage(initialState.language);

  return {
    type: SETTINGS_RESET
  };
};

export const showInputErrorMessage = () => {
  return { type: SETTINGS_SHOW_ERROR_MESSAGE, payload: { showErrorMessage: true } };
};

export const hideInputErrorMessage = () => {
  return { type: SETTINGS_HIDE_ERROR_MESSAGE, payload: { showErrorMessage: false } };
};

export const updateTheme = theme => {
  setBodyColor(theme);
  localStorage.setItem('theme', theme);
  return { type: SETTINGS_UPDATE_THEME, payload: { theme } };
};

export const updateClockFormat = clockFormat => {
  localStorage.setItem('clockFormat', clockFormat);
  return { type: SETTINGS_UPDATE_CLOCK_FORMAT, payload: { clockFormat } };
};

export const updateKeyboardShortcut = enabled => {
  localStorage.setItem('useKeyboardShortcut', enabled);
  return { type: SETTINGS_UPDATE_KEYBOARD_SHORTCUT, payload: { enabled } };
};

export const updateLanguage = language => {
  localStorage.setItem('language', language);
  i18next.changeLanguage(language);
  return { type: SETTINGS_UPDATE_LANGUAGE, payload: { language } };
};

export const updateLanguageTexts = () => {
  return {
    type: SETTINGS_UPDATE_LANGUAGE_TEXTS,
    payload: {
      language: i18next.language,
      themeOptions: [
        { label: i18next.t('interfaceColorLight.label'), value: 'light' },
        { label: i18next.t('interfaceColorDark.label'), value: 'dark' }
      ],
      clockOptions: [
        { label: i18next.t('clockDisplay12.label'), value: '12_hours' },
        { label: i18next.t('clockDisplay24.label'), value: '24_hours' }
      ],
      keyboardShortcutOptions: [
        { label: i18next.t('sendMessagesOnCTRL_ENTERon.label'), value: 'true' },
        { label: i18next.t('sendMessagesOnCTRL_ENTERoff.label'), value: 'false' }
      ],
      languageOptions: [
        { label: i18next.t('enLanguage.label'), value: 'en' },
        { label: i18next.t('ptLanguage.label'), value: 'pt' }
      ]
    }
  };
};
