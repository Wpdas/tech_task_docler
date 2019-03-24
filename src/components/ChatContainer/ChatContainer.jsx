import React from 'react';
import classes from './ChatContainer.module.scss';
import Page from '../Page/Page';
import UserMessage from './UserMessage/UserMessage';

const ChatContainer = () => {
  return (
    <Page.Fragment className={classes.ChatContainer}>
      <UserMessage />
      <UserMessage />
      <UserMessage />
    </Page.Fragment>
  );
};

export default ChatContainer;
