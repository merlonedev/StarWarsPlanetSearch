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

  useEffect(() => {
    console.log(filters);
    if (filters.filterByNumericValues) {
      console.log(filters.filterByNumericValues[0].column);
    }
  }, [filters]);

  const arrayOfData = Object.values(data);
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
        {arrayOfData
          .filter((planet) => {
            if (filters.filterByName) {
              return planet.name.includes(filters.filterByName);
            }
            return planet;
          })
          .filter((planet) => {
            const { filterByNumericValues: filterEntries } = filters;
            if (filterEntries) {
              const { column, comparison, value } = filterEntries[0];
              console.log('V Column é: ', +planet[column], typeof +planet[column]);
              console.log('Value é: ', +value, typeof +value);
              if (comparison === 'maior que') {
                console.log('Existe filterByNumericValues +');
                return +planet[column] > +value;
              } if (comparison === 'menor que') {
                console.log('Existe filterByNumericValues -');
                return +planet[column] < +value;
              } if (comparison === 'igual a') {
                console.log('Existe filterByNumericValues =');
                return planet[column] === value;
              }
              console.log('Existe filterByNumericValues DEFAULT');
              return true;
            }
            console.log('Não existe filterByNumericValues');
            return true;
          })
          .map((planet) => (
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
