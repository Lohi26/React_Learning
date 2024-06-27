import './App.css';
import Second from './Components/Second';
import Starting from './Components/Starting';
import ClassDemo from './Components/ClassDemo';
import Jsx from './Components/Jsx';
import PropsCreation from './Components/PropsCreation';
import Increment from './Components/Increment';
function App() {
  return (
    <div>
      <Starting/>
      <Second/>
      <ClassDemo/>
      <Jsx/>
      <PropsCreation name='Chandrasekaran'/>
      <PropsCreation name='Vidhyapathi'/>
      <PropsCreation name='Padmavathi'/>
      <Increment>
        <button>Click</button>
      </Increment>
    </div>
  );
}

export default App;
