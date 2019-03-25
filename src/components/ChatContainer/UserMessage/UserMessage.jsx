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
  let receivedMessageStyle = classes.UserMessage__left__message_received;
  let receivedMetadataStyle = classes.UserMessage__left__metadata_received;
  let sentMessageStyle = classes.UserMessage__right__message_sent;
  let sentMetadataStyle = classes.UserMessage__right__metadata_sent;
  if (theme === DARK) {
    receivedMessageStyle = joinClasses(
      receivedMessageStyle,
      classes.UserMessage__left__message_received__dark
    );
    receivedMetadataStyle = joinClasses(
      receivedMetadataStyle,
      classes.UserMessage__left__metadata_received__dark
    );
    sentMessageStyle = joinClasses(
      sentMessageStyle,
      classes.UserMessage__right__message_sent__dark
    );
    sentMetadataStyle = joinClasses(
      sentMetadataStyle,
      classes.UserMessage__right__metadata_sent__dark
    );
  }

  return (
    <React.Fragment>
      {userName ? (
        <Page.Fragment className={classes.UserMessage__left}>
          <span className={receivedMetadataStyle}>{metadata}</span>
          <div className={receivedMessageStyle}>{children}</div>
        </Page.Fragment>
      ) : (
        <Page.Fragment className={classes.UserMessage__right}>
          <span className={sentMetadataStyle}>{metadata}</span>
          <div className={sentMessageStyle}>{children}</div>
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
