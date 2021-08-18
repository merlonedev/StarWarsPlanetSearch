import React from 'react';
import PropTypes from 'prop-types';

function TableLines({ objData }) {
  const {
    name,
    rotation_period: rotation,
    orbital_period: orbital,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surface,
    population,
    films,
    created,
    edited,
    url,
  } = objData;

  return (
    <tr>
      <td>{ name }</td>
      <td>{ rotation }</td>
      <td>{ orbital }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surface }</td>
      <td>{ population }</td>
      <td>
        <ul>
          {films.map((e, i) => <li key={ i }>{ e }</li>)}
        </ul>
      </td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

TableLines.propTypes = {
  objData: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default TableLines;
