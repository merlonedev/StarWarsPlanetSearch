import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [Options, setOptions] = useState([...options]);

  useEffect(() => {
    const planetsJson = async () => {
      const planetsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await planetsFetch.json();
      setData(result);
    };
    planetsJson();
  }, []);

  const nameFilter = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const numericFilter = () => {
    const column = document.querySelector('#column-filter').value;
    const comparison = document.querySelector('#comparison-filter').value;
    const valueNumber = document.querySelector('#value-filter').value;
    setOptions(Options.filter((opcao) => opcao !== column));

    setFilterByNumericValues([...filterByNumericValues, {
      column,
      comparison,
      value: valueNumber,
    }]);
  };

  const contextValue = {
    data,
    opcoes: {
      Options,
      setOptions,
    },
    filters: {
      filterByName,
      filterByNumericValues,
    },
    functionsFilters: {
      nameFilter,
      numericFilter,
    },
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
