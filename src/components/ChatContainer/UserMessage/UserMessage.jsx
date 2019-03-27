import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import classes from './UserMessage.module.scss';
import joinClasses from '../../../utils/joinClasses';
import { DARK } from '../../../theme/themeTypes';
import Page from '../../Page/Page';

const UserMessage = ({ children, userName, time, isInfo, theme, clockFormat }) => {
  const formatedDate =
    clockFormat === '24_hours' ? dateFormat(time, 'HH:MM') : dateFormat(time, 'hh:MM');
  let metadata = formatedDate;
  if (userName) {
    metadata = `${userName} - ${formatedDate}`;
  }

  // Set theme
  let receivedMessageStyle = classes.UserMessage__left__message_received;
  let receivedMetadataStyle = classes.UserMessage__left__metadata_received;
  let sentMessageStyle = classes.UserMessage__right__message_sent;
  let sentMetadataStyle = classes.UserMessage__right__metadata_sent;
  let sentInfoMessageStyle = classes.UserMessage__info__message_sent;
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
    sentInfoMessageStyle = joinClasses(
      sentInfoMessageStyle,
      classes.UserMessage__info__message_sent__dark
    );
  }

  let content = (
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

  if (isInfo) {
    content = (
      <Page.Fragment className={classes.UserMessage__info}>
        <div className={sentInfoMessageStyle}>{children}</div>
      </Page.Fragment>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme,
    clockFormat: state.settings.clockFormat
  };
};

export default connect(mapStateToProps)(UserMessage);

UserMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  userName: PropTypes.string,
  time: PropTypes.any,
  isInfo: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  clockFormat: PropTypes.string.isRequired
};

UserMessage.defaultProps = {
  userName: null,
  time: '',
  isInfo: false
};
