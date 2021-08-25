import React, { useContext, useEffect } from 'react';
import AppContext from '../contextApp';

function Filters() {
  const { setData, filters: { filterByname: { setName } } } = useContext(AppContext);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results);
      setData(planets);
    };
    getPlanets();
  }, [setData]);

  return (
    <from>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Nome dp planeta"
          onChange="{ handleChange}"
        />
      </div>
    </from>
  );
}

export default Filters;
