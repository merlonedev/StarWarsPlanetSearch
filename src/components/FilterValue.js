import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/MyContext';

function FilterValue() {
  const [compareFilter, setCompareFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const { filters, setFilters, compare, filterPlanet,
    setFilterPlanet, removeColumnFilter } = useContext(MyContext);
  const [setButtonStatus] = useState(true);
  const { filterByNumericValues } = filters;

  const handlerClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        compareFilter,
      ],
    });
  };

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let newData = filterPlanet;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        newData = newData.filter((item) => {
          if (comparison === 'maior que') return Number(item[column]) > Number(value);
          if (comparison === 'menor que') return Number(item[column]) < Number(value);
          if (comparison === 'igual a') return Number(item[column]) === Number(value);
          // console.log(filterByNumericValues);
          // console.log(newData);
          return true;
        });
        setFilterPlanet(newData);
      });
    }
  }, [filters]);

  const handlerChange = (({ target: { name, value } }) => {
    setCompareFilter({
      ...compareFilter,
      [name]: value,
    });
  });

  // const selectOption = () => {
  //   const newColuns = coluns;
  //   if (filterByNumericValues.length) {
  //     filterByNumericValues.forEach(({ column }) => {
  //       const deleteOption = newColuns.indexOf(column);
  //       const index = -1;
  //       if (deleteOption > index) {
  //         newColuns.splice(deleteOption, 1);
  //       }
  //     });
  //   }
  //   return newColuns;
  // };

  const optionsNumericFilter = () => {
    let columnsFilters = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column }) => {
        columnsFilters = columnsFilters.filter((option) => option !== column);
      });
    }
    if (columnsFilters.length === 1) setButtonStatus(true);
    return columnsFilters;
  };

  // const removeFilter = (selected) => {
  //   const filtered = filterByNumericValues.filter((stored) => stored !== selected);
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [
  //       {
  //         ...filtered,
  //       },
  //     ],
  //   });
  // };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handlerChange }
      >
        {
          optionsNumericFilter().map((coluna, index) => (
            <option key={ index } value={ coluna }>{ coluna }</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handlerChange }
      >
        {
          compare.map((compa) => (
            <option key={ compa }>{ compa }</option>
          ))
        }
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handlerChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handlerClick() }
      >
        Filtrar
      </button>
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column } data-testid="filter">
            {`${column} | ${comparison} | ${value}`}
            <button
              type="button"
              data-testid="filter"
              onClick={ () => removeColumnFilter(column) }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default FilterValue;
