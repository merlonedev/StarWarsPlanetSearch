import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { loading, filters } = useContext(AppContext);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    const comparisons = {
      'maior que': '>',
      'menor que': '<',
      'igual a': '===',
    };
    console.log(filterByNumericValues
      .map(({ column, comparison, value }) => [column, comparisons[comparison], value]));
  }, [filterByNumericValues]);

  let { data } = useContext(AppContext);
  const { filterByName: { name } } = filters;
  if (loading) return 'Loading';
  if (name) data = data.filter((d) => d.name.toLowerCase().includes(name));
  if (!data.length) return 'No Planet Found';

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, i) => (
            <th key={ i }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, key) => (
              <td key={ key }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
