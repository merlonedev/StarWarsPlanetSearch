import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, dataError, filterNumericValues, filters: {
    filterByName, filterByNumericValues } } = useContext(Context);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    let newPlanets = data;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (value) newPlanets = filterNumericValues(newPlanets, column, comparison, value);
    });

    setPlanets(newPlanets);
  }, [data, filterByName, filterByNumericValues, filterNumericValues]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [data, filterByName]);

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
