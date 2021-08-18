import React, { useContext, useEffect, useState } from 'react';

import Context from '../context/Context';

function Table() {
  const
    {
      data,
      loading,
      filters: { filterByName, filterByNumericValues },
    } = useContext(Context);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      setPlanets(data.filter((planet) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return true;
        }
      }));
    });
  }, [data, filterByNumericValues]);

  if (loading) return 'Loading';
  if (planets.length === 0) return 'No planets found';

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{key}</th>

          ))}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter(({ name }) => name.toLowerCase()
            .includes(filterByName.name.toLowerCase()))
          .map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((value) => (
                <td key={ value }>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
