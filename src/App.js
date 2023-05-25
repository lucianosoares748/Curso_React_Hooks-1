import logo from './logo.svg';
import { useState } from 'react';

import Aula from './components/Aula';
import './App.css';
import Memo from './components/Memo';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  //Esta variável serve para alterar entre as classes CSS que altera a rotação da logo.
  const reverseClass = reverse ? 'reverse' : '';

  //criei função de 'handleClick' e setei o reverse dentro da função para que quando eu clicar
  //ela reverter a rotação da logo.
  const handleClick = () => {
    setReverse(!reverse);
  };

  //criei a função de 'handleIncrement' se setei o counter dentro da função, depois coloquei dentro
  //do onClick para que quando eu clicar ele incrementar +1
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <Aula />
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
      <Memo />
    </div>
  );
}

export default App;
