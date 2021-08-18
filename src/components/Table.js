import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

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
        { data.map((planet) => renderTableRow(planet)) }
      </tbody>
    </table>
  );
}

export default Table;
