import { useState, useEffect } from 'react';
import sortArray from '../helpers';

const usePlanets = () => {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
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
    const { filterByNumericValues, order } = filters;
    const filteredByName = data
      .filter(({ name }) => name.includes(filters.filterByName.name));

    const filterByNumVal = (array, { column, comparison, value }) => (
      array.filter((planet) => {
        if (comparison === 'maior que') {
          return parseInt(planet[column], 10) > parseInt(value, 10);
        }
        if (comparison === 'menor que') {
          return parseInt(planet[column], 10) < parseInt(value, 10);
        }
        return parseInt(planet[column], 10) === parseInt(value, 10);
      })
    );

    const filtered = filterByNumericValues.reduce((acc, filter) => (
      filterByNumVal(acc, filter)
    ), [...filteredByName]);

    sortArray(filtered, order);

    setFilteredPlanets(filtered);
  }, [filters, data]);

  return {
    data,
    filters,
    setFilters,
    filteredPlanets,
  };
};

export default usePlanets;
