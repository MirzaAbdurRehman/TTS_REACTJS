import React from 'react';
function ClickEvents_Func() {

    let firstname = "Ali";
    const handleClick = () => {
        let firstname = "Ahmed";
        alert(`Hey This is My ${firstname}`);
    }

    console.log(firstname); // Ali

    
    return (
        <div>
            <h2>Handling Click Events in Function-Based Component</h2>
            <button onClick={handleClick}>Click Me</button>
            <br />
            <button onClick={() => alert(`Hey! ${firstname}`)}>Click Me</button>
        </div>
    );
}

export default ClickEvents_Func;
