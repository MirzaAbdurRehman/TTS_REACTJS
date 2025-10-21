import logo from './logo.svg';
import './App.css';
import { FunctionBasedComp } from './components/FunctionBasedComp';
import { ClassBasedComp } from './components/ClassBasedComp';
import JSX from './components/JSX';
import ClickEvents_Func from './components/ClickEvents_Func';
import StatesFunctionComp from './components/StatesFunctionComp';
import StatesClassComp from './components/StatesClassComponent';
import Props_FuncComp from './components/Props_FuncComp';



function App() {
  return (
    <div className="App">
      {/* <FunctionBasedComp/>
      <ClassBasedComp/>
      <JSX/> */}

      {/* <ClickEvents_Func/> */}

      {/* <StatesFunctionComp/>
      <StatesClassComp/> */}

      <Props_FuncComp name = 'Salman'/>
    </div>
  );
}

export default App;
