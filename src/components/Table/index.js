import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../../Context';

export default function Table() {
  const { data, filters: { filterByName, filterByNumericValues } } = useMyContext();

  const numericFiltering = (array, column, comparison, value) => (
    array.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    })
  );

  const filtredArray = () => {
    let planets = [...data];
    const filteringByName = (array) => array.filter(({ name }) => (
      name.includes(filterByName.name)));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }, index) => {
        if (index === 0) {
          if (!filterByName.name) {
            planets = numericFiltering(data, column, comparison, value);
          } else {
            planets = numericFiltering(filteringByName(data), column, comparison, value);
          }
        } else if (!filterByName.name) {
          planets = numericFiltering(planets, column, comparison, value);
        } else {
          planets = numericFiltering(filteringByName(planets), column, comparison, value);
        }
      });
    } else if (filterByName.name) {
      planets = filteringByName(planets);
    }
    return planets;
  };

  return (
    <table>
      <thead>
        <tr>
          { data.length > 0
          && Object.keys(data[0])
            .map((key) => key !== 'residents' && <th key={ uuidv4() }>{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { filtredArray().map((planet) => (
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
