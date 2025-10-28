

import React from 'react'

const FunctionAsProps = (props) => {
  return (
  <>
  <h2>Function AS A Props</h2>
  <p>Name: {props.name}</p>
  <p>Age:  {props.age}</p>
  <p>Location: {props.location}</p>
  <button onClick={() => props.data(props.name, props.age, props.location)}>Click</button>
  </>
  )
}

export default FunctionAsProps
