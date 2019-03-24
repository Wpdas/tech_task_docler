import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.module.scss';

const Form = React.memo(({ children, onSubmit }) => {
  return (
    <form className={classes.Form} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

export default Form;

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit: null
};
