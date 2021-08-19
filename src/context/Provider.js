import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [planetFilter, setPlanetFilter] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  );

  useEffect(() => {
    const getApi = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setApi(results);
    };
    getApi();
  }, []);

  const handleName = ({ target: { value } }) => {
    setPlanetName(value);
  };

  useEffect(() => {
    const filterTo = [...api];
    const filtered = filterTo.filter((planet) => planet.name.includes((planetName)));
    setPlanetFilter(filtered);
  }, [api, planetName]);

  const handleFilter = ({ target }) => {
    const { name, value } = target;
    setFilterByNumericValues({
      ...filterByNumericValues,
      [name]: value,
    });
  };

  const filterByNumericValuesFunc = ({ column, comparison, value }) => {
    const filterPlanet = api.filter((requisition) => {
      // console.log(requisition[column]);
      // console.log(comparison);
      const columnCompare = Number(requisition[column]);
      const valueCompare = Number(value);

      switch (comparison) {
      case 'maior que':
        return columnCompare > valueCompare;

      case 'menor que':
        return columnCompare < valueCompare;

      default:
        return columnCompare === valueCompare;
      }
    });

    setPlanetFilter(filterPlanet);
  };

  const handleClick = () => {
    filterByNumericValuesFunc(filterByNumericValues);
  };

  const context = {
    api,
    planetName,
    handleName,
    planetFilter,
    handleFilter,
    handleClick,
    filterByNumericValues,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
