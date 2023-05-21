import React, { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function Efeito() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //ComponentDidMount - executa uma vez apenas
  useEffect(() => {
    console.log('componente foi montado');
  }, []);

  //ComponentDidMount - executa uma vez apenas
  /*
  Aqui temos o componentDidMount com dependência, e toda vez que essa dependência mudar o estado a função será chamada novamente
  */
  useEffect(() => {
    console.log('a dependência foi atualizada', counter2);
  }, [counter2]);

  //componentDidUpdate - executa toda vez que meu component atualiza
  useEffect(() => {
    console.log('componente atualizou');
  });

  //ComponentWillUmount - executa uma vez apenas
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    //limpando desmontando (removendo lixo do componente)
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div>
      <h1>Teste</h1>
      <h1>Contador 1: {counter}</h1>
      <h1>Contador 2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>counter1</button>
      <button onClick={() => setCounter2(counter2 + 10)}>counter2</button>
    </div>
  );
}

export default Efeito;
