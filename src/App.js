import './App.css';
import Pagination from './components/Pagination';
import TimerApp from './components/Timer';
import ObjectManipulation from './components/ObjectManipulation';
import DragDropList from './components/DragDropList';
import Debouncing from './components/Debouncing';
import Throttling from './components/Throttling';
import Toggle from "./components/Toggle";
import MainTab from './TabComponent/MainTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TimerApp></TimerApp> */}
        {/* <Pagination></Pagination> */}
        {/* <ObjectManipulation></ObjectManipulation> */}
        {/* <DragDropList></DragDropList> */}
        {/* <Debouncing></Debouncing> */}
        {/* <Throttling></Throttling> */}
        {/* <Toggle></Toggle> */}
        <MainTab></MainTab>
      </header>
    </div>
  );
}

export default App;
