import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [planetFilter, setPlanetFilter] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumeric: [{}],
    },
  );
  const [selected, setSelected] = useState({
    column: '',
    comparison: '',
    value: '',
  });

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

  const filterByNumericValuesFunc = () => {
    const filterPlanet = api.filter((requisition) => {
      // console.log(requisition[column]);
      // console.log(comparison);
      const columnFilter = Number(requisition[selected.column]);
      const valueFilter = Number(selected.value);

      switch (selected.comparison) {
      case 'maior que':
        return columnFilter > valueFilter;

      case 'menor que':
        return columnFilter < valueFilter;

      default:
        return columnFilter === valueFilter;
      }
    });

    setPlanetFilter(filterPlanet);
    setFilterByNumericValues({
      ...filterByNumericValues,
      filterByNumeric: [
        ...filterByNumericValues.filterByNumeric,
        selected,
      ],
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setSelected({ ...selected, [name]: value });
  };

  const handleClick = () => {
    filterByNumericValuesFunc();
  };

  const context = {
    api,
    planetName,
    handleName,
    planetFilter,
    handleFilter,
    handleClick,
    filterByNumericValues,
    handleChange,
    selected,
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
