import React, { useContext, useState, useEffect } from 'react';
import { context } from '../Context/Context';

const FilterForm = () => {
  const { filter, setFilter } = useContext(context);
  const { filterByName: { name: filterName }, filterByNumericValues } = filter;
  const [changeFilter, setChangeFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [columnOption, setColumnOptions] = useState([]);

  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    const columnOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const optionSelected = filterByNumericValues.map(({ column }) => column);
    console.log(optionSelected);
    const newOptions = columnOptions.filter((option) => !optionSelected.includes(option));
    setColumnOptions(newOptions);
  }, [filterByNumericValues]);

  const handleNameChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  const handleChangeNumericValues = ({ target: { name, value } }) => {
    setChangeFilter({
      ...changeFilter,
      [name]: value,
    });
  };

  const onClickAddFilter = () => {
    setFilter({
      ...filter,
      filterByNumericValues: [...filterByNumericValues, changeFilter],
    });
  };

  const { column, comparison, value } = changeFilter;
  const renderNumericalForm = () => (
    <div>
      <select
        name="column"
        value={ column }
        data-testid="column-filter"
        onChange={ handleChangeNumericValues }
      >
        { columnOption.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
      <select
        name="comparison"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ handleChangeNumericValues }
      >
        { comparisonFilter.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        )) }
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ handleChangeNumericValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickAddFilter }
      >
        Add filter
      </button>
    </div>
  );

  return (
    <section>
      <div>
        <input
          data-testid="name-filter"
          placeholder="Digite o nome do planeta"
          value={ filterName }
          onChange={ handleNameChange }
        />
      </div>
      { renderNumericalForm() }
    </section>
  );
};

export default FilterForm;
