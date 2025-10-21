import React from 'react';



// A simple function-based component
// Export single components from a single file use the below 1st way
// 1ST WAY OF DECLARING FUNCTION BASED COMPONENT



// function FunctionBasedComp() {
//     return (
//         <div>
//             <h2>This is a Function Based Component</h2>
//             <p>Function components are simpler and easier to read.</p>
//         </div>
//     );
// }

// export default FunctionBasedComp;



// 2ND WAY OF DECLARING FUNCTION BASED COMPONENT USING ARROW FUNCTION
// Export multiple components from a single file use the below 2nd way


export function FunctionBasedComp() {
    return (
        <div>
            <h2>This is a Function Based Component</h2>
            <p>Function components are simpler and easier to read.</p>
        </div>
    );
}