import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import classes from './Select.module.scss';
import { themeColorScheme } from '../../../theme/themeColorScheme';
import Page from '../../Page/Page';

const Select = React.memo(({ title, onChange, selected, options, theme }) => {
  console.log(title, onChange, selected, options, theme, uniqid());
  const themeScheme = themeColorScheme(theme);
  console.log(themeScheme);

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
      <span className={classes.Label}>{title}</span>
      <select className={classes.Select__select_container} defaultValue={selected}>
        {selectOptions}
      </select>
    </Page.Fragment>
  );
});

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
