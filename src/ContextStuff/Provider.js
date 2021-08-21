import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetch from '../hooks/useFetch';

export default function Provider({ children }) {
  const [data] = useFetch();
  const [systems, setSystems] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });
  const initialOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => { setSystems(data); }, [data]);

  const context = {
    data,
    initialOptions,
    systems,
    setSystems,
    filters,
    setFilters,
    options,
    setOptions,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(Object),
}.isRequired;
