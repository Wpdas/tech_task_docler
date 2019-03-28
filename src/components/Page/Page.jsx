import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Page.module.scss';
import joinClasses from '../../utils/joinClasses';
import { DARK } from '../../theme/themeTypes';

// Container Page to adapt app to Mobile and Desktop
const Container = React.memo(({ children, theme }) => {
  // Set theme
  let containerStyle = classes.Container;
  let sectionStyle = classes.Container__section;
  if (theme === DARK) {
    containerStyle = joinClasses(containerStyle, classes.Container__dark);
    sectionStyle = joinClasses(sectionStyle, classes.Container__section__dark);
  }

  return (
    <div className={containerStyle}>
      <section className={sectionStyle}>{children}</section>
    </div>
  );
});

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

const ThemedContainer = connect(mapStateToProps)(Container);

// Simple Page
const SimplePage = React.memo(({ children, className, removePadding, usePaddingBottom }) => {
  const style = {};
  let classStyles;

  if (usePaddingBottom) {
    style.paddingBottom = '32px';
  }

  if (removePadding) {
    classStyles = className;
  } else {
    classStyles = joinClasses(classes.Page, className);
  }

  return (
    <div className={classStyles} style={style}>
      {children}
    </div>
  );
});

const Fragment = React.memo(({ children, className, style, usePaddingBottom }) => {
  const fragmentStyle = {
    ...style
  };

  if (usePaddingBottom) {
    fragmentStyle.paddingBottom = '32px';
  }

  return (
    <div className={className} style={fragmentStyle}>
      {children}
    </div>
  );
});

// Page Lib Component
const Page = {
  ThemedContainer,
  SimplePage,
  Fragment
};

export default Page;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  theme: PropTypes.string.isRequired
};

SimplePage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  removePadding: PropTypes.bool,
  usePaddingBottom: PropTypes.bool
};

SimplePage.defaultProps = {
  className: null,
  removePadding: false,
  usePaddingBottom: false
};

Fragment.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  usePaddingBottom: PropTypes.bool
};

Fragment.defaultProps = {
  className: null,
  style: null,
  usePaddingBottom: false
};
