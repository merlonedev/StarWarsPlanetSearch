import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../context/Context';

export default function Table() {
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, filters } = useContext(AppContext);
  useEffect(() => {
    const filterByNumeric = (planets) => {
      const { column, comparison, value } = filters.filterByNumericValues;
      const filter = planets.filter((planet) => {
        if (comparison === 'equal') { return Number(planet[column]) === Number(value); }
        if (comparison === 'higher') { return Number(planet[column]) > Number(value); }
        if (comparison === 'lower') { return Number(planet[column]) < Number(value); }
        return planet;
      });
      setFilteredPlanets(filter);
    };
    const filterByName = data
      .filter(({ name }) => name.toLowerCase().includes(filters.filterByName));
    filterByNumeric(filterByName);
  }, [data, filters.filterByName, filters.filterByNumericValues]);
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
