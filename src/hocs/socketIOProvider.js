import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as socketIoActions from '../store/socket_io/actions';
import { socketEventsType } from '../utils/socketUtils';

const socket = io('http://localhost:5001');

// Connected to Redux Wrapper Component
class socketIO extends React.Component {
  constructor(props) {
    super(props);

    this.receiveMessageHandler = this.receiveMessageHandler.bind(this);
  }

  componentDidMount() {
    // When server send message
    socket.on(socketEventsType.SERVER_SEND_MESSAGE, this.receiveMessageHandler);

    // Init Redux setup
    const { initSocket } = this.props;
    initSocket(socket, this.sendMessage);
  }

  sendMessage(message, type) {
    const { name } = this.props;
    console.log(message, type, this.props);

    // When I send a message
    const newMessage = JSON.stringify({
      type,
      userName: name,
      message
    });
    socket.emit(socketEventsType.CLIENT_SEND_MESSAGE, newMessage);
  }

  receiveMessageHandler(data) {
    const { onReceiveMessage } = this.props;
    if (onReceiveMessage) {
      onReceiveMessage(JSON.parse(data));
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapStateToProps = state => {
  return {
    onReceiveMessage: state.socket_io.onReceiveMessage,
    name: state.user.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initSocket: (socketInstance, sendMessage) =>
      dispatch(socketIoActions.initSocket(socketInstance, sendMessage))
  };
};

// Connect socketIO to Redux
const SocketIOConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(socketIO);

socketIO.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  initSocket: PropTypes.func.isRequired,
  onReceiveMessage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

// Hoc
const socketIOProvider = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <SocketIOConnected>
          <WrappedComponent {...this.props} />
        </SocketIOConnected>
      );
    }
  };
};

export default socketIOProvider;
