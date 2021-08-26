import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [secondFilter, setSecondFilter] = useState(false);
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      // console.log('arrayDataProvider', results);
      setData(results);
      setPlanet(results);
    };
    getPlanets();
  }, []);

  function handleFilter({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
    // console.log('verifica', target.value);
    const filter = data
      .filter(({ name }) => name.toLowerCase().includes(target.value.toLowerCase()));
    setPlanet(filter);
  }
  function filterByNumber(object) {
    console.log('teste2', object);
    const { column, comparison, value } = object;
    setFilters({ ...filters,
      filterByNumericValues:
       [...filters.filterByNumericValues, object],
    });
    // Aprendi a fazer essa logica com o André Hammel
    setSecondFilter(true);
    const result = data.filter((dt) => {
      switch (comparison) {
      case 'maior que':
        return +(dt[column]) > +(value);
      case 'menor que':
        return +(dt[column]) < +(value);
      case 'igual a':
        return +(dt[column]) === +(value);
      default:
        return dt;
      }
    });
    if (result.length === 0) return setPlanet([]);
    setPlanet(result);
  }

  const contextValue = {
    data, handleFilter, planet, filterByNumber, secondFilter, filters,
  };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default Provider;
