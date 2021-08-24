import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [copyPlanets, setCopyPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filterNumber, setFilterNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const ENDPOINT = 'https://swapi.dev/api/planets';
        const { results } = await fetch(ENDPOINT).then((data) => data.json());
        setPlanets(results);
        setCopyPlanets(results);
      } catch (error) {
        return (error);
      }
    };
    getPlanets();
  }, []);
  // Consegui arrumar o loop infinito com ajuda do David Gonzaga.
  // Eu precisava setar uma copia do planets para ele chamar o useEffect somente quando houvesse
  // mudança no filterName.
  const handleFilterName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      } });
  };

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const getPlanets = [...copyPlanets];
    const filtered = getPlanets.filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
    setPlanets(filtered);
  }, [copyPlanets, filters]);

  const filterByNumber = ({ target: { name, value } }) => {
    setFilterNumber({
      ...filterNumber,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterNumber],
    });
  };

  const contextValue = {
    planets,
    setPlanets,
    handleFilterName,
    filterByNumber,
    handleClick,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
