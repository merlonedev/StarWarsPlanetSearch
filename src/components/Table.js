import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import useFetchApiPlanets from '../Hooks/apiPlanets';
import useFiltering from '../Hooks/filtering';
import './table.css';

export default function Table() {
  const { data, setData } = useContext(StarWarsContext);
  const { results } = useFetchApiPlanets();
  let tableHeads = [];

  if (results !== undefined) {
    results.map((planet) => delete planet.residents);
    setData(results);
  }
  if (data.length > 0) {
    tableHeads = Object.keys(data[0]);
  }
  const filtered = useFiltering();

  return (

    ((Object.keys(data).length === 0)) ? <h1>Loading...</h1>
      : (
        <table className="table">
          <thead>
            <tr>
              {tableHeads.map((el, key) => (
                <th key={ key }>
                  {el}
                </th>))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>
                  { planet.orbital_period }
                </td>
                <td>
                  { planet.diameter }
                </td>
                <td>
                  { planet.climate }
                </td>
                <td>
                  { planet.gravity }
                </td>
                <td>
                  { planet.terrain }
                </td>
                <td>
                  { planet.surface_water }
                </td>
                <td>
                  { planet.population }
                </td>
                <td>
                  <a href={ planet.films }>{planet.films}</a>
                </td>
                <td>
                  { planet.created }
                </td>
                <td>
                  { planet.edited }
                </td>
                <td>
                  <a href={ planet.url }>{ planet.url }</a>
                </td>
              </tr>))}
          </tbody>
        </table>
      )
  );
}
