import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import UserMessage from '../../components/ChatContainer/UserMessage/UserMessage';
import MessageInput from '../../components/MessageInput/MessageInput';
import * as socketIoActions from '../../store/socket_io/actions';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          userName: 'guest001',
          time: '10:02',
          text: 'Want to bang tonight?'
        },
        {
          userName: 'guest001',
          time: '10:02',
          text: 'I meant hang.'
        },
        {
          userName: 'guest001',
          time: '10:02',
          text: 'Duck, auto-cucumber.'
        },
        { userName: '', time: '10:08', text: 'What?' },
        {
          userName: 'guest001',
          time: '10:09',
          text: 'God donut.'
        },
        {
          userName: 'guest001',
          time: '10:09',
          text: 'How the duck do I turn this off?'
        },
        { userName: '', time: '10:10', text: ':))))' }
      ]
    };

    this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
    this.onReceiveMessageHandler = this.onReceiveMessageHandler.bind(this);

    // Set socket methods (once this will be used everywhere)
    const { sendMessage, setOnReceiveMessageHandler } = this.props;
    this.sendMessage = sendMessage;
    setOnReceiveMessageHandler(this.onReceiveMessageHandler);
  }

  onSendMessageHandler(message) {
    this.sendMessage(message);
  }

  onReceiveMessageHandler(data) {
    console.log(data);

    const { messages } = this.state;
    const updatedMessages = [...messages];

    updatedMessages.push({ userName: '', time: '10:00', text: 'any' });

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
    sendMessage: state.socket_io.sendMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOnReceiveMessageHandler: handler =>
      dispatch(socketIoActions.setOnReceiveMessageHandler(handler))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

Chat.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  setOnReceiveMessageHandler: PropTypes.func.isRequired
};
