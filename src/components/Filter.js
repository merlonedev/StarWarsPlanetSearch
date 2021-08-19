import React, { useContext, useState } from 'react';
import MyContext from '../context/context';
import Sort from './Sort';

const filterSelectOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const InitialFilter = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function Filter() {
  const { filters, setFilter } = useContext(MyContext);
  const [baseFilter, setBaseFilter] = useState(InitialFilter);
  const [baseSelect, setBaseSelect] = useState(filterSelectOptions);
  const [baseComparison] = useState(comparisonOptions);
  const [removeFilter, setRemoveFilter] = useState([]);

  const filterName = ({ target: { value } }) => {
    setFilter({ ...filters, filterByName: { ...filters.filterByName, name: value } });
  };

  const handleChange = ({ target: { id, value } }) => {
    setBaseFilter({ ...baseFilter, [id]: value });
  };

  const handleSubmit = () => {
    const result = baseSelect // Filtra options pra tirar as ja usadas.
      .filter((item) => item !== baseFilter.column);
    setBaseSelect(result); // Salva as options.
    setFilter({ ...filters, // Manda de volta pro context, atualizando os filters.
      filterByNumericValues: [...filters.filterByNumericValues, baseFilter],
    });
    setRemoveFilter([...removeFilter, baseFilter]);
    setBaseFilter({ ...baseFilter, // Troca o item (valor) da lista, quando o anterior e removido.
      column: baseSelect.length ? baseSelect[0] : '',
      value: '0',
    });
  };

  const handleDelete = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((item) => item.column !== value),
    });
    setRemoveFilter(removeFilter.filter((item) => item.column !== value));
  };

  const createFilterToDelete = () => {
    const createFilter = (
      <div>
        { removeFilter.map((item) => {
          const deletable = (
            <div key={ item.column } data-testid="filter">
              <p>{ JSON.stringify(item) }</p>
              <button
                type="button"
                value={ item.column }
                onClick={ handleDelete }
              >
                X
              </button>
            </div>
          );
          return deletable;
        }) }
      </div>
    );
    return createFilter;
  };

  return (
    <>
      <label htmlFor="name">
        Filter:
        <input data-testid="name-filter" type="text" id="name" onChange={ filterName } />
      </label>
      <label htmlFor="column">
        Column Filter:
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          { baseSelect.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison:
        <select id="comparison" data-testid="comparison-filter" onChange={ handleChange }>
          { baseComparison.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="value">
        Value:
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleSubmit }
        data-testid="button-filter"
      >
        Filter
      </button>
      <br />
      <Sort />
      <br />
      { createFilterToDelete() }
    </>
  );
}

export default Filter;
