import React, { useContext } from 'react';
import Thead from './Thead';
import PlanetListContext from '../contexts/PlanetListContext';

function Table() {
  const { data, loading, filters } = useContext(PlanetListContext);

  const condition = (category, comparison, value) => {
    console.log(comparison);
    switch (comparison) {
    case 'maior que':
      return (Number(category) > Number(value));
    case 'menor que':
      return (Number(category) < Number(value));
    case 'igual a':
      return (Number(category) === Number(value));
    default:
      return false;
    }
  };

  const checkFilters = () => {
    const { filterByName,
      filterByNumericValues,
    } = filters;

    if (filterByName.name !== '') {
      const newData = data.filter((planet) => planet.name.includes(filterByName.name));

      return newData;
    }

    if (filterByNumericValues[1] !== undefined) {
      let newData = data;
      filterByNumericValues.map((filter) => {
        if (filterByNumericValues.indexOf(filter) === 0) {
          return filter;
        }
        const { column, comparison, value } = filter;
        const filterData = newData.filter((planet) => {
          const category = planet[column];
          return condition(category, comparison, value);
        });
        newData = filterData;
        return newData;
      });
      return newData;
    }

    return data;
  };

  if (loading) { return <h2>Carregando...</h2>; }
  return (
    <table>
      <Thead />
      <tbody>
        {
          checkFilters().map((planet) => {
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
