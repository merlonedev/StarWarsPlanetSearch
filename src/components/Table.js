import React, { useContext, useState, useEffect } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { planets } = useContext(StarContext);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (planets.results) {
      setHeaders(
        Object.keys(planets.results[0]).filter((elem) => elem !== 'residents'),
      );
    }
  }, [planets]);

  function renderRow(planet) {
    return (
      <tr key={ planet.name }>
        {Object.keys(planet).map(
          (elem) => elem !== 'residents' && (
            <td key={ `${planet.name}_${elem}` }>{planet[elem]}</td>
          ),
        )}
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((elem) => (<th key={ elem }>{elem}</th>))}
        </tr>
      </thead>
      <tbody>
        {planets.results && planets.results.map((planet) => renderRow(planet))}
      </tbody>
    </table>
  );
}

export default Table;
