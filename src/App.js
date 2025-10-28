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



function App() {

  function getData(name, age, location){
    alert(`Helloq...!  Name: ${name} \n Age: ${age} \n Location: ${location}`);
  }
  return (
    <div className="App">

      <FormHandlingvalid/>

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
