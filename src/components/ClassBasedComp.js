import React, { Component } from 'react';


// A simple class-based component
// Export single components from a single file use the below 1st way
// 1ST WAY OF DECLARING Class BASED COMPONENT

// class ClassBasedComp extends Component{
//     render(){
//         return (
//             <div>
//                 <h2>This is a Class Based Component</h2>
//                 <p>Class components are more feature-rich but can be more complex.</p>
//             </div>
//         );
//     }
// }

// export default ClassBasedComp;




// 2ND WAY OF DECLARING Class BASED COMPONENT
// Export multiple components from a single file use the below 2nd way

export class ClassBasedComp extends Component{
    render(){
        return (
            <div>
                <h2>This is a Class Based Component</h2>
                <p>Class components are more feature-rich but can be more complex.</p>
            </div>
        );
    }   
}




