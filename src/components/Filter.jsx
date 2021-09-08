import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/AppContext';

const orderHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

const Filter = () => {
  const defaultValues = {
    column: 'population',
    comparison: 'maior que',
    value: '',
  };

  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name: filterName }, filterByNumberValues } = filters;
  const [buttonStatus, setButtonStatus] = useState(true);
  const [selectValues, setSelectValues] = useState(defaultValues);
  const [orderValues, setOrderValues] = useState({ column: 'name', sort: 'ASC' });

  const handleFilterName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleSort = ({ target: { name, value } }) => {
    setOrderValues({ ...orderValues, [name]: value });
  };

  useEffect(() => {
    const { column, value } = selectValues;
    if (column && value) {
      setButtonStatus(false);
    }
  }, [selectValues]);

  const handleSelect = ({ target: { name, value } }) => {
    setSelectValues({ ...selectValues, [name]: value });
  };

  const applyFilter = async () => {
    await setFilters({
      ...filters,
      filterByNumberValues: [...filterByNumberValues, selectValues],
    });
    await setButtonStatus(true);
    setSelectValues(defaultValues);
  };

  const optionsNumberFilter = () => {
    let columnsFilters = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    if (filterByNumberValues.length) {
      filterByNumberValues.forEach(({ column }) => {
        columnsFilters = columnsFilters.filter((option) => option !== column);
      });
    }
    if (columnsFilters.length === 1) setButtonStatus(true);
    return columnsFilters;
  };

  const applySort = () => {
    setFilters({
      ...filters,
      order: { ...orderValues },
    });
  };

  const fillFilters = () => (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ selectValues.column }
        onChange={ handleSelect }
      >
        { optionsNumberFilter().map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ selectValues.comparison }
        onChange={ handleSelect }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        className="input-number"
        type="number"
        name="value"
        value={ selectValues.value }
        onChange={ handleSelect }
      />
      <button
        data-testid="button-filter"
        type="button"
        disabled={ buttonStatus }
        onClick={ applyFilter }
      >
        Adicionar
      </button>
    </div>
  );
  const fillOrderOptions = () => (
    <div>
      <select
        data-testid="column-sort"
        name="column"
        onChange={ handleSort }
      >
        { orderHeader.map((column, index) => (
          <option key={ index } value={ column }>{ column }</option>)) }
      </select>
      <label htmlFor="sort-asc" className="radio-sort">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="sort-asc"
          name="sort"
          value="ASC"
          checked={ orderValues.sort === 'ASC' }
          onChange={ handleSort }
        />
        ASC
      </label>
      <label htmlFor="sort-desc" className="radio-sort">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="sort-desc"
          name="sort"
          value="DESC"
          checked={ orderValues.sort === 'DESC' }
          onChange={ handleSort }
        />
        DESC
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ applySort }
      >
        Aplicar
      </button>
    </div>
  );

  const fillNameFilter = () => (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Name of Planet"
        value={ filterName }
        onChange={ handleFilterName }
      />
    </div>
  );

  return (
    <section className="form-filter">
      { fillNameFilter() }
      { fillFilters() }
      { fillOrderOptions() }
    </section>
  );
};

export default Filter;
