import * as React from 'react';
import {Link} from 'react-router-dom'; 
import "./CLink.css";

class CLink extends React.Component<any,any> {
  public render() {
    return <Link className="CLink" to={this.props.href} > {this.props.children} </Link> // <a {...this.props} >{this.props.children}</a>
  }
}

export const cLink =  CLink;
