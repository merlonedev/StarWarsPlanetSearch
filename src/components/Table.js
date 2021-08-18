import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    order,
  } = filters;

  const planetFilterByNumericValues = (planet, filter) => {
    const { column, comparison, value } = filter;
    if (comparison === 'maior que'
    && (Number(planet[column]) > Number(value))) return true;
    if (comparison === 'menor que'
    && (Number(planet[column]) < Number(value))) return true;
    if (comparison === 'igual a'
    && (Number(planet[column]) === Number(value))) return true;
    return false;
  };

  const renderTableRow = (planet) => (
    <tr key={ planet.name }>
      { Object.values(planet).map((value) => {
        if (value === planet.name) {
          return (<td data-testid="planet-name" key={ value }>{value}</td>);
        }
        return (<td key={ value }>{value}</td>);
      })}
    </tr>
  );

  const sortNameOrder = (a, b) => {
    const MINUS_ONE = -1;
    const ONE = 1;
    const ZERO = 0;
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return MINUS_ONE;
    }
    if (nameA > nameB) {
      return ONE;
    }
    return ZERO;
  };

  const newData = [...data];
  const sortingDataByOrderFilter = () => {
    const { column, sort } = order;
    const isNumber = data[0] && Number(newData[0][column]);
    if (sort === 'ASC') {
      if (isNumber) newData.sort((a, b) => a[column] - b[column]);
      else newData.sort((a, b) => sortNameOrder(a[column], b[column]));
    }
    if (sort === 'DESC') {
      if (isNumber) newData.sort((a, b) => b[column] - a[column]);
      else newData.sort((a, b) => sortNameOrder(b[column], a[column]));
    }
  };
  sortingDataByOrderFilter();

  return (
    <table>
      <thead>
        <tr>
          { data[0] && Object.keys(data[0]).map((title) => {
            let newTitle = title.split('_').join(' ');
            newTitle = newTitle[0].toUpperCase() + newTitle.substr(1);
            if (title === 'residents') return null;
            return <th key={ title }>{ newTitle }</th>;
          }) }
        </tr>
      </thead>
      <tbody>
        { newData.map((planet) => {
          const planetName = planet.name.toLowerCase();
          const pNameIncludesInputValue = planetName.includes(name.toLowerCase());
          if (filterByNumericValues
            .map((filter) => planetFilterByNumericValues(planet, filter))
            .every((filter) => filter === true)
          ) {
            if (name && pNameIncludesInputValue) return renderTableRow(planet);
            if (name === '') return renderTableRow(planet);
          }
          return null;
        }) }
      </tbody>
    </table>
  );
}

export default Table;
