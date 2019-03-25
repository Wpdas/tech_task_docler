const setBodyColor = theme => {
  let color;
  if (theme === 'dark') {
    color = '#11151C';
  } else {
    color = '#ffffff';
  }

  // Set body bg color
  document.getElementsByTagName('body').item(0).style.background = color;
};

export default setBodyColor;
