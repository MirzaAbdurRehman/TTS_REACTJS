

import React from 'react';

class ComponentDidUnmount extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "Shahrukh",
      time: 0
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount Occur');
    // Set up a timer that increments the 'time' state every second
    this.timer = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount Occur');
    // Clean up the timer when the component unmounts
    clearInterval(this.timer);
  }

  render() {
    console.log('Render');
    return (
      <>
        <h2>Component with Timer</h2>
        <h3>Hello {this.state.name}</h3>
        <h4>Time elapsed: {this.state.time} seconds</h4>
        <button onClick={() => {this.setState({ name: "Azeem" })}}>Change Name</button>
      </>
    )
  }
}

export default ComponentDidUnmount;
