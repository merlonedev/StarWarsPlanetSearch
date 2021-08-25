import React, { useContext, useEffect } from 'react';
import { columns } from '../Helper';
import MyContext from '../Context/MyContext';
import FetchApi from '../Service/FetchApi';

const Table = () => {
  const {
    planets,
    setPlanets,
    filterText,
  } = useContext(MyContext);

  useEffect(() => {
    FetchApi(setPlanets);
  }, [setPlanets]);

  const { filters } = filterText;
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;
  const filteredText = planets.filter((planet) => planet
    .name.toLowerCase().includes(name));
  const filteredColumn = columns.filter((columnItem) => filterByNumericValues
    .some(({ column }) => columnItem === column));

  const renderList = (name) ? filteredText : planets;

  const filterNumber = () => {
    const filter = filterByNumericValues;
    if (filter.length > 0) {
      const Value = Number(filter[0].value);
      const Comparison = filter[0].comparison;
      const results = renderList.filter((planet) => {
        switch (Comparison) {
        case 'maior que':
          return Number(planet[filteredColumn]) > Value;
        case 'menor que':
          return Number(planet[filteredColumn]) < Value;
        case 'igual a':
          return Number(planet[filteredColumn]) === Value;
        default:
          return renderList;
        }
      });
      return results;
    }
  };

  const textOrNum = (filterNumber()) ? filterNumber() : renderList;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {textOrNum.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
