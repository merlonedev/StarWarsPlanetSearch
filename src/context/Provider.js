import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import { initialFilterState } from '../utils';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState(false);

  const [filters, setFilters] = useState(initialFilterState);

  useEffect(() => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchPlanetsApi = async () => {
      try {
        const response = await fetch(END_POINT);
        const { results } = await response.json();

        results.forEach((planet) => {
          delete planet.residents;
        });

        setData(results);
      } catch (error) {
        setDataError(true);
      }
    };

    fetchPlanetsApi();
  }, []);

  const handleFilterByName = ({ target: { value } }) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { name: value },
    }));
  };

  const context = {
    data,
    setData,
    dataError,
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
  children: PropTypes.node,
}.isRequired;

export default Provider;
