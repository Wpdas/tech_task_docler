import React from 'react';
import PropTypes from 'prop-types';
import classes from './Icon.module.scss';
import joinClasses from '../../utils/joinClasses';

// Settings
const Settings = ({ size, onClick, paddingOnLeft, paddingOnRight }) => {
  const style = { width: `${size}px`, height: `${size}px` };
  if (paddingOnLeft) {
    style.paddingLeft = '8px';
  }
  if (paddingOnRight) {
    style.paddingRight = '8px';
  }

  const classStyle = joinClasses(classes.Icon__settings);
  return <div onClick={onClick} className={classStyle} style={style} />;
};

// Chat
const Chat = ({ size, onClick, paddingOnLeft, paddingOnRight }) => {
  const style = { width: `${size}px`, height: `${size}px` };
  if (paddingOnLeft) {
    style.paddingLeft = '8px';
  }
  if (paddingOnRight) {
    style.paddingRight = '8px';
  }

  const classStyle = joinClasses(classes.Icon__chat);
  return <div onClick={onClick} className={classStyle} style={style} />;
};

// Send
const Send = ({ size, onClick, paddingOnLeft, paddingOnRight }) => {
  const style = { width: `${size}px`, height: `${size}px` };
  if (paddingOnLeft) {
    style.paddingLeft = '8px';
  }
  if (paddingOnRight) {
    style.paddingRight = '8px';
  }

  const classStyle = joinClasses(classes.Icon__send);
  return <div onClick={onClick} className={classStyle} style={style} />;
};

Settings.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func,
  paddingOnLeft: PropTypes.bool,
  paddingOnRight: PropTypes.bool
};

Settings.defaultProps = {
  size: 24,
  onClick: null,
  paddingOnLeft: false,
  paddingOnRight: false
};

Chat.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func,
  paddingOnLeft: PropTypes.bool,
  paddingOnRight: PropTypes.bool
};

Chat.defaultProps = {
  size: 24,
  onClick: null,
  paddingOnLeft: false,
  paddingOnRight: false
};

Send.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func,
  paddingOnLeft: PropTypes.bool,
  paddingOnRight: PropTypes.bool
};

Send.defaultProps = {
  size: 24,
  onClick: null,
  paddingOnLeft: false,
  paddingOnRight: false
};

// Icon Lib
const Icon = {
  Settings,
  Chat,
  Send
};

export default Icon;
