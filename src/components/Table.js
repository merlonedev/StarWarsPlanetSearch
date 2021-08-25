import React, { useContext } from 'react';
import Thead from './Thead';
import PlanetListContext from '../contexts/PlanetListContext';

function Table() {
  const { data, loading, filters } = useContext(PlanetListContext);

  // PERGUNTAR SOBRE O TESTE DAS COLUNAS
  const condition = (category, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return (Number(category) > Number(value));
    case 'menor que':
      return (Number(category) < Number(value));
    case 'igual a':
      return (Number(category) === value);
    default:
      return false;
    }
  };

  if (loading) { return <h2>Carregando...</h2>; }
  return (
    <table>
      <Thead />
      <tbody>
        {
          data.map((planet) => {
            const { filterByName,
              filterByNumericValues,
            } = filters;
            const { column, comparison, value } = filterByNumericValues[0];
            const { name } = planet;
            const rotationPeriod = planet.rotation_period;
            const orbitalPeriod = planet.orbital_period;
            const {
              diameter,
              climate,
              gravity,
              terrain,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            const surfaceWater = planet.surface_water;
            const category = planet[column];
            // console.log(condition(category, comparison, value));

            if (planet.name.includes(filterByName)) {
              return <tr key={ data.indexOf(planet) } />;
            }

            if (
              category !== undefined
              && !condition(category, comparison, value)
            ) {
              return <tr key={ data.indexOf(planet) } />;
            }

            return (
              <tr key={ data.indexOf(planet) }>
                <td key="name">
                  {
                    name
                  }
                </td>
                <td key="rotation">
                  { rotationPeriod }
                </td>
                <td key="orbital">
                  { orbitalPeriod }
                </td>
                <td key="diameter">
                  { diameter }
                </td>
                <td key="climate">
                  { climate }
                </td>
                <td key="gravity">
                  { gravity }
                </td>
                <td key="terrain">
                  { terrain }
                </td>
                <td key="water">
                  { surfaceWater }
                </td>
                <td key="population">
                  { population }
                </td>
                <td key="films">
                  { films.map((film) => (
                    <a href={ film } key={ films.indexOf(film) }>
                      { films.indexOf(film) }
                    </a>
                  ))}
                </td>
                <td key="created">
                  { created.split('T')[0] }
                </td>
                <td key="edited">
                  { edited.split('T')[0] }
                </td>
                <td key="url">
                  <a href={ url }>
                    Mais...
                  </a>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
