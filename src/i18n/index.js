import i18next from 'i18next';

export const PT = 'pt';
export const EN = 'en';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      translation: {
        chatTitle: { label: 'Chat' },
        enterMessage: { label: 'Enter message' },
        settingsTitle: { label: 'Settings' },
        yourName: { label: 'Your name' },
        interfaceColor: { label: 'Interface color' },
        interfaceColorLight: { label: 'Light' },
        interfaceColorDark: { label: 'Dark' },
        clockDisplay: { label: 'Clock display' },
        clockDisplay12: { label: '12 Hours' },
        clockDisplay24: { label: '24 Hours' },
        sendMessagesOnCTRL_ENTER: { label: 'Send messages on CTRL + ENTER' },
        sendMessagesOnCTRL_ENTERon: { label: 'On' },
        sendMessagesOnCTRL_ENTERoff: { label: 'Off' },
        language: { label: 'Language' },
        enLanguage: { label: 'English' },
        ptLanguage: { label: 'Portuguese' }
      }
    },
    pt: {
      translation: {
        chatTitle: { label: 'Conversa' },
        enterMessage: { label: 'Inserir mensagem' },
        settingsTitle: { label: 'Configurações' },
        yourName: { label: 'Seu nome' },
        interfaceColor: { label: 'Cor da interface' },
        interfaceColorLight: { label: 'Clara' },
        interfaceColorDark: { label: 'Escura' },
        clockDisplay: { label: 'Tipo de relógio' },
        clockDisplay12: { label: '12 Horas' },
        clockDisplay24: { label: '24 Horas' },
        sendMessagesOnCTRL_ENTER: { label: 'Enviar mensagem com CTRL + ENTER' },
        sendMessagesOnCTRL_ENTERon: { label: 'Ativado' },
        sendMessagesOnCTRL_ENTERoff: { label: 'Desativado' },
        language: { label: 'Linguagem' },
        enLanguage: { label: 'Inglês' },
        ptLanguage: { label: 'Português' }
      }
    }
  }
});

export default i18next;
