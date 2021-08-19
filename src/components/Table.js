import React, { useContext, useState, useEffect } from 'react';
import StarContext from '../context/StarContext';
import './style/Table.css';

const LENGTH = -1;

function Table() {
  const { planets } = useContext(StarContext);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (planets.length) {
      setHeaders(
        Object.keys(planets[0]),
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
    <table className="table table-striped table-bordered table-sm align-middle">
      <thead>
        <tr>
          {headers.map((elem) => (<th scope="col" key={ elem }>{elem}</th>))}
        </tr>
      </thead>
      <tbody>
        {planets.length > LENGTH && planets.map((planet) => renderRow(planet))}
      </tbody>
    </table>

  );
}

export default Table;
