import React, { useContext } from 'react';
import Loading from './Loading';
import SWContext from '../context/SWContext';

function Table() {
  const { planets, planetFilters } = useContext(SWContext);
  const { filterByName: { name } } = planetFilters;
  if (!planets) return Loading;

  const renderTableHead = () => (
    <thead>
      <tr>
        { Object.keys(planets[0])
          .map((key) => <th key={ key }>{ key.toLocaleUpperCase() }</th>) }
      </tr>
    </thead>
  );

  const renderTableBody = () => {
    const filterByName = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    return (
      <tbody>
        {filterByName.map((result) => (
          <tr key={ result.name }>
            { Object.keys(planets[0])
              .map((key) => <td key={ key }>{ result[key] }</td>)}
          </tr>
        )) }
      </tbody>
    );
  };

  const renderTable = () => (
    <table>
      { renderTableHead() }
      { renderTableBody() }
    </table>
  );

  return (
    renderTable()

  );
}

export default Table;
