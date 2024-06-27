import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1 className="App">{this.state.count}</h1>
        <button className="btn" onClick={()=>this.increase()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
