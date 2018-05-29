import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './index.css';
import store from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
const de = require('react-intl/locale-data/de');
const en = require('react-intl/locale-data/en');


const messages = {
  'de': messages_de,
  'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];
// language = "de"
console.log(language);
addLocaleData([...en, ...de]);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}  >
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();