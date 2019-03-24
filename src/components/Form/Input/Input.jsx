import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import joinClasses from '../../../utils/joinClasses';

const Input = React.memo(
  ({ type, placeholder, onChange, required, reference, errorMessage, showErrorMessage }) => {
    let errorMessageComponent;
    let styles;

    if (showErrorMessage) {
      errorMessageComponent = <ErrorMessage>{errorMessage}</ErrorMessage>;
      styles = joinClasses(classes.Input, classes.Input__error);
    } else {
      styles = classes.Input;
    }

    return (
      <React.Fragment>
        <span className={classes.Label}>{placeholder}</span>
        <input
          className={styles}
          type={type}
          onChange={onChange}
          required={required}
          ref={reference}
        />
        {errorMessageComponent}
      </React.Fragment>
    );
  }
);

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  reference: PropTypes.object,
  errorMessage: PropTypes.string,
  showErrorMessage: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  onChange: null,
  placeholder: null,
  required: false,
  reference: null,
  errorMessage: null,
  showErrorMessage: false
};
