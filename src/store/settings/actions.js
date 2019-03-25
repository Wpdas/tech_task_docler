export const UPDATE_THEME = 'UPDATE_THEME';
export const UPDATE_CLOCK_FORMAT = 'UPDATE_CLOCK_FORMAT';
export const UPDATE_KEYBOARD_SHORTCUT = 'UPDATE_KEYBOARD_SHORTCUT';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

export const updateTheme = theme => {
  return { type: UPDATE_THEME, payload: { theme } };
};

export const updateClockFormat = clockFormat => {
  return { type: UPDATE_CLOCK_FORMAT, payload: { clockFormat } };
};

export const updateKeyboardShortcut = enabled => {
  return { type: UPDATE_KEYBOARD_SHORTCUT, payload: { enabled } };
};

export const updateLanguage = language => {
  return { type: UPDATE_LANGUAGE, payload: { language } };
};
