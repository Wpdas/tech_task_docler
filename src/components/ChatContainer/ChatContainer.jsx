import React from 'react';
import PropTypes from 'prop-types';
import classes from './ChatContainer.module.scss';
import Page from '../Page/Page';

const ChatContainer = ({ children }) => {
  return <Page.Fragment className={classes.ChatContainer}>{children}</Page.Fragment>;
};

export default ChatContainer;

ChatContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
