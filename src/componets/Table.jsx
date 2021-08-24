import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { filterPlanets, filterByName, planets } = props;

  const tableHeard = ['Name', 'Created', 'Diameter', 'Edited',
    'Films', 'Gravity', 'Orbital Period', 'Population',
    'Rotation Period', 'Surface Water', 'Terrain', 'Climate', 'URL'];

  const max = 10;
  if (filterPlanets.length > 0 && filterPlanets.length < max) {
    return (
      <table className="tablePlanets">
        <thead>
          <tr>
            {
              tableHeard.map((item) => (
                <th key={ item }>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            filterPlanets.filter((item) => item.name.toLowerCase()
              .includes(filterByName.name.toLowerCase()))
              .map((item) => (
                <tr key={ item.name }>
                  <td>{item.name}</td>
                  <td>{item.created}</td>
                  <td>{item.diameter}</td>
                  <td>{item.edited}</td>
                  <td>{item.films}</td>
                  <td>{item.gravity}</td>
                  <td>{item.orbital_period}</td>
                  <td>{item.population}</td>
                  <td>{item.rotation_period}</td>
                  <td>{item.surface_water}</td>
                  <td>{item.terrain}</td>
                  <td>{item.climate}</td>
                  <td>{item.url}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    );
  }

  return (
    <table className="tablePlanets">
      <thead>
        <tr>
          {
            tableHeard.map((item) => (
              <th key={ item }>{item}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((item) => item.name.toLowerCase()
            .includes(filterByName.name.toLowerCase()))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.created}</td>
                <td>{item.diameter}</td>
                <td>{item.edited}</td>
                <td>{item.films}</td>
                <td>{item.gravity}</td>
                <td>{item.orbital_period}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.surface_water}</td>
                <td>{item.terrain}</td>
                <td>{item.climate}</td>
                <td>{item.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  filterByName: PropTypes.shape({ name: PropTypes.string }).isRequired,
  filterPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Table;
