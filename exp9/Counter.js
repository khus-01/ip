import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  updatestate = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div style={{backgroundColor:'#6a0dad', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>Count is: {this.state.count}</h1>
        <button onClick={this.updatestate}>click ittt</button>
      </div>
    );
  }
}

export default Counter;
