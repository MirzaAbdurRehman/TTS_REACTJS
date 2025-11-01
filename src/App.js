import logo from './logo.svg';
import './App.css';
import { FunctionBasedComp } from './components/FunctionBasedComp';
import { ClassBasedComp } from './components/ClassBasedComp';
import JSX from './components/JSX';
import ClickEvents_Func from './components/ClickEvents_Func';
import StatesFunctionComp from './components/StatesFunctionComp';
import StatesClassComp from './components/StatesClassComponent';
import Props_FuncComp from './components/Props_FuncComp';
import GetDataInputFiled from './components/GetDataInputFiled';
import FormHandling from './components/FormHandling';
import ArrayListing from './components/ArrayListing';
import ArrayListingBootstrap from './components/ArrayListingBootstrap';
import FunctionAsProps from './components/FunctionAsProps';
import FormHandlingvalid from './components/function FormHandlingvalid';
import Pure_component from './components/Pure_component';
import MemoHooks from './components/MemoHooks';
import LiftingStateUp from './components/LiftingStateUp';
import React, { useState } from 'react';
import ComponentDidMount from './ClassBasedComponentsLifeCycle/ComponentDidMount';
import ComponentDidUpdate from './ClassBasedComponentsLifeCycle/ComponentDidUpdate';
import ShouldComponentUpdate from './ClassBasedComponentsLifeCycle/ShouldComponentUpdate';


function App() {

  function getData(name, age, location){
    alert(`Helloq...!  Name: ${name} \n Age: ${age} \n Location: ${location}`);
  }

  const [message, setMessage] = useState("Hey");

  // Function that will be passed to the child
  const handleDataFromChild = (childData) => {
    setMessage(childData);
  };
  return (
    <div className="App">


      <ShouldComponentUpdate/>


      {/* <ComponentDidUpdate/> */}

      {/* <ComponentDidMount/> */}

      {/* <h2>Parent Component</h2> */}
      {/* <p>Message from Child: {message}</p> */}

      {/* Passing function as prop to child */}


      {/* <LiftingStateUp sendDataToParent={handleDataFromChild} /> */}

     {/* <MemoHooks/> */}

      {/* <Pure_component/> */}

      {/* <FormHandlingvalid/> */}

      {/* <FunctionAsProps data = {getData} name = 'Ali' age = {26} location = 'Islamabad' /> */}

      {/* <ArrayListingBootstrap/> */}

      {/* <ArrayListing/> */}
      {/* <FunctionBasedComp/>
      <ClassBasedComp/>
      <JSX/> */}

      {/* <ClickEvents_Func/> */}

      {/* <StatesFunctionComp/>
      <StatesClassComp/> */}

      {/* <Props_FuncComp name = 'Salman'/> */}


      {/* <GetDataInputFiled/> */}

      {/* <FormHandling/> */}
    </div>
  );
}

export default App;
