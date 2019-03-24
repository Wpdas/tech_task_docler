import React from 'react';
import PropTypes from 'prop-types';
import classes from './Page.module.scss';
import joinClasses from '../../utils/joinClasses';

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
  const classStyle = joinClasses(className, classes.Fragment);
  const fragmentStyle = {
    ...style
  };

  if (usePaddingBottom) {
    fragmentStyle.paddingBottom = '32px';
  }

  return (
    <div className={classStyle} style={fragmentStyle}>
      {children}
    </div>
  );
});

// Page Lib Component
const Page = {
  SimplePage,
  Fragment
};

export default Page;

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
