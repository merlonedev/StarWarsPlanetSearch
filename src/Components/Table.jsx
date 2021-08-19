import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import '../style/Table.css';

function Table() {
  const { state: { data, filters } } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  const renderTableHeader = () => (
    <thead className="table-header">
      <tr className="table-row header">
        <th className="cell name">Name</th>
        <th className="cell rotation">Rotation Period</th>
        <th className="cell orbital">Orbital Period</th>
        <th className="cell diameter">Diameter</th>
        <th className="cell climate">Climate</th>
        <th className="cell gravity">Gravity</th>
        <th className="cell terrain">Terrain</th>
        <th className="cell water">Surface Water</th>
        <th className="cell population">Population</th>
        <th className="cell films">Films</th>
        <th className="cell created">Created</th>
        <th className="cell edited">Edited</th>
        <th className="cell url">URL</th>
      </tr>
    </thead>
  );

  const renderTableBody = (newArray) => (
    <tbody>
      { newArray.map((planet, index) => {
        const dateLength = 10;
        const hourLength = 8;
        return (
          <tr key={ index } className="table-row body">
            <td className="cell name">{ planet.name }</td>
            <td className="cell rotation">{ planet.rotation_period }</td>
            <td className="cell orbital">{ planet.orbital_period }</td>
            <td className="cell diameter">{ planet.diameter }</td>
            <td className="cell climate">{ planet.climate }</td>
            <td className="cell gravity">{ planet.gravity }</td>
            <td className="cell terrain">{ planet.terrain }</td>
            <td className="cell water">{ planet.surface_water }</td>
            <td className="cell population">{ planet.population }</td>
            <td className="cell films">
              <ol>
                { planet.films.map(
                  (film, fIndex) => (
                    <li key={ fIndex }>
                      <a href={ film }>{ `Appearance ${fIndex + 1}` }</a>
                    </li>),
                ) }
              </ol>
            </td>
            <td className="cell created">
              <p>{ planet.created.substr(0, dateLength) }</p>
              <p>{ planet.created.substr(dateLength + 1, hourLength) }</p>
            </td>
            <td className="cell edited">
              <p>{ planet.edited.substr(0, dateLength) }</p>
              <p>{ planet.edited.substr(dateLength + 1, hourLength) }</p>
            </td>
            <td className="cell url">
              <a href={ planet.url }>{ `${planet.name} URL` }</a>
            </td>
          </tr>
        );
      }) }
    </tbody>
  );

  const filterTable = () => {
    const newArray = data.filter((planet) => planet.name.includes(name));
    return (renderTableBody(newArray));
  };

  return (
    <div className="table-container">
      <table className="planets-table">
        { renderTableHeader() }
        { filterTable() }
      </table>
    </div>
  );
}

export default Table;
