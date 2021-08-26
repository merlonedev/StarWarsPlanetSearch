import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { dataHead, filters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  const { data } = useContext(StarWarsContext);
  const allFilters = () => {
    let newData = [...data];
    if (name !== '') {
      newData = newData.filter((planet) => (
        (planet.name.toLowerCase()).includes(name.toLowerCase())
      ));
    }

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          newData = newData.filter((planet) => +planet[column] > +value);
        } else if (comparison === 'menor que') {
          newData = newData.filter((planet) => +planet[column] < +value);
        } else {
          newData = newData.filter((planet) => +planet[column] === +value);
        }
      });

      return newData;
    }

    return newData;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{ dataHead.map((title) => <th key={ title }>{ title }</th>) }</tr>
        </thead>
        <tbody>
          { allFilters().map((planet) => (
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
          )) }
        </tbody>

      </table>
    </div>
  );
}

export default Table;
