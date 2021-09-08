import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SortService } from '../Services/SortService';

export default function SortSelect(props) {
  const { data, setdata } = props;
  const [sortvalues, setSort] = useState(['url', true]);
  const colunas = ['name', 'climate', 'created',
    'diameter', 'edited', 'films', 'gravity',
    'orbital_period', 'population', 'rotation_period',
    'suface_Water', 'terrain', 'url'];
  return (
    <>
      <select
        name="select"
        data-testid="column-sort"
        onChange={ (e) => {
          sortvalues[0] = e.target.value;
          setSort([...sortvalues]);
        } }
      >
        {colunas.map((n, index) => (
          <option
            key={ index }
            value={ n }
            selected
          >
            {n}
          </option>))}
      </select>
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        value="ASC"
        checked={ sortvalues[1] }
        onClick={ () => {
          sortvalues[1] = !sortvalues[1];
          setSort([...sortvalues]);
        } }
      />
      Crescente
      <input
        type="radio"
        data-testid="column-sort-input-desc"
        value="DESC"
        checked={ !sortvalues[1] }
        onClick={ () => {
          sortvalues[1] = !sortvalues[1];
          setSort([...sortvalues]);
        } }
      />
      Decrescente
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setdata(SortService(sortvalues[0], sortvalues[1], data));
        } }
      >
        ordenar
      </button>
    </>
  );
}

SortSelect.propTypes = {
  data: PropTypes.string.isRequired,
  setdata: PropTypes.func.isRequired,
};
