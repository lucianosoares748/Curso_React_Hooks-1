import React, { useState } from 'react';

function Efeito() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Efeito;
