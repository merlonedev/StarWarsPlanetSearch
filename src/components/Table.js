import React, { useContext } from 'react';
import Loading from './Loading';
import SWContext from '../context/SWContext';

const Table = () => {
  const { planets, planetFilters } = useContext(SWContext);
  const { filterByName: { name }, filterByNumericValues } = planetFilters;

  if (!planets) return Loading;

  const renderTableHead = () => (
    <thead>
      <tr>
        { Object.keys(planets[0])
          .map((key) => <th key={ key }>{ key.toLocaleUpperCase() }</th>) }
      </tr>
    </thead>
  );

  const filtering = () => {
    let filterByName = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        filterByName = filterByName.filter((planet) => +planet[column] > +value);
        return filterByName;
      case 'menor que':
        filterByName = filterByName.filter((planet) => +planet[column] < +value);
        return filterByName;
      case 'igual a':
        filterByName = filterByName.filter((planet) => +planet[column] === +value);
        return filterByName;
      default:
        return filterByName;
      }
    });
    return filterByName;
  };

  const renderTableBody = () => (
    <tbody>
      {filtering().map((result) => (
        <tr key={ result.name }>
          { Object.keys(planets[0])
            .map((key) => <td key={ key }>{ result[key] }</td>)}
        </tr>
      )) }
    </tbody>
  );

  const RenderTable = () => (
    <table>
      { renderTableHead() }
      { renderTableBody() }
    </table>
  );

  return RenderTable();
};

export default Table;
