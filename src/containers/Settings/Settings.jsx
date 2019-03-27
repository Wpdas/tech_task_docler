import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from '../../components/Page/Page';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';
import InputRadio from '../../components/Form/InputRadio/InputRadio';
import Select from '../../components/Form/Select/Select';
import InputSubmit from '../../components/Form/InputSubmit/InputSubmit';
import * as settingsActions from '../../store/settings/actions';
import * as userActions from '../../store/user/actions';
import * as routes from '../../routes';
import * as socketService from '../../utils/socketService';
import i18next from '../../i18n';

class Settings extends Component {
  // Check if there is a valid user name
  onChangeUserNameHandler(userName) {
    const { showInputErrorMessage, hideInputErrorMessage } = this.props;
    if (userName.length <= 3) {
      showInputErrorMessage();
    } else {
      hideInputErrorMessage();
    }
  }

  // Update user name
  onBlurUserNameHandler(userName) {
    const { showInputErrorMessage, hideInputErrorMessage, updateUserName } = this.props;
    const previousName =
      localStorage.getItem('userName') || localStorage.getItem('providedUserName');
    if (userName.length <= 3) {
      showInputErrorMessage();
    } else {
      if (previousName !== userName) {
        updateUserName(userName);
        socketService.changeName(previousName, userName);
      }
      hideInputErrorMessage();
    }
  }

  // Reset to default values
  onClickSubmitButton(event) {
    event.preventDefault();
    const { resetSettings, updateUserName, user, history } = this.props;

    const providedUserName = localStorage.getItem('providedUserName');
    const currentUserName = user.name;

    setTimeout(() => {
      resetSettings();
      updateUserName(providedUserName);
      socketService.changeName(currentUserName, providedUserName);
      history.push(routes.CHAT);
    }, 200);
  }

  render() {
    const {
      settings,
      user,
      updateTheme,
      updateClockFormat,
      updateKeyboardShortcut,
      updateLanguage
    } = this.props;

    // Current translated data
    const userNamePlaceholder = i18next.t('yourName.label');
    const interfaceColorTitle = i18next.t('interfaceColor.label');
    const clockDisplayTitle = i18next.t('clockDisplay.label');
    const radioTitle = i18next.t('sendMessagesOnCTRL_ENTER.label');
    const languageTitle = i18next.t('language.label');
    const resetButtonText = i18next.t('resetButton.label');

    return (
      <Page.SimplePage>
        <Page.Fragment>
          <Form onSubmit={event => this.onClickSubmitButton(event)}>
            <Input
              type="text"
              placeholder={userNamePlaceholder}
              initialValue={user.name}
              errorMessage={settings.errorMessage}
              showErrorMessage={settings.showErrorMessage}
              onChange={event => this.onChangeUserNameHandler(event.target.value)}
              onBlur={event => this.onBlurUserNameHandler(event.target.value)}
            />
            <InputRadio
              title={interfaceColorTitle}
              options={settings.themeOptions}
              checked={settings.theme}
              onChange={updateTheme}
            />
            <InputRadio
              title={clockDisplayTitle}
              options={settings.clockOptions}
              checked={settings.clockFormat}
              onChange={updateClockFormat}
            />
            <InputRadio
              title={radioTitle}
              options={settings.keyboardShortcutOptions}
              checked={settings.keyboardShortcutEnabled}
              onChange={updateKeyboardShortcut}
            />
            <Select
              title={languageTitle}
              options={settings.languageOptions}
              selected={settings.language}
              onChange={updateLanguage}
            />
            <InputSubmit>{resetButtonText}</InputSubmit>
          </Form>
        </Page.Fragment>
      </Page.SimplePage>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: userName => dispatch(userActions.updateUserName(userName)),
    updateTheme: theme => dispatch(settingsActions.updateTheme(theme)),
    updateClockFormat: clockFormat => dispatch(settingsActions.updateClockFormat(clockFormat)),
    updateKeyboardShortcut: enabled => dispatch(settingsActions.updateKeyboardShortcut(enabled)),
    updateLanguage: language => dispatch(settingsActions.updateLanguage(language)),
    showInputErrorMessage: () => dispatch(settingsActions.showInputErrorMessage()),
    hideInputErrorMessage: () => dispatch(settingsActions.hideInputErrorMessage()),
    resetSettings: () => dispatch(settingsActions.resetSettings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateUserName: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  updateClockFormat: PropTypes.func.isRequired,
  updateKeyboardShortcut: PropTypes.func.isRequired,
  updateLanguage: PropTypes.func.isRequired,
  showInputErrorMessage: PropTypes.func.isRequired,
  hideInputErrorMessage: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
