import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { GET_WISHES } from '../../services/wish-service/index';
import Link from '../../ui-fabric/Link';
import './Wish.css';


class Wish extends React.Component {

    public componentDidMount() {
        console.log(GET_WISHES());
    }

    public render() {
        return (
            <div className="App">
                <FormattedMessage id="app.intro"
                    defaultMessage="Default To get started, edit <code>src/App.js</code> and save to reload."
                    description="Text on main page" />
                <Link href="http://google.com" target="_blank">Wish</Link>
            </div>
        );
    }
}

export default Wish;