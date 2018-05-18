import * as React from 'react';

class Link extends React.Component<any,any> {
  public render() {
    return <a {...this.props} >{this.props.children}</a>
  }
}

export default Link;
