import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { NameFilter, OrderFilter, NumberFilter } from '.';
import sortByColumn from '../util/util';
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
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('asc');
  const [addFilter, setAddFilter] = useState(false);
  const [removeFilter, setRemoveFilter] = useState(false);
  const [addOrder, setAddOrder] = useState(false);

  const {
    data,
    dataFiltered,
    filters,
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
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
      setFilterColumn(filterColumn.filter((removed) => removed.name !== filterNumber
        .column));
      setFilterNumber({
        column: filterColumn[0].name,
        comparison: options.comparisonFilter[0].name,
        value: 0,
      });
      setAddFilter(false);
    }
  }, [addFilter]);

  useEffect(() => {
    if (removeFilter) {
      setDataFiltered(data.filter((filtered) => filtered.name.toLowerCase()
        .includes(filterName)));
      setRemoveFilter(false);
    }
  }, [removeFilter]);

  useEffect(() => {
    if (addOrder) {
      setOrder({ column, sort });
      setDataFiltered(sortByColumn(column, sort, dataFiltered));
      setAddOrder(false);
    }
  }, [addOrder]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'name': setFilterName(value); break;
    case 'column-filter': setFilterNumber((prevState) => ({
      ...prevState, column: value,
    })); break;
    case 'comparison': setFilterNumber((prevState) => ({
      ...prevState, comparison: value,
    })); break;
    case 'value': setFilterNumber((prevState) => ({
      ...prevState, value,
    })); break;
    case 'column-sort': setColumn(value); break;
    case 'asc': setSort('asc'); break;
    case 'desc': setSort('desc'); break;
    default: break;
    }
  };

  const handleClickAdd = () => { setAddFilter(true); };

  const handleClickRemove = ({ target: { id } }) => {
    setFilterColumn(filterColumn.concat({ name: id }));
    setFilterByNumericValues(filters.filterByNumericValues
      .filter((numericValue) => numericValue.column !== id));
    setRemoveFilter(true);
  };

  const handleClickOrder = () => { setAddOrder(true); };

  return (
    <div className="menu-container">
      <div className="menu-filters-container">
        <NameFilter filterName={ filterName } handleChange={ handleChange } />
        <OrderFilter
          column={ column }
          sort={ sort }
          handleChange={ handleChange }
          handleClickOrder={ handleClickOrder }
        />
        <NumberFilter
          filterNumber={ filterNumber }
          filterColumn={ filterColumn }
          handleChange={ handleChange }
          handleClickAdd={ handleClickAdd }
        />
      </div>
      { filters.filterByNumericValues.length > 0 ? (
        <div className="values-container">
          { filters.filterByNumericValues.map((numericFilter, index) => (
            <div
              className="value-container"
              id={ `value-container-${index}` }
              key={ index }
              data-testid="filter"
            >
              <span
                className="numeric-value-filter"
                id={ `numeric-value-filter-${index}` }
              >
                { `{"column":"${numericFilter.column}","comparison":"`
                + `${numericFilter.comparison}","value":${numericFilter.value}}` }
              </span>
              <button
                type="button"
                className="numeric-value-remove"
                id={ `${numericFilter.column}` }
                onClick={ handleClickRemove }
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <> </>
      ) }
    </div>

  );
};

export default Filter;
