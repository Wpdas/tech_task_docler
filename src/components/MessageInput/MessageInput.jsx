import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './MessageInput.module.scss';
import i18next from '../../i18n';
import Icon from '../Icon/Icon';

const MessageInput = ({ onSendMessage, keyboardShortcutEnabled }) => {
  const messageRef = React.createRef();
  const placeholder = i18next.t('enterMessage.label');

  const onClickSendMessage = () => {
    const message = messageRef.current.value;
    if (onSendMessage && message.length) {
      onSendMessage(message);
    }

    messageRef.current.value = '';
  };

  const onKeyPressHandler = event => {
    if (keyboardShortcutEnabled && event.ctrlKey && event.key === 'Enter') {
      onClickSendMessage();
    }
  };

  return (
    <footer className={classes.MessageInput}>
      <input
        className={classes.MessageInput__message_box}
        type="text"
        placeholder={placeholder}
        ref={messageRef}
        onKeyPress={onKeyPressHandler}
      />
      <a className={classes.buttonAnimationDark} onClick={onClickSendMessage}>
        <Icon.Send />
      </a>
    </footer>
  );
};
const mapStateToProps = state => {
  return {
    keyboardShortcutEnabled: state.settings.keyboardShortcutEnabled === 'true'
  };
};

export default connect(mapStateToProps)(MessageInput);

MessageInput.propTypes = {
  onSendMessage: PropTypes.func,
  keyboardShortcutEnabled: PropTypes.bool.isRequired
};

MessageInput.defaultProps = {
  onSendMessage: null
};
