import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const { data, filters } = useContext(StarWarsContext);

  const renderTableHeader = () => {
    const dataKeys = ['Name', 'Rotation Period', 'Orbital Period',
      'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
      'Films', 'Created', 'Edited', 'URL'];
    return dataKeys.map((columnName) => <th key={ columnName }>{ columnName }</th>);
  };

  const mapPlanetData = (input = '') => {
    const filteredData = data
      .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
    return filteredData.map((item) => (
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
      </tr>));
  };

  const checkFiltersAndRender = () => {
    const { filters: { filterByName } } = filters;
    if (data.length > 0) {
      if (filterByName.name !== '') {
        return mapPlanetData(filterByName.name);
      }
      return mapPlanetData('');
    }
    return <tr><td>LOADING TABLE...</td></tr>;
  };

  return (
    <table className="planet-table">
      <thead>
        <tr>{ renderTableHeader() }</tr>
      </thead>
      <tbody>
        { checkFiltersAndRender() }
      </tbody>
    </table>
  );
}

export default Table;
