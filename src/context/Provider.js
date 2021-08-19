import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filterByName, setFiltersByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);

  async function fetchAPI() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(URL);
    const { results } = await request.json();
    results.map((planet) => delete planet.residents);
    setHeaders(Object.keys(results[0]));
    const filtered = results
      .filter((planet) => planet.name.includes(filterByName.name));
    setData(filtered.length === 0 ? [] : filtered);
    // setData(results);
  }

  useEffect(() => {
    fetchAPI();
  }, [filterByName, filterByNumericValues]);

  useEffect(() => {
    const filtered = data
      .filter((planet) => planet.name.includes(filterByName.name));
    setData(filtered);
  }, [filterByName, filterByNumericValues]);

  const handleChange = ({ target }) => {
    const { name } = target;
    setFiltersByName({ [name]: target.value });
  };

  const handleChangeColumn = ({ target }) => {
    const { name } = target;
    setFilterByNumericValues([{ ...filterByNumericValues[0], [name]: target.value }]);
  };

  const handleClick = () => {
    const { column, comparison, value } = filterByNumericValues[0];

    if (comparison === 'maior que') {
      const filtered = data
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
      setData(filtered);
    }

    if (comparison === 'menor que') {
      const filtered = data
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
      setData(filtered);
    }

    if (comparison === 'igual a') {
      const filtered = data
        .filter((planet) => planet[column] === value);
      setData(filtered);
    }
  };

  const context = {
    data,
    headers,
    setData,
    filters: {
      filtersByName: filterByName,
      filterByNumericValues,
    },
    handleChange,
    handleChangeColumn,
    handleClick,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
