

import React, { useState } from 'react';

function FormHandlingvalid() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [errPass, setErrPass] = useState(false);

    function login(e){
        if(email.length < 3 || password.length < 6){
            alert("Please fill the form correctly");
            return;
        }
        else{
            alert("Form Submitted Successfully");
        
        }
        e.preventDefault();
        console.log(email, password);
    }

    function validateEmail(e){
        let element = e.target.value;
        if(!element.includes('@')){
            setErr(true);
        } else{
            setErr(false);
        }
        setEmail(element);
    }

    function validatePassword(e){
        let element = e.target.value;
        if(element.length < 6){
            setErrPass(true);
        } else{
            setErrPass(false);
        }
        setPassword(element);
    }


   return (
 <>
  <h1>Form Handling</h1>
  <form onSubmit={login}>
    {/* Email Input */}
    <input
      type="text"
      placeholder="Enter Email"
      onChange={validateEmail}
      style={err ? { border: "1px solid red" } : null}
    />
    <br />
    {/* Show red text if email is invalid */}
    {err && (
      <small style={{ color: "red" }}>
        Please enter a valid email address.
      </small>
    )}
    <br /><br />

    {/* Password Input */}
    <input
      type="text"
      placeholder="Enter Password"
      onChange={validatePassword}
      style={errPass ? { border: "1px solid red" } : null}
    />
    <br />
    {/* Show red text if password is invalid */}
    {errPass && (
      <small style={{ color: "red" }}>
        Password must be at least 6 characters long.
      </small>
    )}
    <br /><br />

    <button type="submit">Submit</button>
  </form>
 </>

   );
}

export default FormHandlingvalid;
