

import React, { PureComponent } from 'react'

class Pure_component extends PureComponent {


    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
  render() {

    console.log('Re - Rendering');
    return (
      <>
      <h2>Pure Components</h2>
      <h3>Count: {this.state.count}</h3>
      <button onClick={() => this.setState({count: 1})} >Counter</button>
      </>
    )
  }
}

export default Pure_component
