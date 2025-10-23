
import React, {useState} from 'react'

function GetDataInputFiled() {

    const [inputValue, setInputValue] = useState("");
    const [isNotSubmit, isSubmit] = useState(false);

    function getValue(data){
        setInputValue(data.target.value);  // data get from input field
        isSubmit(false)
    }

  return (
    <div>
        {
            isNotSubmit ? <h4> { inputValue } </h4> : null
        }
      <input type="text" onChange={getValue}/>
      <button onClick={() => isSubmit(true)}> Display Value</button>
    </div>
  )
}

export default GetDataInputFiled;
