import React from 'react';

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
