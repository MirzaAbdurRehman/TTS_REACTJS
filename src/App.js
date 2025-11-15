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
import ComponentDidUnmount from './ClassBasedComponentsLifeCycle/ComponentDidUnmount';
import UseEffect from './FunctionalBasedComponentLifeCycle/UseEffect';
import UseEffectWithProps from './FunctionalBasedComponentLifeCycle/UseEffectWithProps';
import UseEffectWithConditions from './FunctionalBasedComponentLifeCycle/UseEffectWithConditions';
import Data_fetching_api from './Fetch_Api_Method/Data_fetching_api';
import ReUse from './components/ReUse';
import Employee from './components/Employee';
import FetchingApi from './Fetch_Api_Method/FetchingApi';
import Product_Add from './Axios_Api_Method/Product_Add';


function App() {

  function getData(name, age, location){
    alert(`Helloq...!  Name: ${name} \n Age: ${age} \n Location: ${location}`);
  }

  const [message, setMessage] = useState("Hey");

  const [count, setCount] = useState(0);


  const [age, setAge] = useState(22);
  const [count2, setCount2] = useState(1);

  // Function that will be passed to the child
  const handleDataFromChild = (childData) => {
    setMessage(childData);
  };
  return (
    <div className="App">


      <Product_Add/>


      {/* <FetchingApi/> */}


      {/* <ReUse/> */}

      {/* <Data_fetching_api/> */}


      {/* <UseEffectWithConditions age = {age} count2 = {count2} />
      <button onClick={() => setAge(age + 1)}>Update Age</button>
      <button onClick={() => setCount2(count2 + 1)}>Update Count</button> */}


 
      {/* <UseEffect/> */}


      {/* <ComponentDidUnmount/> */}


      {/* <ShouldComponentUpdate/> */}


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
