import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../context/Context';

export default function Table() {
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, setPlanets, filters } = useContext(AppContext);
  useEffect(() => {
    const fetchAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((r) => r.json());
      setPlanets(results);
    };
    fetchAPI();
  }, [setPlanets]);
  useEffect(() => {
    const filterPlanets = data
      .filter(({ name }) => name.toLowerCase().includes(filters.filterByName));
    setFilteredPlanets(filterPlanets);
  }, [data, filters.filterByName]);
  if (!filteredPlanets.length) { return <div>LOADING...</div>; }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(filteredPlanets[0]).map((key, i) => {
            if (key === 'residents') { return; }
            return (<th key={ i }>{key}</th>);
          })}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, j) => (<td key={ j }>{value}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
