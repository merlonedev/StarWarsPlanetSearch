import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const { data } = useContext(StarWarsContext);
  const { filters:
    { filterByNumericValues, filterByName } } = useContext(StarWarsContext);

  const renderTableHeader = () => {
    const dataKeys = ['Name', 'Rotation Period', 'Orbital Period',
      'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
      'Films', 'Created', 'Edited', 'URL'];
    return dataKeys.map((columnName) => <th key={ columnName }>{ columnName }</th>);
  };

  const filterName = (array) => {
    const { name } = filterByName;
    if (name !== '') {
      const filterDataName = array
        .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
      return filterDataName;
    }
    return array;
  };

  const compareNumericValues = (planet, comparison, column, value) => {
    if (comparison === 'maior que') {
      return +planet[column] > +value;
    }
    if (comparison === 'menor que') {
      return +planet[column] < +value;
    }
    if (comparison === 'igual a') {
      return +planet[column] === +value;
    }
  };

  const filterNumericValues = (array) => {
    if (filterByNumericValues.length > 0) {
      let filteredValues = array;
      filterByNumericValues.forEach((obj) => {
        filteredValues = filteredValues
          .filter((planet) => compareNumericValues(
            planet, obj.comparison, obj.column, obj.value,
          ));
      });
      return filteredValues;
    }
    return array;
  };

  const mapData = (array) => array.map((item, index) => (
    <tr key={ index }>
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

  const renderTableBody = () => mapData(filterNumericValues(filterName(data)));

  if (data.length === 0) {
    return <div className="loading-div"><h3>LOADING...</h3></div>;
  }
  return (
    <table className="planet-table">
      <thead>
        <tr>{ renderTableHeader() }</tr>
      </thead>
      <tbody>
        { renderTableBody() }
      </tbody>
    </table>
  );
}

export default Table;
