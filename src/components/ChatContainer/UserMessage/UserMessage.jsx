import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './UserMessage.module.scss';
import joinClasses from '../../../utils/joinClasses';
import { DARK } from '../../../theme/themeTypes';
import Page from '../../Page/Page';

const UserMessage = ({ children, userName, time, theme }) => {
  let metadata = time;
  if (userName) {
    metadata = `${userName} - ${time}`;
  }

  // Set theme
  let receivedMessageStyle = classes.UserMessage__left;
  let sentMessageStyle = classes.UserMessage__right;
  if (theme === DARK) {
    receivedMessageStyle = joinClasses(receivedMessageStyle, classes.UserMessage__left_dark);
    sentMessageStyle = joinClasses(sentMessageStyle, classes.UserMessage__right_dark);
  }

  return (
    <React.Fragment>
      {userName ? (
        <Page.Fragment className={receivedMessageStyle}>
          <span className={classes.UserMessage__left__metadata_received}>{metadata}</span>
          <div className={classes.UserMessage__left__message_received}>{children}</div>
        </Page.Fragment>
      ) : (
        <Page.Fragment className={sentMessageStyle}>
          <span className={classes.UserMessage__right__metadata_sent}>{metadata}</span>
          <div className={classes.UserMessage__right__message_sent}>{children}</div>
        </Page.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(UserMessage);

UserMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  userName: PropTypes.string,
  time: PropTypes.string,
  theme: PropTypes.string.isRequired
};

UserMessage.defaultProps = {
  userName: null,
  time: ''
};
