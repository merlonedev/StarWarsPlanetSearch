import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import headTable from '../headTable';
import './table.css';

const Table = () => {
  const { data,
    filter:
      { filterByName:
        { name: filterName }, filterByNumericalValues } } = useContext(StarWarsContext);

  let filteredPlanets = [...data];

  const createHead = () => (
    <thead>
      <tr>
        {headTable.map((head, index) => <th key={ index }>{head}</th>)}
      </tr>
    </thead>
  );

  const createLines = () => {
    if (filterName) {
      filteredPlanets = filteredPlanets.filter((result) => (
        result.name.toLowerCase().includes(filterName)
      ));
    }

    if (filterByNumericalValues) {
      filterByNumericalValues.forEach(({ column, comparison, number }) => {
        filteredPlanets = filteredPlanets.filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[column]) > number;
          }
          if (comparison === 'menor que') {
            return Number(planet[column]) < number;
          }
          return planet[column] === number;
        });
      });
    }

    return filteredPlanets.map((planet, i) => (
      <tbody key={ i }>
        <tr>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      </tbody>
    ));
  };

  return (
    <div>
      <table className="planets-table">
        {createHead()}
        {createLines()}
      </table>
    </div>
  );
};

export default Table;
