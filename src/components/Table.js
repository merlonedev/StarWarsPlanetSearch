import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { 
    filterByName: { name },
    filterByNumericValues,
  } = filters;

  const planetFilterByNumericValues = (planet, filter) => {
    const { column, comparison, value } = filter;
    if (comparison === 'maior que') {
      if (planet[column] > Number(value)) return true;
    }
    if (comparison === 'menor que') {
      if (planet[column] < Number(value)) return true;
    }
    if (comparison === 'igual a') {
      if (planet[column] === Number(value)) return true;
    }
    return false;
  }

  const renderTableRow = (planet) => (
    <tr key={ planet.name }>
      { Object.values(planet).map((value) => <td key={ value }>{value}</td>) }
    </tr>
  );

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
        { data.map((planet) => {
          const planetName = planet.name.toLowerCase();
          const pNameIncludesInputValue = planetName.includes(name.toLowerCase());
          if (name && pNameIncludesInputValue) {
            if ( filterByNumericValues
              .map((filter) => planetFilterByNumericValues(planet, filter))
              .every((filter) => filter === true)
            ) return renderTableRow(planet);
          } 
          if (name === '') {
            if ( filterByNumericValues
              .map((filter) => planetFilterByNumericValues(planet, filter))
              .every((filter) => filter === true)
            ) return renderTableRow(planet);
          };
          return null;
        }) }
      </tbody>
    </table>
  );
}

export default Table;
