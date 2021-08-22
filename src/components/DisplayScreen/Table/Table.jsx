import React, { useContext, useEffect, useState } from 'react';
import Context from '../../../context/Context';
import switchComparison from '../../../functions/switchComparison';

const Table = () => {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(Context);

  const [dataToBeUsed, setDataToBeUsed] = useState([]);

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
      console.log(filteredData);
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
