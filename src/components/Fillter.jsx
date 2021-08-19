import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filters: { filterByNumericValues } } = useContext(PlanetContext);

  const showFilter = () => {
    const map = filterByNumericValues.map((item, index) => (
      <div key={ index }>
        <p>{`${item.column}, ${item.comparison}, ${item.value}`}</p>
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
