import React, { lazy, Suspense } from 'react';
import classes from './Preloader.module.scss';
import i18Provider from '../../hocs/i18Provider';

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

export default i18Provider(Preloader);
