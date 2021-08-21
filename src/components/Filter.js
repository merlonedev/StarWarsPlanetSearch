import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import options from '../data';
import './Filter.css';

const Filter = () => {
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState(options.columnFilter);
  const [filterNumber, setFilterNumber] = useState({
    column: filterColumn[0].name,
    comparison: options.comparisonFilter[0].name,
    value: 0,
  });
  const [addFilter, setAddFilter] = useState(false);

  const {
    data,
    dataFiltered,
    filters,
    setFilterByName,
    setFilterByNumericValues,
    setDataFiltered,
  } = useContext(AppContext);

  const filterByNumeric = (toFilter) => toFilter.filter((filtered) => {
    switch (filterNumber.comparison) {
    case 'maior que': return parseInt(filtered[`${filterNumber
      .column}`], 10) > parseInt(filterNumber.value, 10);
    case 'menor que': return parseInt(filtered[`${filterNumber
      .column}`], 10) < parseInt(filterNumber.value, 10);
    case 'igual a': return parseInt(filtered[`${filterNumber
      .column}`], 10) === parseInt(filterNumber.value, 10);
    default: return filtered;
    }
  });

  useEffect(() => {
    setFilterByName({ name: filterName });
    if (filters.filterByNumericValues.length > 0) {
      setDataFiltered(data.filter((filtered) => filtered.name.toLowerCase()
        .includes(filterName)));
      setDataFiltered((prevState) => filterByNumeric(prevState));
    } else {
      setDataFiltered(data.filter((filtered) => filtered.name.toLowerCase()
        .includes(filterName)));
    }
  }, [filterName]);

  useEffect(() => {
    if (addFilter) {
      setFilterByNumericValues((prevState) => ([...prevState, {
        column: filterNumber.column,
        comparison: filterNumber.comparison,
        value: filterNumber.value,
      }]));
      setDataFiltered(filterByNumeric(dataFiltered));
      setFilterColumn(filterColumn.filter((column) => column.name !== filterNumber
        .column));
      setFilterNumber({
        column: filterColumn[0].name,
        comparison: options.comparisonFilter[0].name,
        value: 0,
      });
      setAddFilter(false);
    }
  }, [addFilter]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'name': setFilterName(value); break;
    case 'column': setFilterNumber((prevState) => ({
      ...prevState, column: value,
    })); break;
    case 'comparison': setFilterNumber((prevState) => ({
      ...prevState, comparison: value,
    })); break;
    case 'value': setFilterNumber((prevState) => ({
      ...prevState, value,
    })); break;
    default: break;
    }
  };

  const handleClick = () => { setAddFilter(true); };

  return (
    <>
      <div className="name-filter-container">
        <label htmlFor="name-filter" className="name-filter-label">
          <input
            type="text"
            className="name-filter"
            id="name-filter"
            data-testid="name-filter"
            name="name"
            placeholder="Nome do planeta"
            value={ filterName }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="number-filter-container">
        <label htmlFor="column-filter" className="column-filter-label">
          <select
            className="column-filter"
            id="column-filter"
            data-testid="column-filter"
            name="column"
            value={ filterNumber.column }
            onChange={ handleChange }
          >
            { filterColumn.map((option) => (
              <option key={ option.name } value={ option.name }>{ option.name }</option>
            )) }
          </select>
        </label>
        <label htmlFor="comparison-filter" className="comparison-filter-label">
          <select
            className="comparison-filter"
            id="comparison-filter"
            data-testid="comparison-filter"
            name="comparison"
            value={ filterNumber.comparison }
            onChange={ handleChange }
          >
            { options.comparisonFilter.map((option) => (
              <option key={ option.name } value={ option.name }>{ option.name }</option>
            )) }
          </select>
        </label>
        <label htmlFor="value-filter" className="value-filter-label">
          <input
            type="number"
            className="value-filter"
            id="value-filter"
            data-testid="value-filter"
            name="value"
            placeholder=""
            value={ filterNumber.value }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          className="button-filter"
          onClick={ handleClick }
        >
          Adicionar filtros
        </button>
      </div>
    </>
  );
};

export default Filter;
