import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { setData, filters: { filterByName: { setName } } } = useContext(AppContext);

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

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          onChange={ handleChange }
        />
      </div>
    </form>
  );
}

export default Filters;
