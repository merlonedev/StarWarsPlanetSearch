import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../hooks/FetchPlanets';

export const PlanetsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFiltered] = useState();
  const [filters, setFilters] = useState({ filterByName: '', filterByNumericValues: '' });
  const [filtersOptions, setFiltersOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const updateFilters = ({ name, value }) => {
    if (name === 'filterByName') {
      setFilters({ ...filters, [name]: value });
    } else {
      setFilters({ ...filters, [name]: [...filters[name], value] });
      setFiltersOptions(filtersOptions.filter((e) => e !== value.parameter));
    }
  };

  const filterByComparison = () => {
    filters.filterByNumericValues.forEach((e) => {
      const { parameter, value, measure } = e;
      switch (measure) {
      case 'maior que':
        setFiltered(
          data.filter((key) => +key[parameter] > +value),
        );
        break;
      case 'menor que':
        setFiltered(
          data.filter((key) => +key[parameter] < +value),
        );
        break;
      case 'igual a':
        setFiltered(
          data.filter((key) => +key[parameter] === +value),
        );
        break;
      default:
        setFiltered(data);
      }
    });
  };

  const getPlanets = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
    setFiltered(newArray);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    if (data && filters.filterByName !== '') {
      setFiltered(data.filter((e) => e.name.toLowerCase().includes(
        filters.filterByName.toLowerCase(),
      )));
    } else if (filters.filterByNumericValues !== '') {
      filterByComparison();
    } else {
      setFiltered(data);
    }
  }, [data, filters]);

  return (
    <PlanetsContext.Provider
      value={ {
        filteredData, setData, updateFilters, data, filterByComparison, filtersOptions,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
