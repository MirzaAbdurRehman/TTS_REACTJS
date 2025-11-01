import React, { Component } from 'react';

class ShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // This lifecycle determines whether render should happen
  shouldComponentUpdate(nextProps, nextState) {
    // Only allow re-render if count is less than or equal to 5
    if (nextState.count <= 5) {
      return true;
    }
    // Otherwise, stop rendering
    return false;
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render', this.state.count);

    return (
      <>
        <h2>Using shouldComponentUpdate</h2>
        <h3>Hello {this.state.count}</h3>
        <button onClick={this.incrementCount}>Increment Count</button>
      </>
    );
  }
}

export default ShouldComponentUpdate;
