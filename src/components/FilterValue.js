import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterValue() {
  const [compareFilter, setCompareFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const { filters, setFilters,
    compare, coluns, filterPlanet, setFilterPlanet } = useContext(MyContext);
  // const { filterByName: { name } } = filters;
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

  const handlerChange = (({ target: { name, value } }) => {
    setCompareFilter({
      ...compareFilter,
      [name]: value,
    });
  });

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let newData = filterPlanet;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        newData = newData.filter((item) => {
          if (comparison === 'maior que') return Number(item[column]) > Number(value);
          if (comparison === 'menor que') return Number(item[column]) < Number(value);
          if (comparison === 'igual a') return Number(item[column]) === Number(value);
          console.log(filterByNumericValues);
          console.log(newData);
          return true;
        });
        setFilterPlanet(newData);
      });
    }
  }, [filters]);

  const selectOption = () => {
    const newColuns = coluns;
    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column }) => {
        const deleteOption = newColuns.indexOf(column);
        const index = -1;
        if (deleteOption > index) {
          newColuns.splice(deleteOption, 1);
        }
      });
    }
    return newColuns;
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handlerChange }
      >
        {
          selectOption().map((coluna) => (
            <option key={ coluna }>{ coluna }</option>
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
    </form>
  );
}

export default FilterValue;
