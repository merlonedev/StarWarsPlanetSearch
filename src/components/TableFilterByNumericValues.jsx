import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableFilterByNumericValues() {
  const { data } = useContext(PlanetContext);
  const { filters: { filterByNumericValues: {
    column, comparison, value,
  } } } = useContext(PlanetContext);

  const filterNumber = data.filter((item) => {
    if (comparison === 'maior_que') return item[column] >= value;
    if (comparison === 'menor_que') return item[column] <= value;
    return item[column] === value;
  });

  return (
    <tbody>
      {
        filterNumber.map((item) => (
          <tr key={ item.name }>
            <td>{ item.name }</td>
            <td>{ item.climate }</td>
            <td>{ item.created }</td>
            <td>{ item.diameter }</td>
            <td>{ item.edited }</td>
            <td>{ item.films }</td>
            <td>{ item.gravity }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.population }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.terrain }</td>
            <td>{ item.url }</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default TableFilterByNumericValues;
