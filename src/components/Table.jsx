import React, { useContext } from 'react';
import SelectFilters from './SelectFilters';
import Context from '../context/Context';

function Table() {
  const { data, filters, filterNameResult, handleChange } = useContext(Context);
  const { filterByName } = filters;

  return (
    <div>
      <label htmlFor="filter">
        Planet Name:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
          value={ filterByName.name }
        />
      </label>
      <SelectFilters />
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
            filterNameResult.map((planet, idx) => (
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
