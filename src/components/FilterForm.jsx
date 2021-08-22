import React, { useContext } from 'react';
import StarWarsContext from '../context';

// prettier-ignore
export default function FilterForm() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function onChange({ target }) {
    console.log('Target: ', target.value);
    setFilters({
      filterByName: target.value,
    });
    console.log('Context: ', filters);
  }

  return (
    <form className="pure-form">
      <fieldset>
        <legend>If you want, use the filters below, padawan.</legend>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={ onChange }
          data-testid="name-filter"
        />
      </fieldset>
    </form>
  );
}
