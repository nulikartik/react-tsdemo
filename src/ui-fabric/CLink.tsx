import * as React from 'react';
import {Link} from 'react-router-dom'; 
class CLink extends React.Component<any,any> {
  public render() {
    return <Link to={this.props.href} > {this.props.children} </Link> // <a {...this.props} >{this.props.children}</a>
  }
}

export default CLink;
