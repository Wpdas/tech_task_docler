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

class Settings extends Component {
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
      updateTheme,
      updateClockFormat,
      updateKeyboardShortcut,
      updateLanguage
    } = this.props;

    return (
      <Page.SimplePage>
        <Page.Fragment>
          <Form>
            <Input type="text" placeholder="Your name" />
            <InputRadio
              title="Interface color"
              options={themeOptions}
              checked={theme}
              onChange={updateTheme}
            />
            <InputRadio
              title="Clock display"
              options={clockOptions}
              checked={clockFormat}
              onChange={updateClockFormat}
            />
            <InputRadio
              title="Send messages on CTRL+ENTER"
              options={keyboardShortcutOptions}
              checked={keyboardShortcutEnabled}
              onChange={updateKeyboardShortcut}
            />
            <Select
              title="Language"
              options={languageOptions}
              selected={language}
              onChange={updateLanguage}
            />
            <InputSubmit>Reset to defaults</InputSubmit>
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
    language: state.settings.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTheme: theme => dispatch(settingsActions.updateTheme(theme)),
    updateClockFormat: clockFormat => dispatch(settingsActions.updateClockFormat(clockFormat)),
    updateKeyboardShortcut: enabled => dispatch(settingsActions.updateKeyboardShortcut(enabled)),
    updateLanguage: language => dispatch(settingsActions.updateLanguage(language))
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
  updateTheme: PropTypes.func.isRequired,
  updateClockFormat: PropTypes.func.isRequired,
  updateKeyboardShortcut: PropTypes.func.isRequired,
  updateLanguage: PropTypes.func.isRequired
};
