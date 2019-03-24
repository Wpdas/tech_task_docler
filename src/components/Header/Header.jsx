import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import * as routes from '../../routes';
import classes from './Header.module.scss';
import Icon from '../Icon/Icon';

const Header = ({ history }) => {
  const { location } = history;
  const { pathname } = location;

  let headerButton;
  let title;
  const unreadMessages = 2;

  if (pathname === routes.CHAT) {
    headerButton = (
      <NavLink className={classes.buttonAnimationLight} to={routes.SETTINGS} exact>
        <Icon.Settings />
      </NavLink>
    );
    title = 'Chat';
  } else if (pathname === routes.SETTINGS) {
    headerButton = (
      <NavLink className={classes.buttonAnimationLight} to={routes.CHAT} exact>
        {unreadMessages ? (
          <span className={classes.Header__unread_messages}>{unreadMessages}</span>
        ) : null}
        <Icon.Chat />
      </NavLink>
    );
    title = 'Settings';
  }

  return (
    <header className={classes.Header}>
      <h3 className={classes.Header__title}>{title}</h3>
      {headerButton}
    </header>
  );
};

export default withRouter(Header);

Header.propTypes = {
  history: PropTypes.object.isRequired
};
