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
import i18next from '../../i18n/index';

class Settings extends Component {
  onChangeUserNameHandler(userName) {
    const { showInputErrorMessage, hideInputErrorMessage, updateUserName } = this.props;
    if (userName.length <= 3) {
      showInputErrorMessage();
    } else {
      updateUserName(userName);
      hideInputErrorMessage();
    }
  }

  onClickSubmitButton(event) {
    event.preventDefault();
    const { resetSettings, history } = this.props;
    setTimeout(() => {
      resetSettings();
      history.push(routes.CHAT);
    }, 200);
  }

  render() {
    const {
      themeOptions,
      theme,
      clockOptions,
      clockFormat,
      keyboardShortcutOptions,
      keyboardShortcutEnabled,
      languageOptions,
      language,
      showErrorMessage,
      errorMessage,
      userName,
      updateTheme,
      updateClockFormat,
      updateKeyboardShortcut,
      updateLanguage
    } = this.props;

    const userNamePlaceholder = i18next.t('yourName.label');
    const interfaceColorTitle = i18next.t('interfaceColor.label');
    const clockDisplayTitle = i18next.t('clockDisplay.label');
    const radioTitle = i18next.t('sendMessagesOnCTRL_ENTER.label');
    const languageTitle = i18next.t('language.label');
    const resetButtonText = i18next.t('resetButton.label');

    // console.log(theme, clockFormat, language);

    return (
      <Page.SimplePage>
        <Page.Fragment>
          <Form onSubmit={event => this.onClickSubmitButton(event)}>
            <Input
              type="text"
              placeholder={userNamePlaceholder}
              initialValue={userName}
              errorMessage={errorMessage}
              showErrorMessage={showErrorMessage}
              onChange={event => this.onChangeUserNameHandler(event.target.value)}
            />
            <InputRadio
              title={interfaceColorTitle}
              options={themeOptions}
              checked={theme}
              onChange={updateTheme}
            />
            <InputRadio
              title={clockDisplayTitle}
              options={clockOptions}
              checked={clockFormat}
              onChange={updateClockFormat}
            />
            <InputRadio
              title={radioTitle}
              options={keyboardShortcutOptions}
              checked={keyboardShortcutEnabled}
              onChange={updateKeyboardShortcut}
            />
            <Select
              title={languageTitle}
              options={languageOptions}
              selected={language}
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
    themeOptions: state.settings.themeOptions,
    theme: state.settings.theme,
    clockOptions: state.settings.clockOptions,
    clockFormat: state.settings.clockFormat,
    keyboardShortcutOptions: state.settings.keyboardShortcutOptions,
    keyboardShortcutEnabled: state.settings.keyboardShortcutEnabled,
    languageOptions: state.settings.languageOptions,
    language: state.settings.language,
    showErrorMessage: state.settings.showErrorMessage,
    errorMessage: state.settings.errorMessage,
    userName: state.user.name
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
  themeOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.string.isRequired,
  clockOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  clockFormat: PropTypes.string.isRequired,
  keyboardShortcutOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyboardShortcutEnabled: PropTypes.string.isRequired,
  languageOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
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
