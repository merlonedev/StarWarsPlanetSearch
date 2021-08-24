import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

// com auxilios de David Gonzaga, Lucas Santos, André Hammel , Augusto mourão e Gustavo Mourão- Turma 12
function Provider({ children }) {
  const [data, setData] = useState([]);
  const [resultFilter, setResultFilter] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
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

  function fNumeric(object) {
    const { column, comparison, value } = object;
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, object],
    });
    setFilters();
    const fNumericResult = data.filter((dat) => {
      switch (comparison) {
      case 'maior que':
        return Number(dat[column]) > Number(value);
      case 'menor que':
        return Number(dat[column]) < Number(value);
      case 'igual a':
        return Number(dat[column]) === Number(value);
      default:
        return dat;
      }
    });
    if (fNumericResult.length === 0) return setResultFilter([]);
    setResultFilter(fNumericResult);
  }

  const context = { data, filterText, resultFilter, fNumeric };
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
