import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [inputName, setInputName] = useState();
  const [inputNumeric, setInputNumeric] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
    };
    getPlanetsApi();
  }, []);

  useEffect(() => {
    if (data) {
      const dataFilter = data.filter((item) => (
        item.name.toLowerCase().includes(inputName)
      ));
      setFilters({ ...filters, filterByName: { name: dataFilter } });
    }
  }, [inputName]);

  useEffect(() => {
    if (data) {
      const { column, comparison, value } = inputNumeric;
      setFilters({
        ...filters,
        filterByNumericValues: {
          // dataFilter,
          column,
          comparison,
          value,
        },
      });
    }
  }, [inputNumeric]);

  console.log(filters);

  const contextValue = {
    data,
    setInputName,
    filters,
    inputNumeric,
    setInputNumeric,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired, // verificar se é assim mesmo
};

export default PlanetProvider;
