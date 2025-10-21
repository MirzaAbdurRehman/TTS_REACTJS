import React, { Component } from 'react';

class StatesClassComp extends Component {
  constructor() {
    super(); 
    this.state = {
      name: 'Kashif',
    };
  }

  updateName = () => {
    this.setState({ name: 'Dawar' });
  };

  render() {
    console.log('Rendering StatesClassComp');

    return (
      <div>
        <h2>Hey, {this.state.name}</h2>
        <button onClick={this.updateName}>Change Name</button>
        {/* <button onClick={() => this.setState({ name: 'Ali' })}>Change Name</button> */}
      </div>
    );
  }
}

export default StatesClassComp;
