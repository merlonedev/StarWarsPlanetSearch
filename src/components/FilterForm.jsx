import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';

// prettier-ignore
export default function FilterForm() {
  const {
    filters,
    selectedFilters,
    setFilters,
    setSelectedFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  // const columnOptions = [
  //   { cod: 'population', display: 'Population' },
  //   { cod: 'orbital_period', display: 'Orbital Period' },
  //   { cod: 'diameter', display: 'Diameter' },
  //   { cod: 'rotation_period', display: 'Rotation Period' },
  //   { cod: 'surface_water', display: 'Surface Water' },
  // ];

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // const comparisonOptions = [
  //   { cod: 'greater', display: '>' },
  //   { cod: 'smaller', display: '<' },
  //   { cod: 'equal', display: '=' },
  // ];

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  function onChangeName({ target }) {
    setFilters({
      ...filters,
      filterByName: target.value,
    });
  }

  // Source: https://stackoverflow.com/questions/38379328/why-select-option-change-event-cant-have-this-and-event-target-to-get-selected
  function onChangeColumn({ target }) {
    setColumn(target[target.selectedIndex].text);
  }

  function onChangeComparison({ target }) {
    setComparison(target[target.selectedIndex].text);
  }

  function onChangeValue({ target }) {
    setValue(target.value);
  }

  function comparisonStateToContext() {
    setSelectedFilters([...selectedFilters, column]);
    if (filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      });
    }
  }

  function filterColumnOptionsBySelected(array) {
    const filtered = array.filter(
      (option) => !selectedFilters.includes(option),
    );
    return filtered;
  }

  function spreadOptionsByArray(array) {
    return array.map((option, index) => (
      // <option key={ index } value={ option.cod }>
      //   {option.display}
      <option key={ index } value={ option }>
        {option}
      </option>
    ));
  }

  return (
    <form className="pure-form default-padding">
      <fieldset>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={ onChangeName }
          data-testid="name-filter"
        />
        <span className="filter-separator">and</span>
        <select data-testid="column-filter" onChange={ onChangeColumn }>
          {spreadOptionsByArray(filterColumnOptionsBySelected(columnOptions))}
        </select>
        <select data-testid="comparison-filter" onChange={ onChangeComparison }>
          {spreadOptionsByArray(comparisonOptions)}
        </select>
        <input
          type="number"
          placeholder="Insert a value"
          onChange={ onChangeValue }
          data-testid="value-filter"
        />
        <button
          type="button"
          className="pure-button pure-button-primary"
          data-testid="button-filter"
          onClick={ comparisonStateToContext }
        >
          Add Filter
        </button>
      </fieldset>
      <legend>
        <i>To explore the galaxy, use the filters above you must.</i>
      </legend>
    </form>
  );
}
