import React, { Component } from 'react';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import UserMessage from '../../components/ChatContainer/UserMessage/UserMessage';
import MessageInput from '../../components/MessageInput/MessageInput';

class Chat extends Component {
  onSendMessageHandler(message) {
    console.log(message);
  }

  render() {
    return (
      <Page.SimplePage removePadding>
        <ChatContainer>
          <UserMessage userName="guest001" time="10:02">
            Want to bang tonight?
          </UserMessage>
          <UserMessage userName="guest001" time="10:02">
            I meant hang.
          </UserMessage>
          <UserMessage userName="guest001" time="10:02">
            Duck, auto-cucumber.
          </UserMessage>
          <UserMessage time="10:08">What?</UserMessage>
          <UserMessage userName="guest001" time="10:09">
            God donut.
          </UserMessage>
          <UserMessage userName="guest001" time="10:09">
            How the duck do I turn this off?
          </UserMessage>
          <UserMessage time="10:10">:))))</UserMessage>
        </ChatContainer>
        <MessageInput onSendMessage={this.onSendMessageHandler} />
      </Page.SimplePage>
    );
  }
}

export default Chat;
