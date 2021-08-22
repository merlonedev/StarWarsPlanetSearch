import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  const { infos, loading, filters } = useContext(myContext);
  const { filterByName, filterByNumericValues } = filters;
  const { data } = useContext(myContext);
  let filteredData = [...data];

  if (filterByName.name) {
    filteredData = filteredData.filter((datas) => datas.name
      .toLowerCase().includes(filterByName.name.toLowerCase()));
  }

  // Agradecimentos à todos os meus colegas que me ajudaram a enxergar e aplicar a lógica nesse filtro
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filteredData = filteredData.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      });
      return filteredData;
    });
  }

  function tableBody(planets) {
    return (
      planets.map((planet) => (
        <tr key={ planet.name }>
          <td key={ planet.name }>{planet.name}</td>
          <td key={ planet.rotation_period }>{planet.rotation_period}</td>
          <td key={ planet.orbital_period }>{planet.orbital_period}</td>
          <td key={ planet.diameter }>{planet.diameter}</td>
          <td key={ planet.climate }>{planet.climate}</td>
          <td key={ planet.gravity }>{planet.gravity}</td>
          <td key={ planet.terrain }>{planet.terrain}</td>
          <td key={ planet.surface_water }>{planet.surface_water}</td>
          <td key={ planet.population }>{planet.population}</td>
          <td key={ planet.films }>{planet.films}</td>
          <td key={ planet.created }>{planet.created}</td>
          <td key={ planet.edited }>{planet.edited}</td>
          <td key={ planet.url }>{planet.url}</td>
        </tr>
      ))
    );
  }

  return (
    <>
      {loading && 'Carregando...'}
      <table>
        <thead>
          <tr>
            {
              infos.filter((info) => info !== 'residents').map((info) => (
                <th key={ info.name }>
                  {info}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            tableBody(filteredData)
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
