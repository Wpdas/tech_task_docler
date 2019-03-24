import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <div className={classes.loader} />
    </div>
  );
};

export default Spinner;
