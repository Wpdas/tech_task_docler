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
