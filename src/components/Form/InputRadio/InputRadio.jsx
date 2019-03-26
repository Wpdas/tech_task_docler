import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import classes from './InputRadio.module.scss';
import { DARK } from '../../../theme/themeTypes';
import joinClasses from '../../../utils/joinClasses';
import Page from '../../Page/Page';

const InputRadio = ({ title, onChange, checked, options, theme }) => {
  const [checkedOption, setCheckedOption] = useState(checked);

  const onChangeOption = event => {
    setCheckedOption(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  // Set theme
  let labelStyle = classes.Label;
  let optionStyle = classes.InputRadio__option;
  let inputStyle = classes.InputRadio;
  if (theme === DARK) {
    labelStyle = joinClasses(labelStyle, classes.Label__dark);
    inputStyle = joinClasses(inputStyle, classes.InputRadio__dark);
    optionStyle = joinClasses(optionStyle, classes.InputRadio__option__dark);
  }

  const radios = options.map(radioData => {
    const uniqId = uniqid();
    return (
      <label key={uniqId} htmlFor={uniqId} className={optionStyle}>
        <input
          id={uniqId}
          type="radio"
          name={radioData.value}
          value={radioData.value}
          onChange={onChangeOption}
          checked={checkedOption === radioData.value}
        />
        <span>{radioData.label}</span>
      </label>
    );
  });

  return (
    <Page.Fragment className={classes.Margin}>
      <span className={labelStyle}>{title}</span>
      <Page.Fragment className={inputStyle}>{radios}</Page.Fragment>
    </Page.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(InputRadio);

InputRadio.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.string.isRequired
};

InputRadio.defaultProps = {
  title: '',
  onChange: null,
  checked: '',
  options: []
};
