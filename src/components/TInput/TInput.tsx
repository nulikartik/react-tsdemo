import * as React from 'react';
import { connect } from 'react-redux';

const label =  {
  "color": "#fff"
}


class TInput extends React.Component<any> {
  constructor(props: any) {
    super(props);
    console.log("TaskItems", props);
    
    this.rendToDoForm = this.rendToDoForm.bind(this);
  }
  public rendToDoForm(){
   if(this.props.data.type === 'text' ) {
      return ( 
        <div className="form-group">
          <label style={label} > { this.props.data.label } </label>
          <input type='text' onChange={this.props.onChange} data-id={this.props.data.id} value={this.props.data.value} className="form-control" />
        </div>
      )
   }
   else if(this.props.data.type === 'sgmsg' ) {
      return ( 
        <div className="form-group">
          <label style={label} > { this.props.data.label } </label>
          <textarea className="form-control" onChange={this.props.onChange} data-id={this.props.data.id} value={this.props.data.value || " "} />
        </div>
      )
  }
  else {
    return (<div />);
  }
  }
  // public clearInput() {
    
  // }
  public render() {
    return (
      <div>
          {this.rendToDoForm()}
      </div> 
    );
  }
}


export default connect(null, null)(TInput);
