import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as socketIoActions from '../store/socket_io/actions';

const socket = io('http://localhost:5001');

// Connected to Redux Wrapper Component
class socketIO extends React.Component {
  constructor(props) {
    super(props);

    this.receiveMessageHandler = this.receiveMessageHandler.bind(this);
  }

  componentDidMount() {
    socket.on('server:event', data => {
      console.log(data);
    });

    // When server send message
    socket.on('server:sendMessage', this.receiveMessageHandler);

    const { initSocket } = this.props;
    initSocket(socket, this.sendMessage);
  }

  sendMessage(message) {
    socket.emit('client:sendMessage', message);
  }

  receiveMessageHandler(data) {
    const { onReceiveMessage } = this.props;
    if (onReceiveMessage) {
      onReceiveMessage(data);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapStateToProps = state => {
  return {
    onReceiveMessage: state.socket_io.onReceiveMessage
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
  onReceiveMessage: PropTypes.func.isRequired
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
