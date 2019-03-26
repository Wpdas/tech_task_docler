import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './routes';
import Header from './components/Header/Header';
import Chat from './containers/Chat/Chat';
import Settings from './containers/Settings/Settings';
// import socketIOProvider from './hocs/socketIOProvider';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.CHAT} component={Chat} exact />
        <Route path={routes.SETTINGS} component={Settings} exact />
        <Redirect to={routes.CHAT} exact />
      </Switch>
    </Router>
  );
};

export default App;
