import React from 'react';
import PropTypes from 'prop-types';

function Table({ data }) {
  // Loading
  if (data.length === 0) return <h1>Loading...</h1>;

  // Carrega os valores do Header
  const tableHeaders = Object.keys(data[0]);

  // Mapping para consertar os nomes do Header
  const headerMapping = (str) => {
    switch (str) {
    case 'name': return 'Name';
    case 'rotation_period': return 'Rotation Period';
    case 'orbital_period': return 'Orbital Period';
    case 'diameter': return 'Diameter';
    case 'climate': return 'Climate';
    case 'gravity': return 'Gravity';
    case 'terrain': return 'Terrain';
    case 'surface_water': return 'Surface Water';
    case 'population': return 'Population';
    case 'films': return 'Films';
    case 'created': return 'Created';
    case 'edited': return 'Edited';
    case 'url': return 'URL';
    default: return str;
    }
  };

  // Renderiza o Header
  const renderTableHeader = () => (
    <tr>
      {
        tableHeaders
          .filter((th) => th !== 'residents')
          .map((th, index) => (
            <th
              className="thead"
              key={ `th${index}` }
            >
              {headerMapping(th)}
            </th>
          ))
      }
    </tr>
  );

  // Renderiza as linhas da tabela
  const renderTableRow = (row, i) => (
    tableHeaders
      .filter((cell) => cell !== 'residents')
      .map((cell, j) => {
        let dataTestId = false;
        if (cell === 'name') dataTestId = 'planet-name';
        return (
          <td
            data-testid={ dataTestId }
            className="trbody"
            key={ `td-L${i}C${j}` }
          >
            {row[cell]}
          </td>);
      })
  );

  // Renderiza o corpo da tabela
  const renderTableBody = () => (
    data.map((row, i) => (
      <tr key={ `tr${i}` }>
        {
          renderTableRow(row, i)
        }
      </tr>
    ))
  );

  return (
    <table className="table">
      <thead>
        { renderTableHeader() }
      </thead>
      <tbody>
        { renderTableBody() }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
