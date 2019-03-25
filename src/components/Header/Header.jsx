import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as routes from '../../routes';
import classes from './Header.module.scss';
import Icon from '../Icon/Icon';
import joinClasses from '../../utils/joinClasses';
import { DARK } from '../../theme/themeTypes';
import i18next from '../../i18n/index';

const Header = ({ history, theme }) => {
  const { location } = history;
  const { pathname } = location;
  const [title, setTitle] = useState('');

  const updateTitle = () => {
    if (pathname === routes.CHAT) {
      setTitle(i18next.t('chatTitle.label'));
    } else if (pathname === routes.SETTINGS) {
      setTitle(i18next.t('settingsTitle.label'));
    }
  };

  useEffect(() => {
    updateTitle();
    i18next.on('languageChanged', updateTitle);

    return () => {
      i18next.off('languageChanged', updateTitle);
    };
  }, []);

  let headerButton;
  const unreadMessages = 2;

  if (pathname === routes.CHAT) {
    headerButton = (
      <NavLink className={classes.buttonAnimationLight} to={routes.SETTINGS} exact>
        <Icon.Settings />
      </NavLink>
    );
  } else if (pathname === routes.SETTINGS) {
    headerButton = (
      <NavLink className={classes.buttonAnimationLight} to={routes.CHAT} exact>
        {unreadMessages ? (
          <span className={classes.Header__unread_messages}>{unreadMessages}</span>
        ) : null}
        <Icon.Chat />
      </NavLink>
    );
  }

  // Set theme
  let headerStyle = classes.Header;
  if (theme === DARK) {
    headerStyle = joinClasses(headerStyle, classes.Header__dark);
  }

  return (
    <header className={headerStyle}>
      <h3 className={classes.Header__title}>{title}</h3>
      {headerButton}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(withRouter(Header));

Header.propTypes = {
  history: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
};
