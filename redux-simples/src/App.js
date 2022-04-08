import React, { useState } from 'react';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import PrizeDraw from './components/PrizeDraw';
import Interval from './components/Interval';

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)

  return (
    <div className="App" >
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
      <Interval min={min} max={max}
      onMinChanged={setMin}
      onMaxChanged={setMax}

      ></Interval>
      </div>
      <div className='linha'>
      <Average min={min} max={max}></Average>
      <Sum min={min} max={max}></Sum>
      <PrizeDraw min={min} max={max}></PrizeDraw>

      </div>
    </div>
  );
}

export default App;


//class name linha ajuda a diferenciar o que quero colocar na linha de cima ou de baixo envolvendo numa div classname linha//