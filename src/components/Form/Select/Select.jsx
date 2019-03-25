import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import classes from './Select.module.scss';
import { DARK } from '../../../theme/themeTypes';
import joinClasses from '../../../utils/joinClasses';
import Page from '../../Page/Page';

const Select = ({ title, onChange, selected, options, theme }) => {
  const onChangeSelection = event => {
    const { value } = event.target;
    if (onChange) {
      onChange(value);
    }
  };

  // Set theme
  let classStyle = classes.Label;
  let selectContainerStyle = classes.Select__select_container;
  if (theme === DARK) {
    classStyle = joinClasses(classes.Label, classes.Label__dark);
    selectContainerStyle = joinClasses(classes.Select__select_container__dark);
  }

  const selectOptions = options.map(option => {
    const uniqId = uniqid();
    return (
      <option key={uniqId} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <Page.Fragment className={classes.Select}>
      <span className={classStyle}>{title}</span>
      <select className={selectContainerStyle} value={selected} onChange={onChangeSelection}>
        {selectOptions}
      </select>
    </Page.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(Select);

Select.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.string.isRequired
};

Select.defaultProps = {
  title: '',
  onChange: null,
  selected: '',
  options: []
};
