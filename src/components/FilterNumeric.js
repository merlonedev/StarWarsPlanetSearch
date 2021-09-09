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
  const { filter, setFilter, planets, setPlanets } = useContext(AppContext);
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

  const categoriesFilter = categoriesOptions.reduce((acc, cur) => {
    if (filteredGlobalCategories.includes(cur)) return acc;
    return acc.concat(cur);
  }, []);

  const filterPlanets = () => {
    const planetsData = planets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[category]) > Number(value);
      if (comparison === 'menor que') return Number(planet[category]) < Number(value);
      return Number(planet[category]) === Number(value);
    });

    setPlanets(planetsData);
  };

  useEffect(() => {
    console.log(comparison);
    console.log(category);
    console.log(filter);
    console.log(planets);
    console.log(categoriesFilter);
    console.log(filteredGlobalCategories);
  }, [filter,
    categoriesFilter,
    filteredGlobalCategories,
    category,
    comparison,
    value,
    filterByNumericValues,
    planets]);

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
        onClick={ () => { addNewFilter(); filterPlanets(); } }
      >
        Add Filtro
      </button>
    </div>
  );
}
