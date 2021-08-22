import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [resultFilter, setResultFilter] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
      setResultFilter(results);
    };
    fetchPlanets();
  }, []);

  function filterText({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
    const result = data
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    setResultFilter(result);
  }

  const context = { data, filterText, resultFilter };
  return (
    <div>
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
