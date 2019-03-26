import React, { lazy, Suspense } from 'react';
import classes from './Preloader.module.scss';
import i18Provider from '../../hocs/i18Provider';
import socketIOProvider from '../../hocs/socketIOProvider';

const App = lazy(() => import('../../App'));

const Preloader = () => {
  const fallback = (
    <div className={classes.Preloader}>
      <div className={classes.animatedLogo} />
    </div>
  );
  return (
    <Suspense fallback={fallback}>
      <App />
    </Suspense>
  );
};

export default socketIOProvider(i18Provider(Preloader));
