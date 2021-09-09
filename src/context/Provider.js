import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState(false);

  const initialFilterState = {
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  };

  const [filters, setFilters] = useState(initialFilterState);

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        const { results } = await response.json();

        results.forEach((planet) => { delete planet.residents; });
        setData(results);
      } catch (error) {
        setDataError(true);
      }
    };
    fetchPlanets();
  }, []);

  const handleFilterByName = ({ target: { value } }) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { name: value },
    }));
  };

  const context = {
    data,
    dataError,
    setData,
    filters,
    setFilters,
    handleFilterByName,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
