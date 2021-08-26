import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../context/Provider';

export default function Table() {
  const { data, filters: { filterByName, filterByNumericValues } } = useMyContext();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [filterByName, data]);

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
          const filternamedata = data
            .filter(({ name }) => name.includes(filterByName.name));
          return numericFiltering(filternamedata, column, comparison, value);
        }
        return numericFiltering(prevsPlanets, column, comparison, value);
      })
    ));
  }, [data, filterByName, filterByNumericValues]);

  return (
    <>
      <thead>
        <tr>
          { data.length > 0
          && Object.keys(data[0])
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
    </>
  );
}
