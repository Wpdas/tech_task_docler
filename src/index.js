import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import chatReducer from './store/chat/reducer';
import settingsReducer from './store/settings/reducer';
import userReducer from './store/user/reducer';
import socketReducer from './store/socket_io/reducer';
import Preloader from './containers/Preloader/Preloader';

const reducers = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
  user: userReducer,
  socket_io: socketReducer
});

const store = createStore(reducers);

const DoclerChatApp = () => (
  <Provider store={store}>
    <Preloader />
  </Provider>
);

ReactDOM.render(<DoclerChatApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
