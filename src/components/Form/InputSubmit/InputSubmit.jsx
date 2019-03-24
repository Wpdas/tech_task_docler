import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputSubmit.module.scss';

const InputSubmit = React.memo(({ children }) => {
  return <input className={classes.InputSubmit} type="submit" value={children} />;
});

export default InputSubmit;

InputSubmit.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
