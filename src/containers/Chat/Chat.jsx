import React, { Component } from 'react';
import Page from '../../components/Page/Page';
import ChatContainer from '../../components/ChatContainer/ChatContainer';

class Chat extends Component {
  componentDidMount() {}

  render() {
    return (
      <Page.SimplePage>
        <ChatContainer />
      </Page.SimplePage>
    );
  }
}

export default Chat;
