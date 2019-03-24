import React from 'react';
import PropTypes from 'prop-types';
import classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ children }) => {
  return <div className={classes.ErrorMessage}>{children}</div>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
