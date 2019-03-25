import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Input.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import joinClasses from '../../../utils/joinClasses';
import { themeColorScheme } from '../../../theme/themeColorScheme';

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
    const themeScheme = themeColorScheme(theme);

    const labelStyle = {
      color: themeScheme.label_color
    };

    const inputStyle = {
      borderBottom: `1px solid ${themeScheme.form_border_color}`,
      color: themeScheme.font_secondary_color
    };

    let errorMessageComponent;
    let classStyles;

    if (showErrorMessage) {
      errorMessageComponent = <ErrorMessage>{errorMessage}</ErrorMessage>;
      classStyles = joinClasses(classes.Input, classes.Input__error);
    } else {
      classStyles = classes.Input;
    }

    return (
      <React.Fragment>
        <span className={classes.Label} style={labelStyle}>
          {placeholder}
        </span>
        <input
          className={classStyles}
          style={inputStyle}
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
