import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as socketService from '../utils/socketService';

// Connected to Redux Wrapper Component
class socketIO extends React.Component {
  componentDidMount() {
    socketService.connect();
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// Connect socketIO to Redux
const SocketIOConnected = connect(mapStateToProps)(socketIO);

socketIO.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
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
