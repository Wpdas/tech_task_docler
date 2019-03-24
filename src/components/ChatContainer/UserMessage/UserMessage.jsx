import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserMessage.module.scss';
import Page from '../../Page/Page';

const UserMessage = ({ children, userName, time }) => {
  const metadata = `${userName} - ${time}`;
  return (
    <Page.Fragment className={classes.UserMessage}>
      {children}
      <br />
      <span>{metadata}</span>
    </Page.Fragment>
  );
};

export default UserMessage;

UserMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  userName: PropTypes.string,
  time: PropTypes.string
};

UserMessage.defaultProps = {
  userName: null,
  time: ''
};
