import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import fetchPlanets from '../../api/fetchPlanets';

export default function Table() {
  const [planets, setPlanets] = useState([]);
  const { setData } = useContext(GlobalContext);

  /*   const generateId = () => {
    setId(id + 1);
    return id;
  }; */

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
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
            .map((key, index1) => (
              key !== 'residents' && <th key={ index1 }>{ key }</th>)) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, index2) => (
          <tr key={ index2 }>
            { Object.keys(planet).map((key, index3) => (
              key !== 'residents' && <td key={ index3 }>{ planet[key] }</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
