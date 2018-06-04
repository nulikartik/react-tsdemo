import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import Create from './components/Create/Create';
import Template from './components/Template/Template';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './stateManagement/reducers/index';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
const de = require('react-intl/locale-data/de');
const en = require('react-intl/locale-data/en');

const messages = {
  'de': messages_de,
  'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

console.log(language);
addLocaleData([...en, ...de]);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}  >
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={App}  />
          <Route path="/templates/:wishSlug" component={Template}  />
          <Route path="/wish/create" component={Create}  />
        </div>
      </BrowserRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();