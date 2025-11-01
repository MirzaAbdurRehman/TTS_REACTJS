

import React from 'react'

class ComponentDidMount extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Shahrukh"
        }
    }


    componentDidMount(){
        console.log('ComponentDidMount Occur')
    }


  render() {

    console.log('Render')
    return (
     <>
     <h2>Component Did Mount</h2>
     <h3>Hello {this.state.name}</h3>
     <button onClick={() => {this.setState({name: "Azeem"})}}>Change Name</button>
     </>
    )
  }
}

export default ComponentDidMount

