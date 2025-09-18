import React, { useState } from 'react';
import './App.css';

import Result from './components/Result';
import SumForm from './components/SumForm';
import PalabrasIngresadas from './components/PalabrasIngresadas';
import PalabrasEncontradas from './components/PalabrasEncontradas';

const App: React.FC = () => {
  const [resultado, setResultado] = useState<number>(0);

  const [palabras, setPalabras] = useState<string[]>([]);
  const [palabraBuscar, setPalabraBuscar] = useState<string>('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState<{ encontrado: boolean, posicion: number } | null>(null);

  const buscarPalabra = (lista: string[], palabra: string) => {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === palabra) {
        return { encontrado: true, posicion: i };
      }
    }
    return { encontrado: false, posicion: -1 };
  };

  const manejarBusqueda = (listaPalabras: string[], palabra: string) => {
    setPalabras(listaPalabras);
    setPalabraBuscar(palabra);
    setResultadoBusqueda(buscarPalabra(listaPalabras, palabra));
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Sumador de Números</h1>
      <SumForm onSum={setResultado} />
      <Result value={resultado} />
      <hr />
      <h2>Búsqueda de Palabras</h2>
      <PalabrasIngresadas onSearch={manejarBusqueda} />
      <PalabrasEncontradas palabra={palabraBuscar} resultado={resultadoBusqueda} />
    </div>
  );
}

export default App;





