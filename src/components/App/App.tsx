import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CLink } from '../../ui-fabric/index';
import Wish from '../Wish/Wish';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <FormattedMessage id="app.title"
              defaultMessage="WishCard"
              description="Default Welcome header on app main page" />
          </h1>
        </header>
        <p className="App-intro">
          <FormattedMessage id="app.intro"
            defaultMessage="Default To get started, edit <code>src/App.js</code> and save to reload."
            description="Text on main page" />
        </p>
        <CLink href="/templates">Wish</CLink>
        <Wish />
      </div>
    );
  }
}

export default App;
