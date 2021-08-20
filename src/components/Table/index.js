import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../../Context';

export default function Table() {
  const {
    data,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    order,
    apiError,
  } = useMyContext();

  const ordering = useCallback((array) => {
    const oneNegative = -1;
    if (array.length > 0 && !Number(array[0][order.column])) {
      array.sort((a, b) => {
        if (a[order.column] < b[order.column]) return oneNegative;
        if (a[order.column] > b[order.column]) return 1;
        return 0;
      });
      return order.sort === 'DESC' ? array.reverse() : array;
    }
    array.sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
    return order.sort === 'DESC' ? array.reverse() : array;
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

  const filteringByName = useCallback((array) => (
    (filterByName.name)
      ? array.filter(({ name }) => name.includes(filterByName.name))
      : array
  ), [filterByName.name]);

  const filteringByNumeric = (array) => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        array = numericFiltering(array, column, comparison, value);
      });
    }
    return array;
  };

  // Roberval's pattern;
  const filtredArray = () => ordering(filteringByName(filteringByNumeric(data)));

  return (!apiError
    && (
      <table>
        <thead>
          <tr>
            { data.length > 0
            && Object.keys(data[0]).map((key) => (
              key !== 'residents' && <th key={ uuidv4() }>{ key }</th>)) }
          </tr>
        </thead>
        <tbody>
          { filtredArray().map((planet) => (
            <tr key={ uuidv4() }>
              { Object.keys(planet).map((key) => (
                (key === 'name')
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
