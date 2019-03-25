import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import classes from './InputRadio.module.scss';
import Page from '../../Page/Page';

const InputRadio = React.memo(({ title, onChange, checked, options }) => {
  const [checkedOption, setCheckedOption] = useState(checked);

  const onChangeOption = event => {
    setCheckedOption(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const radios = options.map(radioData => {
    const uniqId = uniqid();
    return (
      <label key={uniqId} htmlFor={uniqId} className={classes.InputRadio__option}>
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
      <span className={classes.Label}>{title}</span>
      <Page.Fragment className={classes.InputRadio}>{radios}</Page.Fragment>
    </Page.Fragment>
  );
});

export default InputRadio;

InputRadio.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object)
};

InputRadio.defaultProps = {
  title: '',
  onChange: null,
  checked: '',
  options: []
};
