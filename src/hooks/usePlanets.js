import { useState, useEffect } from 'react';

const usePlanets = () => {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      const planets = results.map((planet) => {
        const { residents, ...rest } = planet;
        return rest;
      });

      setData(planets);
      setFilteredPlanets(planets);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    const filteredByName = data
      .filter(({ name }) => name.includes(filters.filterByName.name));

    setFilteredPlanets(filteredByName);
  }, [filters, data]);

  return {
    data,
    filters,
    setFilters,
    filteredPlanets,
  };
};

export default usePlanets;
