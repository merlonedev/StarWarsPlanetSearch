import React, { useState, createContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import fetchPlanets from '../uteis/api';

export const Context = createContext();

export const StarWarsProvider = ({ children }) => {
  const COLUMN = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const INITIAL_STATE = { filterByName: { name: '' },
    filterByNumericValues: [],
  };
  const [data, setData] = useState('');
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [filteredData, setFilteredData] = useState();
  const [columnArr, setColumn] = useState(COLUMN);

  const handleFilter = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFilter({ ...filter, filterByName: { [name]: value } });
      console.log(filter);
    } else {
      setFilter({ ...filter,
        filterByNumericValues:
         [...filter.filterByNumericValues, event] });
      setColumn(columnArr.filter((colum) => colum !== event.column));
    }
  };

  const filterPlanetsByName = ({ name, value }) => {
    if (name === 'name') {
      setFilter({ ...filter, filterByName: { name: value } });
      console.log(filter);
    }
  };

  useEffect(() => {
    console.log('i');
    if (data && filter.filterByNumericValues.length === 0) {
      setFilteredData(data.filter((e) => e.name.toLowerCase()
        .includes(filter.filterByName.name.toLowerCase())));
    } else {
      setFilteredData(data);
    }
  }, [data, filter]);

  useEffect(() => {
    filter.filterByNumericValues.forEach((elm) => {
      const { column, comparison, value } = elm;
      switch (comparison) {
      case 'maior que':
        setFilteredData(data
          .filter((e) => Number(e[column]) > value && e[column] !== 'unknown'));
        break;
      case 'igual a':
        setFilteredData(data
          .filter((e) => e[column] === value && e[column] !== 'unknown'));
        break;
      case 'menor que':
        setFilteredData(data
          .filter((e) => Number(e[column]) < value && e[column] !== 'unknown'));
        break;
      default: setFilteredData(data);
      }
    });
  }, [data, filter]);

  const getPlanets = async () => {
    const request = await fetchPlanets();
    const newPlanets = Object.values(request.results).map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(newPlanets);
    setFilteredData(newPlanets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const contextValue = { data,
    setData,
    handleFilter,
    filteredData,
    filter,
    columnArr,
    filterPlanetsByName,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
