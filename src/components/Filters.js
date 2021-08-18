import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/appContext';

function Filters() {
  const { setInfo, filters: { filterByName: { setName } } } = useContext(AppContext);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results);
      setInfo(planets);
    };
    getPlanets();
  }, [setInfo]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Star Wars Planet Name"
          onChange={ handleChange }
        />
      </div>
    </form>
  );
}

export default Filters;
