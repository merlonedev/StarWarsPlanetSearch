import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetListContext from './PlanetListContext';

function Provider(props) {
  const [planetList, setPlanetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterPlanetList = (data) => {
    setPlanetList(data);
    setLoading(false);
  };
  const contextValue = { planetList, filterPlanetList, loading, setLoading };
  const { children } = props;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      await fetch(endpoint)
        .then((data) => data.json())
        .then((info) => {
          const { results } = info;
          filterPlanetList(results);
        });
    };

    getPlanets();
  }, []);

  return (
    <PlanetListContext.Provider value={ contextValue }>
      { children }
    </PlanetListContext.Provider>
  );
}
const { element, arrayOf } = PropTypes;
Provider.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Provider;
