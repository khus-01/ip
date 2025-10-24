import React, { Component } from 'react';

class Ref extends Component {
  userRef = React.createRef();

  edit = () => {
    const input = this.userRef.current;
    input.style.color = "red";
    input.style.backgroundColor = "yellow";
    input.style.fontSize = "10px";
  };

  hide = () => {
    this.userRef.current.style.display = "none";
  };

  render() {
    return (
      <div>
        <input ref={this.userRef} placeholder="Enter name" />
        <button onClick={this.edit}>Done</button>
        <button onClick={this.hide}>Delete</button>
      </div>
    );
  }
}

export default Ref;
