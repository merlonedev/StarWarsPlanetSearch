import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { setPlanets, filterByName, planets } = props;
  const [stateTable, setStateTable] = useState([]);

  const tableHeard = ['Name', 'Created', 'Diameter', 'Edited',
    'Films', 'Gravity', 'Orbital Period', 'Population',
    'Rotation Period', 'Surface Water', 'Terrain', 'Climate', 'URL'];

  const allPlanets = (data) => {
    setStateTable(data);
    setPlanets(data);
  };

  useEffect(() => {
    const getPlanets = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planetsResults = await fetch(api).then((data) => data.json());
      allPlanets([...planetsResults.results]);
    };
    getPlanets();
  }, []);

  console.log(planets);

  const max = 10;
  if (planets.length < max) {
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
          stateTable.filter((item) => item.name.toLowerCase()
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
  setPlanets: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Table;
