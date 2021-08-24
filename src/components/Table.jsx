import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context';

// prettier-ignore
export default function Table() {
  const [data, setData] = useState({});
  const { filters } = useContext(StarWarsContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint)
        .then((resolve) => resolve.json());
      setData(results);
    };
    fetchPlanets();
  }, []);

  const arrayOfData = Object.values(data);
  // Source: Pair Progamming Thalles Carneiro
  function filterData(array, filter) {
    const { filterByNumericValues } = filter;
    let filteredArray = [...array];
    filteredArray = array
      .filter((planet) => planet.name.includes(filter.filterByName));

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filteredArray = filteredArray.filter((planet) => +planet[column] > +value);
      } if (comparison === 'menor que') {
        filteredArray = filteredArray.filter((planet) => +planet[column] < +value);
      } if (comparison === 'igual a') {
        filteredArray = filteredArray.filter((planet) => planet[column] === value);
      }
    });
    return filteredArray;
  }

  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterData(arrayOfData, filters).map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
