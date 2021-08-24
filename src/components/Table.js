import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Thead from './Thead';
import PlanetListContext from '../contexts/PlanetListContext';

function Table() {
  const { planetList, loading } = useContext(PlanetListContext);

  if (loading) { return <h2>Carregando...</h2>; }
  return (
    <table>
      <Thead />
      <tbody>
        {
          planetList.map((planet) => {
            const { name } = planet;
            const rotationPeriod = planet.rotation_period;
            const orbitalPeriod = planet.orbital_period;
            const { diameter, climate, gravity, terrain, population } = planet;
            const surfaceWater = planet.surface_water;
            return (
              <tr key={ planetList.indexOf(planet) }>
                <td key="name">
                  { name }
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
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

// const { func } = PropTypes;
// Table.propTypes = {
//   loading: func.isRequired,
// };

// App.defaultProps = {
//   setLoading: null,
// };

export default Table;
