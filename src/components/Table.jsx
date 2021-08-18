import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const { data } = useContext(Context);
  const [filter, setFilter] = useState('');
  const [filterResult, setFilterResult] = useState([]);

  function handleChange({ target: { value } }) {
    setFilter(value);
  }

  useEffect(() => {
    const results = data.filter((planet) => planet.name.toLowerCase().includes(filter));
    setFilterResult(results);
  }, [data, filter]);

  return (
    <div>
      <label htmlFor="filter">
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
          value={ filter }
        />
      </label>
      <table>
        <thead>
          <tr>
            { data.length > 0
              ? Object.keys(data[0])
                .map((planet, idx) => planet !== 'residents'
                && <th key={ idx }>{ planet }</th>) : '' }
          </tr>
        </thead>
        <tbody>
          {
            filterResult.map((planet, idx) => (
              <tr key={ idx }>
                { Object.keys(planet)
                  .map((planets, i) => <td key={ i }>{planet[planets]}</td>) }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
