import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './MessageInput.module.scss';
import i18next from '../../i18n';
import Icon from '../Icon/Icon';
import * as chatActions from '../../store/chat/actions';

const MessageInput = ({ onSendMessage, keyboardShortcutEnabled, typedText, updateTypedText }) => {
  const messageRef = React.createRef();
  const placeholder = i18next.t('enterMessage.label');

  const onClickSendMessage = () => {
    const message = messageRef.current.value;
    if (onSendMessage && message.length) {
      updateTypedText('');
      onSendMessage(message);
    }

    messageRef.current.value = '';
  };

  const onKeyPressHandler = event => {
    updateTypedText(messageRef.current.value);
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
        defaultValue={typedText}
      />
      <a className={classes.buttonAnimationDark} onClick={onClickSendMessage}>
        <Icon.Send />
      </a>
    </footer>
  );
};
const mapStateToProps = state => {
  return {
    keyboardShortcutEnabled: state.settings.keyboardShortcutEnabled === 'true',
    typedText: state.chat.typedText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTypedText: text => dispatch(chatActions.updateTypedText(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);

MessageInput.propTypes = {
  onSendMessage: PropTypes.func,
  keyboardShortcutEnabled: PropTypes.bool.isRequired,
  typedText: PropTypes.string.isRequired,
  updateTypedText: PropTypes.func.isRequired
};

MessageInput.defaultProps = {
  onSendMessage: null
};
