

import React, { Component } from 'react'

class ComponentDidUpdate extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps, preState, snapshot){
        console.log('ComponentDidUpdate', prevProps,preState,snapshot);


        // this.setState({count: this.state.count + 1});  // it will create infinite loop

        if(preState.count < 5){
            this.setState({count: this.state.count + 1});
        }
    }


  render() {
    console.log('Render')
    return (
     <>
     <h2>Component Did Update</h2>
     <h3>Hello {this.state.count}</h3>
     <button onClick={() => {this.setState({count: 1})}}>Change Name</button>
     </>
    )
  }
}

export default ComponentDidUpdate
