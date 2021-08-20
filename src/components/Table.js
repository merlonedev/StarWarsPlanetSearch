import React, { useEffect, useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { state, handleSetState } = useContext(planetsContext);
  const filteredName = state.filters.filterByName.name;
  const data = filteredName
    ? state.data.filter(
      (planet) => planet.name.toLowerCase().includes(filteredName.toLowerCase()),
    ) : state.data;
  const header = state.data
    ? Object.keys(state.data[0]).filter((headers) => headers !== 'residents') : '';

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((result) => result.json());
      handleSetState('data', results);
    };

    getPlanets();
  }, []);
  return (
    data ? (
      <table>
        <thead>
          <tr>
            {
              header.map((column) => (
                <th key={ column }>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data === ''
            ? console.log('vazio')
            : data.map(({ name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              surface_water: surfaceWater,
              diameter,
              population,
              climate,
              created,
              edited,
              films,
              gravity,
              terrain,
              url,
            }) => (
              <tr key={ name }>
                <td>
                  {name}
                </td>
                <td>
                  {rotationPeriod}
                </td>
                <td>
                  {orbitalPeriod}
                </td>
                <td>
                  {diameter}
                </td>
                <td>
                  {climate}
                </td>
                <td>
                  {gravity}
                </td>
                <td>
                  {terrain}
                </td>
                <td>
                  {surfaceWater}
                </td>
                <td>
                  {population}
                </td>
                <td>
                  {films}
                </td>
                <td>
                  {created}
                </td>
                <td>
                  {edited}
                </td>
                <td>
                  {url}
                </td>
              </tr>
            ))}
        </tbody>
      </table>)
      : <h1>Loading :)</h1>);
}

export default Table;
