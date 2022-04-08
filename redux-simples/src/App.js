import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import PrizeDraw from './components/PrizeDraw';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App" >
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
      <Interval></Interval>
      </div>
      <div className='linha'>
      <Average></Average>
      <Sum></Sum>
      <PrizeDraw></PrizeDraw>

      </div>
    </div>
  );
}

export default App;


//class name linha ajuda a diferenciar o que quero colocar na linha de cima ou de baixo envolvendo numa div classname linha//