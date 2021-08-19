import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [copyPlanets, setCopyPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
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
    setFilterName(value);
  };

  useEffect(() => {
    const getPlanets = [...copyPlanets];
    const filtered = getPlanets.filter((planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()));
    setPlanets(filtered);
  }, [filterName, copyPlanets]);

  const contextValue = {
    planets,
    setPlanets,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    setFilterName,
    handleFilterName,
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
