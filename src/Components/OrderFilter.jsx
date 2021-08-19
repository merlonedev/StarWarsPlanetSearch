import React, { useContext, useState } from 'react';
import dataContext from '../context/dataContext';

function OrderFilter() {
  const [columnSelected, setColumnSelected] = useState('');
  const [sortSelected, setSortSelected] = useState('');

  const { setOrderTag } = useContext(dataContext);

  const orderByColumn = () => {
    const newOrder = {
      columnOrder: columnSelected,
      sort: sortSelected,
    };

    setOrderTag(newOrder);
  };

  return (
    <div className="OrderByColumn">
      <label htmlFor="column-sort">
        <select
          id="column-sort"
          data-testid="column-sort"
          value={ columnSelected }
          onChange={ (e) => setColumnSelected(e.target.value) }
        >
          <option value="name">name</option>
          <option value="rotation_period">rotationPeriod</option>
          <option value="orbital_period">orbitalPeriod</option>
          <option value="diameter">diameter</option>
          <option value="climate">climate</option>
          <option value="gravity">gravity</option>
          <option value="terrain">terrain</option>
          <option value="surface_water">surfaceWater</option>
          <option value="population">population</option>
          <option value="films">films</option>
          <option value="created">created</option>
          <option value="edited">edited</option>
          <option value="url">url</option>
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        <input
          type="radio"
          name="sortOrder"
          onChange={ () => setSortSelected('ASC') }
          data-testid="column-sort-input-asc"
          id="column-sort-input-asc"
        />
        Ascendente
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          type="radio"
          name="sortOrder"
          onChange={ () => setSortSelected('DESC') }
          data-testid="column-sort-input-desc"
          id="column-sort-input-desc"
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderByColumn() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default OrderFilter;
