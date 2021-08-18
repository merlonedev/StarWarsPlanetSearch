import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data } = useContext(AppContext);
  const { filters } = useContext(AppContext);

  const renderTableHeader = () => {
    const result = Object.keys(data[0]).map((title) => {
      if (title !== 'residents') {
        return (
          <th key={ title }>{ title }</th>
        );
      }
      return null;
    });
    return result;
  };

  const renderPlanets = (planets) => {
    const result = planets.map((planet, index) => (
      <tr key={ index }>
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
    ));
    return result;
  };

  if (data !== undefined) {
    if (filters.filterByName.name === '') {
      return (
        <table>
          <thead>
            <tr>
              { renderTableHeader() }
            </tr>
          </thead>
          <tbody>
            { renderPlanets(data) }
          </tbody>
        </table>
      );
    }
    const filteredPlanets = data.filter((planet) => (
      planet.name.includes(filters.filterByName.name)
    ));
    return (
      <table>
        <thead>
          <tr>
            { renderTableHeader() }
          </tr>
        </thead>
        <tbody>
          { renderPlanets(filteredPlanets) }
        </tbody>
      </table>
    );
  }
  return <span>Carregando...</span>;
};

export default Table;
