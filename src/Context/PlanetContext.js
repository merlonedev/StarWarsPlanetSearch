import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../Helper/FetchPlanets';

const INITIAL_STATE = { filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};
const COLUMN = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

export const PlanetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filtred, setFiltered] = useState('');
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [columnArray, setColumn] = useState(COLUMN);

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
    } else {
      setFiltered(data);
    }
  }, [data, filter]);

  useEffect(() => {
    filter.filterByNumericValues.forEach((elm) => {
      const { column, comparison, value } = elm;
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
    });
  }, [data, filter.filterByNumericValues]);

  const handleFilter = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFilter({ ...filter, filterByName: { [name]: value } });
    } else if (filter.filterByNumericValues[0].column === '') {
      setFilter({ ...filter,
        filterByNumericValues: [event] });
      setColumn(columnArray.filter((e) => e !== event.column));
    } else {
      setFilter({ ...filter,
        filterByNumericValues: [...filter.filterByNumericValues, event] });
      setColumn(columnArray.filter((e) => e !== event.column));
    }
  };

  const handleRemover = (colu) => {
    const { filterByNumericValues } = filter;
    const removed = filterByNumericValues
      .filter((e) => e.column !== colu);
    setColumn(COLUMN);
    setFilter({ ...filter, filterByNumericValues: [removed] });
  };

  return (
    <PlanetContext.Provider
      value={ { data,
        setData,
        filter,
        handleFilter,
        filtred,
        columnArray,
        handleRemover } }
    >
      {children}
    </PlanetContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
