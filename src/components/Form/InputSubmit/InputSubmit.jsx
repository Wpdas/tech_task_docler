import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './InputSubmit.module.scss';
import { DARK } from '../../../theme/themeTypes';
import joinClasses from '../../../utils/joinClasses';

const InputSubmit = React.memo(({ children, theme }) => {
  // Set theme
  let inputSubmitStyle = classes.InputSubmit;
  if (theme === DARK) {
    inputSubmitStyle = joinClasses(inputSubmitStyle, classes.InputSubmit__dark);
  }

  return <input className={inputSubmitStyle} type="submit" value={children} />;
});

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(InputSubmit);

InputSubmit.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  theme: PropTypes.string.isRequired
};
