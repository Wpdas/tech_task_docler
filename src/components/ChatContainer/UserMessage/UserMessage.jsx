import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserMessage.module.scss';
import Page from '../../Page/Page';

const UserMessage = ({ children, userName, time }) => {
  let metadata = time;
  if (userName) {
    metadata = `${userName} - ${time}`;
  }

  return (
    <React.Fragment>
      {userName ? (
        <Page.Fragment className={classes.UserMessage__left}>
          <span className={classes.UserMessage__left__metadata_received}>{metadata}</span>
          <div className={classes.UserMessage__left__message_received}>{children}</div>
        </Page.Fragment>
      ) : (
        <Page.Fragment className={classes.UserMessage__right}>
          <span className={classes.UserMessage__right__metadata_sent}>{metadata}</span>
          <div className={classes.UserMessage__right__message_sent}>{children}</div>
        </Page.Fragment>
      )}
    </React.Fragment>
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
