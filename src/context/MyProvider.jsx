import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState();
  const [filterByNumericValues, setFilterByNumericValues] = useState({});
  const [defaultColumn, setDefaultColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  useEffect(() => {
    const getData = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url);
      const planetsJson = await planets.json();
      const { results } = planetsJson;
      setData(results);
    };
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((dat) => dat.name.includes(name));
    setFilterName(filtered);
  }, [data, name]);

  function handleFilterByNumericValues() {
    setFilterByNumericValues({ column, comparison, value });
    const removeColumn = defaultColumn.filter((col) => col !== column);
    setDefaultColumn(removeColumn);
  }

  useEffect(() => {
    const { column: col, comparison: comp, value: val } = filterByNumericValues;
    const numericFilters = data.filter((planets) => {
      if (comp === 'maior que') return +planets[col] > +val;
      if (comp === 'menor que') return +planets[col] < +val;
      if (comp === 'igual a') return +planets[col] === +val;
      return true;
    });
    setFilterName(numericFilters);
  }, [data, filterByNumericValues]);

  // useEffect(() => {
  //   const removeColumn = defaultColumn.filter((col) => col === column);
  //   setDefaultColumn(removeColumn);
  // }, [column, defaultColumn]);

  const contextValue = {
    data,
    setData,
    filterName,
    setFilterName,
    setName,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
    handleFilterByNumericValues,
    setColumn,
    setComparison,
    setValue,
    defaultColumn,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
