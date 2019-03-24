import React from 'react';
import PropTypes from 'prop-types';
import classes from './MessageInput.module.scss';
import Icon from '../Icon/Icon';

const MessageInput = ({ onSendMessage }) => {
  const messageRef = React.createRef();

  const onClickSendMessage = () => {
    const message = messageRef.current.value;
    if (onSendMessage && message.length) {
      onSendMessage(message);
    }

    messageRef.current.value = '';
  };

  const onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      onClickSendMessage();
    }
  };

  return (
    <footer className={classes.MessageInput}>
      <input
        className={classes.MessageInput__message_box}
        type="text"
        placeholder="Enter message"
        ref={messageRef}
        onKeyPress={onKeyPressHandler}
      />
      <a className={classes.buttonAnimationDark} onClick={onClickSendMessage}>
        <Icon.Send />
      </a>
    </footer>
  );
};

export default MessageInput;

MessageInput.propTypes = {
  onSendMessage: PropTypes.func
};

MessageInput.defaultProps = {
  onSendMessage: null
};
