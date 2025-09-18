import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



// ts
//html
//css
interface ResultProps {
  value: number;
}

const Result: React.FC<ResultProps> = ({ value }) => {
  return <div>
    <h2> Resultado : {value} </h2>
    </div>;
}

export default Result;

