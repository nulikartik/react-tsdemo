import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import logo from '../../logo.svg';
import Link from '../../ui-fabric/Link';
import './App.css';


class App extends React.Component {
  public render() {   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
        <FormattedMessage id="app.title"
                          defaultMessage="Welcome to {what}"
                          description="Default Welcome header on app main page"
                          values={{ what: 'react-intl' }}/>
    </h1>
        </header>
        <p className="App-intro">
        <FormattedMessage id="app.intro"
                          defaultMessage="Default To get started, edit <code>src/App.js</code> and save to reload."
                          description="Text on main page"/>
        </p>
        <Link href="http://google.com" target="_blank">Wish</Link>
      </div>
    );
  }
}

export default App;
