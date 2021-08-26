import React, { useContext } from 'react';
import context from '../context/context';

const Table = () => {
  const { data, filters } = useContext(context);
  const { filterByName: { name }, filterByNumericValues } = filters;

  if (!data) return <h1>Loading</h1>;

  const renderTH = () => (
    <thead>
      <tr>
        {Object.keys(data[0])
          .map((key) => <th key={ key }>{ key }</th>)}
      </tr>
    </thead>
  );

  const filterFunc = () => {
    let filterByName = data
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
      // CODIGO FEITO COM AJUDA DA THAISA E DO THALES NO PLANTAO DAS 13H
    });
    return filterByName;
  };

  const renderTB = () => (
    <tbody>
      {filterFunc().map((result) => (
        <tr key={ result.name }>
          { Object.keys(data[0])
            .map((key) => <td key={ key }>{ result[key] }</td>)}
        </tr>
      )) }
    </tbody>
  );

  const renderEntireTable = () => (
    <table>
      { renderTH() }
      { renderTB()}
    </table>
  );
  return renderEntireTable();
};
export default Table;
