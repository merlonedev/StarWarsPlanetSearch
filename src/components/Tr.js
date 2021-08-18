import React from 'react';
import PropTypes from 'prop-types';

function Tr({ planet }) {
  return (
    <tr>
      <td>{ planet.name }</td>
      <td>{ planet.terrain }</td>
      <td>{ planet.climate }</td>
      <td>{ planet.surface_water }</td>
      <td>{ planet.gravity }</td>
      <td>{ planet.diameter }</td>
      <td>{ planet.population }</td>
      <td>{ planet.orbital_period }</td>
      <td>{ planet.rotation_period }</td>
      <td>{ planet.films }</td>
      <td>{ planet.edited }</td>
      <td>{ planet.created }</td>
      <td>{ planet.url }</td>
    </tr>
  );
}

Tr.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    edited: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tr;
