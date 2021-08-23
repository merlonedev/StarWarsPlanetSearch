import React, { useContext } from 'react';

import Apply from './Apply';
import Input from './Input';
import Select from './Select';

import { Context } from '../Provider';
import Rule from './Rule';

function Filter() {
  const {
    Filter: [filters, , setFilter],
    Rules: [rules, setRules],
  } = useContext(Context);

  const filterOptions = filters.filterByNumericValues.map(({ column }) => (
    column
  ));

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function handleChange(value, id) {
    if (id === 'name') {
      setFilter({ ...filters, filterByName: { name: value } });
    } else if (['column', 'comparison', 'value'].includes(id)) {
      setRules({ ...rules, [id]: value });
    } else {
      setFilter(filters);
    }
  }

  function handleClick() {
    if (!filters.filterByNumericValues.includes(rules)) {
      setFilter({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, rules],
      });
    }
  }

  return (
    <form>
      <fieldset>
        <legend>Name Filter</legend>
        <Input id="name" type="text" handleChange={ handleChange } />
      </fieldset>
      <fieldset>
        <legend>Numeric Filter</legend>
        <Select id="column" handleChange={ handleChange }>
          {
            options.filter((option) => !filterOptions.includes(option))
              .map((option, i) => (
                <option key={ i } value={ option }>{option}</option>
              ))
          }
        </Select>
        <Select id="comparison" handleChange={ handleChange }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </Select>
        <Input id="value" type="number" handleChange={ handleChange } />
        <Apply handleClick={ handleClick } />
      </fieldset>
      <fieldset>
        <legend>Rules</legend>
        {filters.filterByNumericValues.map(
          ({ column, comparison, value }, i) => (
            <Rule key={ i } index={ i }>
              <span>{column}</span>
              <span>{comparison}</span>
              <span>{value}</span>
            </Rule>
          ),
        )}
      </fieldset>
    </form>
  );
}

export default Filter;
