import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import usePlanets from '../hooks/usePlanets';

const columnOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
export default function Provider({ children }) {
  const [data, loading] = usePlanets();
  const [planets, setPlanets] = useState([]);
  const [options, setOptions] = useState(columnOptions);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const contextValue = {
    planets,
    setPlanets,
    loading,
    filters,
    setFilters,
    options,
    setOptions,
    data,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};
