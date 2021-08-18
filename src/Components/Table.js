import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const { data } = useContext(StarWarsContext);

  const renderTableHeader = () => {
    if (data.length > 0) {
      const dataKeys = ['Name', 'Rotation Period', 'Orbital Period',
        'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
        'Films', 'Created', 'Edited', 'URL'];
      return dataKeys.map((columnName) => <th key={ columnName }>{ columnName }</th>);
    }
  };

  const renderTableInfo = () => {
    if (data) {
      return (
        data.map((item) => (
          <tr key={ item.name }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.url }</td>
          </tr>))
      );
    }
  };

  return (
    <table className="planet-table">
      <thead>
        <tr>{ renderTableHeader() }</tr>
      </thead>
      <tbody>
        { renderTableInfo() }
      </tbody>
    </table>
  );
}

export default Table;
