import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { switchComparison, sortASC, sortDESC } from '../../utils/data';
import './style.css';

const Table = () => {
  const {
    data,
    filters: {
      filterByName: { name: typedName },
      filterByNumericValue,
      order,
    },
  } = useContext(Context);

  const [usefulData, setUsefulData] = useState([]);

  const sortData = (array) => {
    const { column, sort } = order;
    switch (sort) {
    case 'ASC':
      return array.sort((a, b) => sortASC(a, b, column));
    case 'DESC':
      return array.sort((a, b) => sortDESC(a, b, column));
    default:
      return array;
    }
  };

  const filterByName = (array) => {
    if (array.length > 0) {
      return array.filter(({ name: planetName }) => planetName
        .toLowerCase().includes(typedName.toLowerCase()));
    }
    return array;
  };

  const filterByValue = (array) => {
    if (filterByNumericValue.length > 0) {
      let filteredData = array;
      filterByNumericValue.forEach(({ column, comparison, value }) => {
        filteredData = filteredData
          .filter((planet) => switchComparison(planet, column, comparison, value));
      });
      return filteredData;
    }
    return array;
  };

  const applyFilters = () => setUsefulData(sortData(filterByValue(filterByName(data))));

  useEffect(
    applyFilters,
    [data, typedName, filterByNumericValue, order],
  );

  if (usefulData.length === 0) return <div className="loading">Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          usefulData.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td data-testid="planet-name">{ name }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>
                <ul>
                  {
                    films.map((film) => <li key={ film }>{ film }</li>)
                  }
                </ul>
              </td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
