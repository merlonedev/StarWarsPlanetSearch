import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../Helper/FetchPlanets';

const INITIAL_STATE = { filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: '>',
      value: 2000,
    },
  ],
};

export const PlanetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filtred, setFiltered] = useState('');
  const [filter, setFilter] = useState(INITIAL_STATE);

  const getAPI = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
  };

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    if (data && filter) {
      setFiltered(data.filter((e) => e.name.toLowerCase()
        .includes(filter.filterByName.name.toLowerCase())));
      const { column, comparison, value } = filter.filterByNumericValues[0];
      switch (comparison) {
      case 'maior que':
        setFiltered(data
          .filter((e) => Number(e[column]) > value && e[column] !== 'unknown'));
        break;
      case 'igual a':
        setFiltered(data
          .filter((e) => e[column] === value && e[column] !== 'unknown'));
        break;
      case 'menor que':
        setFiltered(data
          .filter((e) => Number(e[column]) < value && e[column] !== 'unknown'));
        break;
      default: setFiltered(data);
      }
    } else {
      setFiltered(data);
    }
  }, [data, filter]);

  const handleFilter = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFilter({ ...filter, filterByName: { [name]: value } });
    } else {
      setFilter({ ...filter, ...event });
    }
  };

  return (
    <PlanetContext.Provider
      value={ { data, setData, filter, handleFilter, filtred } }
    >
      {children}
    </PlanetContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
