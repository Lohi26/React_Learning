import './App.css';
import Second from './Components/Second';
import Starting from './Components/Starting';
import ClassDemo from './Components/ClassDemo';
import Jsx from './Components/Jsx';
import PropsCreation from './Components/PropsCreation';
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
    </div>
  );
}

export default App;
