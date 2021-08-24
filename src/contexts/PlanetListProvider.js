import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetListContext from './PlanetListContext';

function Provider(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterData = (list) => {
    setData(list);
    setLoading(false);
  };
  const contextValue = { data, filterData, loading, setLoading };
  const { children } = props;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      await fetch(endpoint)
        .then((response) => response.json())
        .then((info) => {
          const { results } = info;
          filterData(results);
        })
        .catch((error) => console.log(error));
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
