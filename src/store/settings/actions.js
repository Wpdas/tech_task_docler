import setBodyColor from '../../theme/setBodyColor';
import i18next from '../../i18n/index';

export const UPDATE_THEME = 'UPDATE_THEME';
export const UPDATE_CLOCK_FORMAT = 'UPDATE_CLOCK_FORMAT';
export const UPDATE_KEYBOARD_SHORTCUT = 'UPDATE_KEYBOARD_SHORTCUT';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
export const UPDATE_LANGUAGE_TEXTS = 'UPDATE_LANGUAGE_TEXTS';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';

export const showInputErrorMessage = () => {
  return { type: SHOW_ERROR_MESSAGE, payload: { showErrorMessage: true } };
};

export const hideInputErrorMessage = () => {
  return { type: HIDE_ERROR_MESSAGE, payload: { showErrorMessage: false } };
};

export const updateTheme = theme => {
  setBodyColor(theme);
  return { type: UPDATE_THEME, payload: { theme } };
};

export const updateClockFormat = clockFormat => {
  return { type: UPDATE_CLOCK_FORMAT, payload: { clockFormat } };
};

export const updateKeyboardShortcut = enabled => {
  return { type: UPDATE_KEYBOARD_SHORTCUT, payload: { enabled } };
};

export const updateLanguage = language => {
  i18next.changeLanguage(language);
  return { type: UPDATE_LANGUAGE, payload: { language } };
};

export const updateLanguageTexts = () => {
  return {
    type: UPDATE_LANGUAGE_TEXTS,
    payload: {
      language: i18next.language,
      headerTitle: 'kkjk',
      // headerTitle: i18next.t('settingsTitle.label'),
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
