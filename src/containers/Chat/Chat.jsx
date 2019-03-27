import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import UserMessage from '../../components/ChatContainer/UserMessage/UserMessage';
import MessageInput from '../../components/MessageInput/MessageInput';
import * as chatActions from '../../store/chat/actions';
import * as socketService from '../../utils/socketService';
import i18next from '../../i18n';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.onFriendEnter = this.onFriendEnter.bind(this);
    this.onFriendSendMessage = this.onFriendSendMessage.bind(this);
    this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
    this.onFriendChangeName = this.onFriendChangeName.bind(this);
  }

  componentDidMount() {
    socketService.onFriendEnter(this.onFriendEnter);
    socketService.onFriendSendMessage(this.onFriendSendMessage);
    socketService.onFriendChangeName(this.onFriendChangeName);
  }

  onFriendEnter(friendName) {
    const { addMessage } = this.props;
    addMessage(
      '',
      `${friendName} ${i18next.t('newUserInfo.label')}`,
      chatActions.messageTypes.NEW_USER
    );
  }

  onFriendSendMessage(data) {
    const { addMessage } = this.props;
    addMessage(data.from, data.message, chatActions.messageTypes.NEW_MESSAGE);
  }

  onFriendChangeName(data) {
    const { addMessage } = this.props;
    addMessage(
      '',
      `${data.previousName} ${i18next.t('userChangeNameInfo.label')} ${data.currentName}`,
      chatActions.messageTypes.USER_CHANGE_NAME
    );
  }

  onSendMessageHandler(message) {
    const { addMessage } = this.props;
    addMessage('', message, chatActions.messageTypes.SEND_MESSAGE);
    socketService.sendMessage(message);
  }

  render() {
    const { chat } = this.props;
    const { messages } = chat;
    const shownMessages = messages.map(message => {
      const key = uniqid();
      const text = message.text;
      const time = message.time;
      const userName = message.userName;
      let isInfo = false;

      if (
        message.type === chatActions.messageTypes.NEW_USER ||
        message.type === chatActions.messageTypes.USER_CHANGE_NAME
      ) {
        isInfo = true;
      }

      return (
        <UserMessage key={key} userName={userName} time={time} isInfo={isInfo}>
          {text}
        </UserMessage>
      );
    });

    return (
      <Page.SimplePage removePadding>
        <ChatContainer>{shownMessages}</ChatContainer>
        <MessageInput onSendMessage={this.onSendMessageHandler} />
      </Page.SimplePage>
    );
  }
}

const mapStateToProps = state => {
  return {
    chat: state.chat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (userName, text, type) => dispatch(chatActions.addMessage(userName, text, type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  chat: PropTypes.object.isRequired
};
