import React from 'react';
import PropTypes from 'prop-types';

export default function Lines(props) {
  const { Result } = props;
  return (
    <tr>
      <td>{Result.name}</td>
      <td>{Result.climate}</td>
      <td>{Result.created}</td>
      <td>{Result.diameter}</td>
      <td>{Result.edited}</td>
      <td>{Result.films}</td>
      <td>{Result.gravity}</td>
      <td>{Result.orbital_period}</td>
      <td>{Result.population}</td>
      <td>{Result.residents}</td>
      <td>{Result.rotation_period}</td>
      <td>{Result.surface_water}</td>
      <td>{Result.terrain}</td>
      <td>{Result.url}</td>
    </tr>
  );
}

Lines.propTypes = {
  Result: PropTypes.shape({
    name: PropTypes.string,
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.string,
    gravity: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    residents: PropTypes.string,
    rotation_period: PropTypes.string,
    riod: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,

  }).isRequired,
};
