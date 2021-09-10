import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';

function Table() {
  const { data, filters: {
    filterByName,
    filterByNumericValues,
  } } = useContext(MainContext);
  const [tableHeading, setTableHeading] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const array = Object.keys(data[0]);
      setTableHeading(array);
    }
  }, [data]);

  useEffect(() => {
    const { name } = filterByName;
    const filterPlanetsByName = () => {
      if (!name) {
        setPlanets(data);
      } else {
        setPlanets(data.filter((p) => p.name.toLowerCase().includes(name)));
      }
    };

    if (data.length) return filterPlanetsByName();
  }, [data, filterByName]);

  const numericFiltering = (array, column, comparison, value) => (
    array.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    }));

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setPlanets((prevsPlanets) => {
        if (prevsPlanets.length < 1) {
          if (!filterByName.name) {
            return numericFiltering(data, column, comparison, value);
          }
          const filteringByName = data
            .filter(({ name }) => name.includes(filterByName.name));
          return numericFiltering(filteringByName, column, comparison, value);
        }
        return numericFiltering(prevsPlanets, column, comparison, value);
      })
    ));
  }, [data, filterByName.name, filterByNumericValues]);

  function renderFilteredByName() {
    return (
      planets.map((planet) => (
        <tr key={ planet.name }>
          {
            Object.values(planet)
              .map((property) => (<td key={ property }>{ property }</td>))
          }
        </tr>
      ))
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeading.map((header) => <th key={ header }>{ header }</th>)
          }
        </tr>
      </thead>
      <tbody>
        { renderFilteredByName() }
      </tbody>
    </table>
  );
}

export default Table;
