import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function PlanetApi() {
  const { setData, filters } = useContext(MyContext);
  const { filterByName: { name } } = filters;
  let { data } = useContext(MyContext);
  if (name !== '') {
    data = data.filter((planet) => (
      (planet.name.toLowerCase()).includes(name.toLowerCase())
    ));
  }

  useEffect(() => {
    const getPlanet = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((response) => response.json());
      results.forEach((result) => { delete result.residents; });
      setData(results);
    };
    getPlanet();
  }, [setData]);
  const header = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              header.map((element) => (
                <th key={ element }>{ element }</th>
              ))
            }
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
    </div>
  );
}

export default PlanetApi;
