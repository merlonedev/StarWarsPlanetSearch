import React, { useContext } from 'react';
import MyContext from '../Context/Context';

function Table() {
  const { data,
    filters: { filterByName: { name },
      filterByNumericValues: [{ column, comparison, value }] } } = useContext(MyContext);
  const head = Object.keys(data[0]);
  const header = head.map((tagHead, index) => {
    if (tagHead !== 'residents') {
      return <th key={ index }>{ tagHead }</th>;
    }
    return null;
  });

  const inputName = name.toLowerCase();
  const filterData = data.filter((PlanetInfo) => PlanetInfo.name.toLowerCase()
    .includes(inputName));

  // Usei a ideia de filtrar o data antes de usá-lo na renderização baseada no código do colega Rodrigo Facury
  const initialFilter = () => {
    if (comparison === 'maior que') {
      return filterData.filter((infoPlanet) => Number(infoPlanet[column]) > value);
    }
    if (comparison === 'menor que') {
      return filterData.filter((infoPlanet) => Number(infoPlanet[column]) < value);
    }
    if (comparison === 'igual a') {
      return filterData.filter((infoPlanet) => infoPlanet[column] === value);
    }
  };

  const body = initialFilter().map((results, index) => {
    const result = Object.entries(results);
    return (
      <tr key={ index }>
        { result.map((planetEntry) => {
          if (planetEntry[0] !== 'residents') {
            return (
              <td key={ planetEntry[1] }>{ planetEntry[1] }</td>
            );
          }
          return null;
        })}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          { header }
        </tr>
      </thead>
      <tbody>
        { body }
      </tbody>
    </table>
  );
}

export default Table;
