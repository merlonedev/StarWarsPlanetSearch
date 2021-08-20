import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [filtered, setFiltered] = useState([]);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valuer, setValue] = useState(0);

  // const [filterName, setFilterName] = useState([]); // de acordo com o requisito
  // const [filterByNumericValues, setFilterByNumericValues] = useState([]); // de acordo com o requisito
  // const [filterNumbers, setFilterNumbers] = useState([]);

  // const filterSelect = (info) => {
  //   setFilterByNumericValues([
  //     ...filterByNumericValues,
  //     info,
  //   ]); // ANALISAR NOVAMENTE
  // }

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetch(
          'https://swapi-trybe.herokuapp.com/api/planets/',
        );
        const { results } = await response.json();
        setData(results);
        // setFilter(results); da errado
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []); // componentDidMount

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  useEffect(() => {
    const datafilter = data.filter((planet) => (
      planet.name.toLowerCase().includes(filter.filterByName.name.toLowerCase())));
    setFiltered(datafilter);
  }, [data, filter]);

  const filterOptions = (column1, value1, comparinson1) => {
    if (comparinson1 === 'igual a') {
      const equalValue = filtered.filter(
        (planet) => +planet[column1] === +value1,
      );
      setFiltered(equalValue); // planet[column] valor dinamico tipo func genérica
    }
    if (comparinson1 === 'maior que') {
      const bigger = filtered.filter((planet) => +planet[column1] > +value1);
      setFiltered(bigger);
    }
    if (comparinson1 === 'menor que') {
      const smaller = filtered.filter((planet) => +planet[column1] < +value1);
      setFiltered(smaller);
    }
  };

  const handleChangeSelect = ({ target: { value } }) => {
    // population
    setColumn(value);
  };

  const handleCompareNumber = ({ target: { value } }) => {
    // valor numero
    setValue(value);
  };

  const handleComparation = ({ target: { value } }) => {
    // maior que
    setComparison(value);
  };

  const filterPlanet = ({ target: { value } }) => {
    const planetSearch = data.filter((planet) => planet.name.toLowerCase()
      .includes(value));
    setFilter(planetSearch);
  };

  const context = {
    data,
    column,
    comparison,
    valuer,
    filtered,
    filterOptions,
    filterPlanet,
    filter,
    handleChange,
    // filterSelect,
    handleChangeSelect,
    handleCompareNumber,
    handleComparation,
  };

  return <MyContext.Provider value={ context }>{ children }</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;
