import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterNameResult, setFilterNameResult] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });
  const [filterByNumeric, setFilterByNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  useEffect(() => {
    const getApi = async () => {
      const fetchUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchUrl.json();
      setData(results);
    };
    getApi();
  }, []);

  useEffect(() => {
    const results = data
      .filter((planet) => planet.name.toLowerCase().includes(filters.filterByName.name));
    setFilterNameResult(results);
  }, [data, filters.filterByName]);

  useEffect(() => {
    // Logica do colega Eric Kreis - https://github.com/tryber/sd-012-project-starwars-planets-search/pull/35
    filters.filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setFilterNameResult((prevState) => prevState.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > value;
        if (comparison === 'menor que') return Number(planet[column]) < value;
        return planet[column] === value;
      }))
    ));
  }, [filters.filterByNumericValues]);

  function handleChange({ target: { value } }) {
    setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
  }

  function handleNumericChanges({ target: { name, value } }) {
    setFilterByNumeric((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClickNumeric(attributes) {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues,
        attributes],
    }));
  }

  const value = {
    handleChange,
    handleNumericChanges,
    handleClickNumeric,
    data,
    filters,
    filterNameResult,
    filterByNumeric,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
