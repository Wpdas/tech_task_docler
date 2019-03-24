import React, { Component } from 'react';
import uniqid from 'uniqid';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import UserMessage from '../../components/ChatContainer/UserMessage/UserMessage';
import MessageInput from '../../components/MessageInput/MessageInput';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        { userName: 'guest001', time: '10:02', text: 'Want to bang tonight?' },
        { userName: 'guest001', time: '10:02', text: 'I meant hang.' },
        { userName: 'guest001', time: '10:02', text: 'Duck, auto-cucumber.' },
        { userName: '', time: '10:08', text: 'What?' },
        { userName: 'guest001', time: '10:09', text: 'God donut.' },
        { userName: 'guest001', time: '10:09', text: 'How the duck do I turn this off?' },
        { userName: '', time: '10:10', text: ':))))' }
      ]
    };

    this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
  }

  onSendMessageHandler(message) {
    const { messages } = this.state;
    const updatedMessages = [...messages];

    updatedMessages.push({ userName: '', time: '10:00', text: message });

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

export default Chat;
