import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../../Context';

export default function Table() {
  const {
    data,
    filters: { filterByName, filterByNumericValues },
    order,
    apiError,
  } = useMyContext();

  const orderedArray = useCallback((array) => {
    const oneNegative = -1;
    if (array.length > 0 && !Number(array[0][order.column])) {
      array.sort((a, b) => {
        if (a[order.column] < b[order.column]) return oneNegative;
        if (a[order.column] > b[order.column]) return 1;
        return 0;
      });
      if (order.sort !== 'ASC') array.reverse();
      return array;
    }
    array.sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
    if (order.sort !== 'ASC') array.reverse();
    return array;
  }, [order.column, order.sort]);

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

  const filtredArray = useCallback(() => {
    let planets = data;
    const filteringByName = (array) => array.filter(({ name }) => (
      name.includes(filterByName.name)));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (!filterByName.name) {
          planets = numericFiltering(planets, column, comparison, value);
        } else {
          planets = numericFiltering(filteringByName(planets), column, comparison, value);
        }
      });
    } else if (filterByName.name) {
      planets = filteringByName(planets);
    }
    return orderedArray(planets);
  }, [data, filterByName.name, filterByNumericValues, orderedArray]);

  return (!apiError
    && (
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
              { Object.keys(planet).map((key, index) => (
                (index === 0)
                  ? <td key={ uuidv4() } data-testid="planet-name">{ planet[key] }</td>
                  : key !== 'residents' && <td key={ uuidv4() }>{ planet[key] }</td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    )
  );
}
