import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context';

const Table = () => {
  const { data, filters } = useContext(MyContext);
  const nameState = filters.filterByName.name;
  const [planets, setPlanets] = useState([]);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    if (!nameState) {
      setPlanets(data);
    } else {
      setPlanets(data
        .filter(({ name }) => name.toLowerCase().includes(nameState.toLowerCase())));
    }

    filterByNumericValues.map(({ column, comparison, value }) => {
      let filterData = [...data];

      switch (comparison) {
      case 'maior que':
        filterData = setPlanets(filterData.filter(
          (planet) => Number(planet[column]) > Number(value),
        ));
        break;

      case 'menor que':
        filterData = setPlanets(filterData.filter(
          (planet) => Number(planet[column]) < Number(value),
        ));
        break;

      case 'igual a':
        filterData = setPlanets(filterData.filter(
          (planet) => Number(planet[column]) === Number(value),
        ));
        break;

      default:
        return setPlanets(filterData);
      }
      return filterData;
    });
  }, [nameState, data, filterByNumericValues]);

  if (!data.length) return <div>Loading...</div>;

  return (
    <table>
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
          <th>Url</th>
        </tr>
      </thead>

      <tbody>
        {
          planets.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td data-testid="planet-name">{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
};

export default Table;
