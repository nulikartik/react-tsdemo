import * as React from 'react';

import * as ReactDOM from 'react-dom';

import App from './App';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';

import { addLocaleData } from "react-intl";

import locale_en from 'react-intl/locale-data/en';

import locale_de from 'react-intl/locale-data/de';

import messages_de from "./translations/de.json";

import messages_en from "./translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

addLocaleData([...locale_en, ...locale_de]);
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
