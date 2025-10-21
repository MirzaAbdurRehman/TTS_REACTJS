import React, {useState} from 'react'


// Props is used to pass data from one component to another component  (parent to child)
// main used communication between components
// Props are read-only (immutable) cannot be modified inside the component receiving them

function Props_FuncComp(props) {

    const [FirstName, setName] = useState(props.name);
  return (
    <div>
        <h2>Hey, {FirstName}</h2>
        <button onClick={() => setName("Dawar")}> Change Name</button>
    </div>
  )
}

export default Props_FuncComp
