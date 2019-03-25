import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './routes';
import chatReducer from './store/chat/reducer';
import settingsReducer from './store/settings/reducer';
import userReducer from './store/user/reducer';
import Header from './components/Header/Header';
import Chat from './containers/Chat/Chat';
import Settings from './containers/Settings/Settings';

const reducers = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
  user: userReducer
});

const store = createStore(reducers);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path={routes.CHAT} component={Chat} exact />
          <Route path={routes.SETTINGS} component={Settings} exact />
          <Redirect to={routes.CHAT} exact />
        </Switch>
      </Router>
      <header />
    </Provider>
  );
};

export default App;
