import React, { useState } from 'react';

interface PalabrasIngresadasProps {
  onSearch: (palabras: string[], palabraBuscar: string) => void;
}

const PalabrasIngresadas: React.FC<PalabrasIngresadasProps> = ({ onSearch }) => {
  const [textoPalabras, setTextoPalabras] = useState('');
  const [palabra, setPalabra] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    const listaPalabras = textoPalabras.split(' ').map(p => p.trim()).filter(Boolean);
    if (listaPalabras.length && palabra) {
      onSearch(listaPalabras, palabra);
    }
  };

  return (
    <form onSubmit={manejarEnvio}
     style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
      <input
        type="text"
        placeholder="Palabras separadas por espacio"
        value={textoPalabras}
        onChange={e => setTextoPalabras(e.target.value)}
        style={{width: '200px'}}
      />
      <input
        type="text"
        placeholder="Palabra a buscar"
        value={palabra}
        onChange={e => setPalabra(e.target.value)}
        style={{width: '100px'}}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default PalabrasIngresadas;
