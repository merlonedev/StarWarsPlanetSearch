import React, { useContext, useEffect, useState, useCallback } from 'react';
import Context from '../context/Context';

const POSITIVE = 1;
const NEGATIVE = -1;

export default function Table() {
  const { data, dataError, filterNumericValues, filters: {
    filterByName, filterByNumericValues, order } } = useContext(Context);

  const [planets, setPlanets] = useState([]);

  const set = (z, par) => {
    if (z[par] === 'unknown') return 0;
    if (Number.isNaN(Number(z[par]))) return z[par];
    return Number(z[par]);
  };

  const sortPlanets = useCallback((dataToSort) => {
    const { column, sort } = order;
    const key = column.toLowerCase();
    if (sort === 'ASC') {
      return dataToSort.sort((a, b) => {
        const x = set(a, key);
        const y = set(b, key);
        if (x < y) return NEGATIVE;
        if (x > y) return POSITIVE;
        return 0;
      });
    }

    return dataToSort.sort((a, b) => {
      const x = set(a, key);
      const y = set(b, key);
      if (x > y) return NEGATIVE;
      if (x < y) return POSITIVE;
      return 0;
    });
  }, [order]);

  useEffect(() => {
    let newPlanets = [...data];

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (value) newPlanets = filterNumericValues(newPlanets, column, comparison, value);
    });

    newPlanets = sortPlanets(newPlanets);

    setPlanets(newPlanets);
  }, [data, filterByName, filterByNumericValues, filterNumericValues, sortPlanets]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [data, filterByName]);

  sortPlanets(data);

  return (data.length > 0 && !dataError)
 && (
   <table>
     <thead>
       <tr>
         { Object.keys(data[0]).map((header, index) => (
           <th key={ index }>{ header }</th>
         ))}
       </tr>
     </thead>
     <tbody>
       { planets.map((planet) => (
         <tr key={ planet.name }>
           { Object.keys(planet).map((column) => (
             column === 'name'
               ? <td key={ column } data-testid="planet-name">{ planet[column]}</td>
               : <td key={ column }>{ planet[column]}</td>
           ))}
         </tr>
       ))}
     </tbody>
   </table>
 );
}
