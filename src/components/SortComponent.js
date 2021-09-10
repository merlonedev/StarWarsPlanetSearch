import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function SortComponent() {
  const [selectedColumn, setSelectedColumn] = useState('name');
  const [selectedSort, setSelectedSort] = useState('ASC');
  const { planets, filters, setFilters } = useContext(MyContext);

  const handleClick = (radio) => setSelectedSort(radio);

  function handleSelect(event) {
    setSelectedColumn(event.target.value);
  }

  const changeSort = () => {
    setFilters({
      ...filters,
      order: { column: selectedColumn, sort: selectedSort },
    });
  };

  return (
    <div>
      <select data-testid="column-sort" onChange={ (e) => handleSelect(e) }>
        {planets.map((planet, index) => {
          const option = Object.keys(planet)
            .filter((planetName) => planetName !== 'residents')[index];
          return <option key={ index }>{option}</option>;
        })}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          onClick={ () => handleClick('ASC') }
          data-testid="column-sort-input-asc"
          value="ASC"
          id="ASC"
          name="sort-radio"
          type="radio"
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          onClick={ () => handleClick('DESC') }
          data-testid="column-sort-input-desc"
          value="DESC"
          id="DESC"
          name="sort-radio"
          type="radio"
        />
      </label>
      <button
        onClick={ changeSort }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortComponent;
