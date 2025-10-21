

import React, {useState} from 'react'

// states return two values one is current value and second is function to update the value

function StatesFunctionComp() {

    const [name, setName] = useState("Kashif");

    function updateName(){
        setName("Dawar")
    }

    console.log('Rendering StatesFunctionComp');

  return (
    <div>
      <h2>Hey, {name}</h2>
        <button onClick={updateName}> Change Name</button>
      {/* <button onClick={() => setName("Ali")}> Change Name</button> */}
    </div>
  )
}


export default StatesFunctionComp
