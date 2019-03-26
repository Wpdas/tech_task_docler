import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import UserMessage from '../../components/ChatContainer/UserMessage/UserMessage';
import MessageInput from '../../components/MessageInput/MessageInput';
import * as socketIoActions from '../../store/socket_io/actions';
import * as userActions from '../../store/user/actions';
import { socketMessagesType } from '../../utils/socketUtils';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Format
      // { userName: 'guest001', time: '10:02', text: 'Want to bang tonight?'}
      messages: []
    };

    this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
    this.onReceiveMessageHandler = this.onReceiveMessageHandler.bind(this);

    // Set socket methods (once this will be used everywhere)
    const { sendMessage, setOnReceiveMessageHandler } = this.props;
    this.sendMessage = sendMessage;
    setOnReceiveMessageHandler(this.onReceiveMessageHandler);
  }

  onSendMessageHandler(message) {
    this.sendMessage(message, socketMessagesType.USER_SEND_MESSAGE);
  }

  onReceiveMessageHandler(data) {
    console.log(data);
    const { name, updateUserName } = this.props;

    const { messages } = this.state; // (!) passar isso para o redux
    const updatedMessages = [...messages];

    if (data.type === socketMessagesType.USER_SEND_MESSAGE) {
      const { userName, message } = data;

      console.log('Meu nome:', name, 'Nome server:', userName);
      const currentUserName = userName === name ? '' : userName;

      console.log(currentUserName, userName === name);

      updatedMessages.push({ userName: currentUserName, time: '10:00', text: message });
    } else if (data.type === socketMessagesType.NEW_USER) {
      const { userName } = data;

      // Verificar nome do localhost (pelo redux)
      updateUserName(userName, true);

      // Criar estilo para usuario que entrou
      updatedMessages.push({ userName, time: '10:00', text: 'Entrou' });
    }

    this.setState({
      messages: updatedMessages
    });
  }

  render() {
    const { messages } = this.state;
    const shownMessages = messages.map(message => {
      const key = uniqid();
      return (
        <UserMessage key={key} userName={message.userName} time={message.time}>
          {message.text}
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
    socket: state.socket_io.socket,
    sendMessage: state.socket_io.sendMessage,
    name: state.user.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOnReceiveMessageHandler: handler =>
      dispatch(socketIoActions.setOnReceiveMessageHandler(handler)),
    updateUserName: (newName, providedByServer) =>
      dispatch(userActions.updateUserName(newName, providedByServer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

Chat.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  setOnReceiveMessageHandler: PropTypes.func.isRequired,
  updateUserName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
