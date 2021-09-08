import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './AppContext';
import getDataPlanets from '../services/getDataPlanets';

function Provider(props) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumberValues: [],
    order: { column: 'name', sort: 'ASC' },
  });
  const { children } = props;

  useEffect(() => {
    (async () => {
      const planets = await getDataPlanets();
      const sortedPlanets = [...planets]
        .sort(({ name: a }, { name: b }) => a.localeCompare(b));
      setData(sortedPlanets);
    })();
  }, []);

  const contextPlanets = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ contextPlanets }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
