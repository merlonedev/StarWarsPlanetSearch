import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from '../../Context';

export default function Table() {
  const [planets, setPlanets] = useState([]);
  const { setData } = useContext(MyContext);

  useEffect(() => {
    const getPlanets = async () => {
      const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetching = await fetch(PLANETS_URL);
      const { results } = await fetching.json();
      setPlanets(results);
    };
    getPlanets();
  }, []);

  useEffect(() => { setData(planets); }, [planets, setData]);

  return (
    <table>
      <thead>
        <tr>
          { planets.length > 0
          && Object.keys(planets[0])
            .map((key) => key !== 'residents' && <th key={ uuidv4() }>{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ uuidv4() }>
            { Object.keys(planet).map((key) => (
              key !== 'residents' && <td key={ uuidv4() }>{ planet[key] }</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
