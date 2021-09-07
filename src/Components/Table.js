import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const [numericFilter, setNumericFilter] = useState('');

  const renderTableHeader = () => {
    const dataKeys = ['Name', 'Rotation Period', 'Orbital Period',
      'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
      'Films', 'Created', 'Edited', 'URL'];
    return dataKeys.map((columnName) => <th key={ columnName }>{ columnName }</th>);
  };
  const filterByName = () => {
    const { filterByName: { name } } = filters;
    const filterData = data
      .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    return filterData;
  };

  useEffect(() => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
      const index = filterByNumericValues.length - 1;
      const obj = filterByNumericValues[index];
      setNumericFilter(obj);
    }
  }, [filters]);

  const filterNumericData = (info) => {
    const { column, comparison, value } = numericFilter;
    if (comparison === 'maior que') {
      const filtered = info.filter((planet) => planet[column] > value);
      return filtered;
    }
    if (comparison === 'menor que') {
      const filtered = info.filter((planet) => planet[column] < value);
      return filtered;
    }
    if (comparison === 'igual a') {
      const filtered = info.filter((planet) => +(planet[column]) === value);
      return filtered;
    }
  };

  const mapData = (finalData = data) => finalData.map((item) => (
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

  const renderData = () => {
    if (numericFilter) {
      const allFilters = filterNumericData(filterByName());
      return mapData(allFilters);
    }
    return mapData(filterByName());
  };

  if (data.length === 0) {
    return <div className="loading-div"><h3>LOADING...</h3></div>;
  }
  return (
    <table className="planet-table">
      <thead>
        <tr>{ renderTableHeader() }</tr>
      </thead>
      <tbody>
        { renderData() }
      </tbody>
    </table>
  );
}

export default Table;
