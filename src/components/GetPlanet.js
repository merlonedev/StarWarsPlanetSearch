// Resolução com o apoio do colega Nikolas Silva
// https://www.youtube.com/watch?v=k0cZA0NYTyQ
// https://www.youtube.com/watch?v=5Tq4-UgPTDs

import React, { useEffect, useState } from 'react';
import Table from './Table';
import { useProvider } from '../context/Provider';

function GetPlanet() {
  const [data, setData] = useState([]);
  const { filters, setFilters } = useProvider();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  function filterData(rows) {
    const { filterByName: { name } } = filters;
    const minusOne = -1;
    return rows.filter((row) => (
      row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
    ));
  }

  return (
    <div>
      <label htmlFor="name-filter">
        Pesquisar Planeta:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            filterByName: {
              name: e.target.value,
            },
          }) }
        />
      </label>
      <Table dataTable={ filterData(data) } />
    </div>
  );
}

export default GetPlanet;
