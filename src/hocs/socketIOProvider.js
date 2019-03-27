import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as socketService from '../utils/socketService';
import * as userActions from '../store/user/actions';

// Connected to Redux Wrapper Component
class socketIO extends React.Component {
  constructor(props) {
    super(props);

    this.onUserConnectHandler = this.onUserConnectHandler.bind(this);
  }

  componentDidMount() {
    socketService.onConnect(this.onUserConnectHandler);
    socketService.connect();
  }

  onUserConnectHandler(userName) {
    const { updateUserName } = this.props;
    updateUserName(userName);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: userName => dispatch(userActions.updateUserName(userName))
  };
};

// Connect socketIO to Redux
const SocketIOConnected = connect(
  null,
  mapDispatchToProps
)(socketIO);

socketIO.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  updateUserName: PropTypes.func.isRequired
};

// Hoc - Launches the socketIO and connects the application to it
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
