import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableData from './TableData';

function Table() {
  const { data, inputName, inputNumeric } = useContext(PlanetContext);
  const { filters: { filterByNumericValues: {
    column, comparison, value,
  } } } = useContext(PlanetContext);

  const tableFilter = () => {
    if (data) {
      if (inputName) {
        const dataFilterByName = data.filter((item) => (
          item.name.toLowerCase().includes(inputName.toLowerCase())
        ));
        return <TableData data={ dataFilterByName } />;
      }

      if (inputNumeric) {
        const dataFilterByNumber = data.filter((item) => {
          if (comparison === 'maior que') return item[column] > +value;
          if (comparison === 'menor que') return item[column] < +value;
          return item[column] === value;
        });
        return <TableData data={ dataFilterByNumber } />;
      }

      return <TableData data={ data } />;
    }
  };

  return (
    <div className="App">
      <h2>Eu sou o Componente Table!</h2>
      <table>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
        { tableFilter() }
      </table>
    </div>
  );
}

export default Table;
