import React, { useState, useEffect } from 'react';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [tableHeadData, setTableHeadData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(API_URL);
      const { results } = await response.json();
      const resultsWithoutResidents = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(resultsWithoutResidents);
      setTableHeadData(Object.keys(resultsWithoutResidents[0]));
    };
    fetchAPI();
  }, []);

  const tableHead = () => (
    <thead>
      <tr>
        { tableHeadData.map((column, index) => (
          <th key={ index }>{column}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <table>
      { tableHead() }
      <tbody>
        { planets.map((planet, index) => (
          <tr key={ index }>
            {tableHeadData.map((column, dataindex) => (
              <td key={ dataindex }>{ planet[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
