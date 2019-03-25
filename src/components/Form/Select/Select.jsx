import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import classes from './Select.module.scss';
import { themeColorScheme } from '../../../theme/themeColorScheme';
import { DARK } from '../../../theme/themeTypes';
import joinClasses from '../../../utils/joinClasses';
import Page from '../../Page/Page';

const Select = React.memo(({ title, onChange, selected, options, theme }) => {
  const themeScheme = themeColorScheme(theme);

  let classStyle = classes.Label;
  if (theme === DARK) {
    classStyle = joinClasses(classes.Label, classes.Label__dark);
  }

  const selectContainerStyle = {
    borderBottom: `1px solid ${themeScheme.form_border_color}`,
    color: themeScheme.font_secondary_color
  };

  const selectOptions = options.map(option => {
    const uniqId = uniqid();
    return (
      <option key={uniqId} value={option.value}>
        {option.label}
      </option>
    );
  });

  const onChangeSelection = event => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Page.Fragment className={classes.Select}>
      <span className={classStyle}>{title}</span>
      <select
        className={classes.Select__select_container}
        style={selectContainerStyle}
        defaultValue={selected}
        onChange={onChangeSelection}
      >
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
