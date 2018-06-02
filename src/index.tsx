import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import store from './stateManagement/reducers/index';
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

console.log(language);
addLocaleData([...en, ...de]);

class Hello extends React.Component {
  public constructor(props:JSON){
    super(props);
    console.log(props);
  }

  public render() { return <div> Hello </div> }
}

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}  >
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={App}  />
          <Route path="/templates/:wishslug" component={Hello}  />
        </div>
      </BrowserRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();