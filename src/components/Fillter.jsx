import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filters: { filterByNumericValues } } = useContext(PlanetContext);
  console.log(filterByNumericValues);

  const exibir = () => {
    const { column, comparison, value } = filterByNumericValues;
    console.log(column);

    if (column || comparison || value) {
      return (<p>{ `${column} | ${comparison} | ${value}` }</p>);
    }
  };

  return (
    <div className="App">
      <h2>Eu sou o Componente Filtro!</h2>
      { exibir() }
    </div>
  );
}

export default Filter;
