import React from "react";

interface ResultProps {
  value: number;
}

const Result: React.FC<ResultProps> = ({ value }) => {
  return (
    <div className="result">
      <h2>Resultado:</h2>
        <p>{value}</p>
    </div>
  );
};

export default Result;
