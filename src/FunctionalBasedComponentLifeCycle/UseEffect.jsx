import React, {useEffect, useState} from 'react'

const UseEffect = () => {

    const [Count, setCount] = useState(0);
    useEffect(() => {
        console.log('Use Effect in Hooks');
    })

    console.log('Render');

  return (
  <>
  <h2>UseEffect Hooks</h2>
  <h3>Count: {Count}</h3>
  <button onClick={() => setCount( Count+ 1)} >Add Me</button>
  </>
  )
}

export default UseEffect
