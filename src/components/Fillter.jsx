import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filters: { filterByNumericValues } } = useContext(PlanetContext);

  const showFilter = () => {
    const map = filterByNumericValues.map((item, index) => (
      <div key={ index }>
        <p data-testid="filter">{`${item.column}, ${item.comparison}, ${item.value}`}</p>
        <button type="button">X</button>
      </div>
    ));
    return map;
  };

  return (
    <div className="App">
      <h2>Eu sou o Componente Filtro!</h2>
      { showFilter() }
    </div>
  );
}

export default Filter;
