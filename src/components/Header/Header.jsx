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

  if (pathname === routes.CHAT) {
    headerButton = (
      <NavLink className={classes.Header__icon_button} to={routes.SETTINGS} exact>
        <Icon.Settings />
      </NavLink>
    );
    title = 'Chat';
  } else if (pathname === routes.SETTINGS) {
    headerButton = (
      <NavLink className={classes.Header__icon_button} to={routes.CHAT} exact>
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
