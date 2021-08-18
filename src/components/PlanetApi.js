import React, { useEffect, useState } from 'react';

function PlanetApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanet = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((response) => response.json());
      results.forEach((result) => { delete result.residents; });
      console.log(results);
      setData(results);
    };
    getPlanet();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>name:</th>
          <th>rotation_period:</th>
          <th>orbital_period:</th>
          <th>diameter:</th>
          <th>climate:</th>
          <th>gravity:</th>
          <th>terrain:</th>
          <th>surface_water:</th>
          <th>population:</th>
          <th>films:</th>
          <th>created:</th>
          <th>edited:</th>
          <th>url:</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, key) => (
              <td key={ key }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetApi;
