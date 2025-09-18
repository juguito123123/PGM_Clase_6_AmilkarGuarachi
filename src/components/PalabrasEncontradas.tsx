import React from 'react';

interface PalabrasEncontradasProps {
  palabra: string;
  resultado: { encontrado: boolean, posicion: number } | null;
}

const PalabrasEncontradas: React.FC<PalabrasEncontradasProps> = ({ palabra, resultado }) => {
  if (!palabra) return null;
  if (!resultado) return <div>Introduce palabras y una palabra a buscar.</div>;
  return (
    <div>
      {resultado.encontrado
        ? <span>La palabra <b>{palabra}</b> existe en la posición <b>{resultado.posicion + 1}</b>.</span>
        : <span>La palabra <b>{palabra}</b> no existe en la lista.</span>
      }
    </div>
  );
};

export default PalabrasEncontradas;
