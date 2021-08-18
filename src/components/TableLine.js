import React from 'react';
import PropTypes from 'prop-types';

function TableLine(props) {
  const { data } = props;

  return (
    <tbody>
      <tr>
        <td>{ data.name }</td>
        <td>{ data.rotation_period }</td>
        <td>{ data.orbital_period }</td>
        <td>{ data.diameter }</td>
        <td>{ data.climate }</td>
        <td>{ data.gravity }</td>
        <td>{ data.terrain }</td>
        <td>{ data.surface_water }</td>
        <td>{ data.population }</td>
        <td><li>{ data.films }</li></td>
        <td>{ data.created }</td>
        <td>{ data.edited }</td>
        <td>{ data.url }</td>
      </tr>
    </tbody>

  );
}

TableLine.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableLine;
