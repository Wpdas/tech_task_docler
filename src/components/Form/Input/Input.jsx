import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Input.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import joinClasses from '../../../utils/joinClasses';
import { DARK } from '../../../theme/themeTypes';

const Input = React.memo(
  ({
    type,
    placeholder,
    onChange,
    required,
    reference,
    errorMessage,
    showErrorMessage,
    initialValue,
    theme
  }) => {
    // const themeScheme = themeColorScheme(theme);

    // Set theme
    let labelStyle = classes.Label;
    let inputStyle = classes.Input;
    let errorMessageComponent;

    if (showErrorMessage) {
      errorMessageComponent = <ErrorMessage>{errorMessage}</ErrorMessage>;
      inputStyle = joinClasses(classes.Input, classes.Input__error);
    } else {
      inputStyle = classes.Input;
    }

    if (theme === DARK) {
      labelStyle = joinClasses(labelStyle, classes.Label__dark);
      inputStyle = joinClasses(inputStyle, classes.Input__dark);
    }

    return (
      <React.Fragment>
        <span className={labelStyle}>{placeholder}</span>
        <input
          className={inputStyle}
          type={type}
          onChange={onChange}
          required={required}
          ref={reference}
          defaultValue={initialValue}
        />
        {errorMessageComponent}
      </React.Fragment>
    );
  }
);

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(Input);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  reference: PropTypes.object,
  errorMessage: PropTypes.string,
  showErrorMessage: PropTypes.bool,
  initialValue: PropTypes.string,
  theme: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: 'text',
  onChange: null,
  placeholder: null,
  required: false,
  reference: null,
  errorMessage: null,
  showErrorMessage: false,
  initialValue: ''
};
