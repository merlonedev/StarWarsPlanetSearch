import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

export default function FilterNumeric() {
  const categoriesOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const [category, setCategory] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { filter, setFilter } = useContext(AppContext);
  const { filterByNumericValues } = filter;
  const filterLength = filter.filterByNumericValues.length;

  const filteredGlobalCategories = filterLength
    ? filterByNumericValues.map((ctgry) => ctgry.category) : [];

  const addNewFilter = () => {
    const newFilter = {
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        { category, comparison, value },
      ],
    };
    setFilter(newFilter);
  };

  // let categoriesFilter = [];
  // categoriesFilter = categoriesOptions.map((catgry) => {
  //   if (filteredGlobalCategories.includes(catgry)) return categoriesFilter.push(catgry);
  //   return categoriesOptions;
  // });

  const categoriesFilter = categoriesOptions.reduce((acc, cur) => {
    if (filteredGlobalCategories.includes(cur)) return acc;
    return acc.concat(cur);
  }, []);

  useEffect(() => {
    console.log(filter);
    console.log(categoriesFilter);
    console.log(filteredGlobalCategories);
  }, [filter, categoriesFilter, filteredGlobalCategories]);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setCategory(target.value) }
      >
        {categoriesFilter.map((info) => (
          <option key={ info }>{info}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        {comparisonOptions.map((info) => (
          <option key={ info }>{info}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => addNewFilter() }
      >
        Add Filtro
      </button>
    </div>
  );
}
