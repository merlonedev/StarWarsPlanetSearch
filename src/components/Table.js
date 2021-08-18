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
        if (value === planet.name) 
          return <td data-testid="planet-name" key={ value }>{value}</td>
        return <td key={ value }>{value}</td>  
      })}
    </tr>
  );

  const newData = [...data];
  const sortingDataByOrderFilter = () => {
    if(order.sort === 'ASC' ) {
      if (data[0] && Number(newData[0][order.column])) {
        console.log('foi');
        newData.sort((a, b) => a[order.column] - b[order.column]);
        } else {
          newData.sort((a,b) => {
            var nameA = a[order.column].toUpperCase(); 
            var nameB = b[order.column].toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          return 0;
        })}
    };
    if(order.sort === 'DESC' ) {
      if (data[0] && Number(newData[0][order.column])) {
        newData.sort((a, b) => b[order.column] - a[order.column]);
        } else {
          newData.sort((a,b) => {
            var nameA = a[order.column].toUpperCase();
            var nameB = b[order.column].toUpperCase(); 
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
          return 0;
        })}
    };
  }
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
