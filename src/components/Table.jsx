import React, { useEffect, useContext } from 'react';
import AppContext from '../context/Context';

export default function Table() {
  const { data, setPlanets, filters } = useContext(AppContext);
  useEffect(() => {
    const fetchAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((r) => r.json());
      const filterPlanets = await results
        .filter(({ name }) => name.toLowerCase().includes(filters.filterByName));
      setPlanets(filterPlanets);
    };
    fetchAPI();
  }, [filters.filterByName, setPlanets]);
  if (!data.length) { return <div>LOADING...</div>; }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, i) => {
            if (key === 'residents') { return; }
            return (<th key={ i }>{key}</th>);
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, j) => (<td key={ j }>{value}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
