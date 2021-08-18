import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [planetFilter, setPlanetFilter] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setApi(results);
    };
    getApi();
  }, []);

  const handleName = ({ target: { value } }) => {
    setPlanetName(value);
  };

  useEffect(() => {
    const filterTo = [...api];
    const filtered = filterTo.filter((planet) => planet.name.includes((planetName)));
    setPlanetFilter(filtered);
  }, [api, planetName]);

  const context = {
    api,
    planetName,
    handleName,
    planetFilter,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
