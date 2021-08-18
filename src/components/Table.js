import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import headTable from '../headTable';
import './table.css';

const Table = () => {
  const { data,
    filters:
    { filters: { filterByName: { name: filterName } } } } = useContext(StarWarsContext);

  const createHead = () => (
    <thead>
      <tr>
        {headTable.map((head, index) => <th key={ index }>{head}</th>)}
      </tr>
    </thead>
  );

  const createLines = () => {
    if (filterName) {
      const filteredPlanets = Object.values(data).filter((result) => (
        result.name.toLowerCase().includes(filterName)
      ));

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
    }
    return (
      <tbody>
        {Object.values(data)
          .map(({
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
          }, index) => (
            <tr key={ index }>
              <td>{name}</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ films }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          ))}
      </tbody>
    );
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
