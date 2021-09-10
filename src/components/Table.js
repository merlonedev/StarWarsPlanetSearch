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

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setPlanets((prevsPlanets) => prevsPlanets.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      }))
    ));
  }, [filterByNumericValues]);

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
