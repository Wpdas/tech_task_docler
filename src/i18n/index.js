import i18next from 'i18next';

export const PT = 'pt';
export const EN = 'en';

const initialLanguage = localStorage.getItem('language') || 'en';

// Languages setup
i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: initialLanguage,
  resources: {
    en: {
      translation: {
        chatTitle: { label: 'Chat' },
        enterMessage: { label: 'Enter message' },
        settingsTitle: { label: 'Settings' },
        yourName: { label: 'Your name' },
        userNameErrorMessage: { label: 'Insert a valid name' },
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
        ptLanguage: { label: 'Portuguese' },
        resetButton: { label: 'Reset to defaults' },
        newUserInfo: { label: 'joined the chat' },
        userChangeNameInfo: { label: 'changed his/her name to' }
      }
    },
    pt: {
      translation: {
        chatTitle: { label: 'Conversa' },
        enterMessage: { label: 'Inserir mensagem' },
        settingsTitle: { label: 'Configurações' },
        yourName: { label: 'Seu nome' },
        userNameErrorMessage: { label: 'Insira um nome válido' },
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
        ptLanguage: { label: 'Português' },
        resetButton: { label: 'Resetar para o padrão' },
        newUserInfo: { label: 'se juntou ao chat' },
        userChangeNameInfo: { label: 'mudou o nome dele/dela para' }
      }
    }
  }
});

export default i18next;
