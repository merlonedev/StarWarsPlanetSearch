import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, dataError, filters: {
    filterByName, filterByNumericValues } } = useContext(Context);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [data, filterByName]);

  const filterNumericValues = (planetsData, column, comparison, value) => {
    let filteredPlanets;

    if (comparison === 'maior que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) > Number(value)
      ));
    }

    if (comparison === 'menor que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) < Number(value)
      ));
    }
    if (comparison === 'igual a') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) === Number(value)
      ));
    }
    return filteredPlanets;
  };

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setPlanets((prevPlanets) => {
        if (prevPlanets.length < 1) {
          if (!filterByName.name) {
            return filterNumericValues(data, column, comparison, value);
          }
          const filteredByName = data.filter(({ name }) => (
            name.includes(filterByName.name)
          ));
          return filterNumericValues(filteredByName, column, comparison, value);
        }
        return filterNumericValues(prevPlanets, column, comparison, value);
      })
    ));
  }, [data, filterByName, filterByNumericValues]);

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
       { planets.map((planet, i) => (
         <tr key={ i }>
           { Object.keys(planet).map((column, j) => (
             <td key={ j }>{ planet[column] }</td>
           ))}
         </tr>
       ))}
     </tbody>
   </table>
 );
}
