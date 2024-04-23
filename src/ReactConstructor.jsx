import React, { Component } from "react";

class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handler = this.handler.bind(this);
    this.handler1 = this.handler1.bind(this);
  }

  handler() {
    // Update the state with the new value
    this.setState({ name: 'IEC,Pune' });
    this.setState({ firstname: 'Siddharth' });
    this.setState({ middlename: 'dattatray' });
    this.setState({ lastname: 'todkar' });
    this.setState({ email: 'sid@gmail.com' });
  }
  handler1(){
    this.setState({firstname:"Sid"})
  }

  render() {
    return (
      <div className="ConstructorDemo">
        <h2>Retrieve Value by Clicking the Button</h2>
        <input type="text" value={this.state.name} /><br />
        <input type="text" value={this.state.firstname} /><br />
        <input type="text" value={this.state.middlename} /><br />
        <input type="text" value={this.state.lastname} /><br />
        <input type="text" value={this.state.email} /><br />
        <button onClick={this.handler}>Click Me</button>
        {/* <button onClick={this.handler1}>Click Me</button> */}
        
      </div>
    );
  }
}

export default Constructor;
