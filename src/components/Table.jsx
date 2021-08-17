import React, { useEffect, useContext } from 'react';
import AppContext from '../context/Context';

export default function Table() {
  const { planets, setPlanets } = useContext(AppContext);
  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      setPlanets(results);
    };
    fetchAPI();
  }, [setPlanets]);
  if (!planets.length) { return <div>LOADING...</div>; }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key, i) => {
            if (key === 'residents') { return; }
            return (<th key={ i }>{key}</th>);
          })}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => {
          const data = Object.values(planet);
          return (
            <tr key={ i }>
              {data.map((value, key) => (<td key={ key }>{value}</td>))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
