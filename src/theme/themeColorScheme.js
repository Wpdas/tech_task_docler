export const themeColorScheme = theme => {
  let scheme;
  if (theme === 'dark') {
    scheme = {
      primary_color: '#25b388',
      font_primary_color: '#000000', //
      messagebg_color: '#5db9a4',
      received_message_bg_color: '#f7f7f7',
      unread_tag_bg_color: '#7d1d1d',
      font_secondary_color: '#ffffff', //
      label_color: '#ffffff', //
      form_border_color: '#ffffff', //
      radioBorder: '#435d57',
      radioActive: '#435d57',
      submitActive: '#23a27c',
      bg_color: '#11151C'
    };
  } else {
    scheme = {
      primary_color: '#25b388',
      font_primary_color: '#ffffff',
      messagebg_color: '#5db9a4',
      received_message_bg_color: '#f7f7f7',
      unread_tag_bg_color: '#7d1d1d',
      label_color: '#435d57',
      form_border_color: '#435d57',
      radioBorder: '#435d57',
      radioActive: '#435d57',
      submitActive: '#23a27c',
      bg_color: '#ffffff'
    };
  }

  // Set body bg color
  document.getElementsByTagName('body').item(0).style.background = scheme.bg_color;

  return scheme;
};
