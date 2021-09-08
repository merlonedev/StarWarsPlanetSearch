import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const Table = () => {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(AppContext);

  const [dataToBeUsed, setDataToBeUsed] = useState([]);

  const optionsComparison = [
    'maior que',
    'igual a',
    'menor que',
  ];

  const switchComparison = (planet, column, comparison, value) => {
    switch (comparison) {
    case optionsComparison[0]:
      return (+planet[column] > +value);
    case optionsComparison[1]:
      return (+planet[column] === +value);
    case optionsComparison[2]:
      return (+planet[column] < +value);
    default:
      return null;
    }
  };

  const filterByName = (planets) => {
    if (planets.length > 0) {
      return planets.filter((planet) => planet.name.includes(name));
    }
    return planets;
  };

  const filterByValue = (planets) => {
    if (filterByNumericValues.length > 0) {
      let filteredData = planets;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filteredData = filteredData
          .filter((planet) => switchComparison(planet, column, comparison, value));
      });
      return filteredData;
    }
    return planets;
  };

  const applyFilters = () => (
    setDataToBeUsed(filterByValue(filterByName(data)))
  );

  useEffect(
    applyFilters,
    [data, name, filterByNumericValues],
  );

  if (dataToBeUsed.length === 0) return <h2>Loading...</h2>;

  const keysWithoutResidents = Object.keys(dataToBeUsed[0])
    .filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {keysWithoutResidents.map((key) => <th key={ key }>{ key }</th>)}
        </tr>
      </thead>
      <tbody>
        {dataToBeUsed
          .map((planet) => (
            <tr key={ planet.name }>
              {keysWithoutResidents.map((key) => (
                <td key={ planet[key] }>
                  {planet[key]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
