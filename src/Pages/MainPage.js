import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
import { useGlobalState } from '../Provider';
import FormFilterByName from '../Components/FormFilterByName';
import FormSortTable from '../Components/FormSortTable';
import FormFilterByComparison from '../Components/FormFilterByComparison';
import fetchApi from '../Services/api';

function MainPage() {
  const [state, setState] = useState([]);
  const { filters } = useGlobalState();
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const minusOne = -1;

  useEffect(() => {
    fetchApi().then((res) => setState(res));
  }, []);

  function filterByName(data) {
    if (!name) return data;
    const filteredData = data.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));
    return filteredData;
  }

  function filterByComparison(data) {
    if (filterByNumericValues.length <= 0) return data;
    let filteredData = [...data];
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      filteredData = filteredData.filter((row) => {
        const greaterThanComparison = Number(row[column]) > Number(value);
        const smallerThanComparison = Number(row[column]) < Number(value);
        const equalsComparison = Number(row[column]) === Number(value);
        const cond1 = comparison === 'maior que' && greaterThanComparison;
        const cond2 = comparison === 'menor que' && smallerThanComparison;
        const cond3 = comparison === 'igual a' && equalsComparison;
        return cond1 || cond2 || cond3;
      });
    });
    return filteredData;
  }

  function sortString(data) {
    if (order.sort === 'ASC') {
      return data.sort((a, b) => {
        if (a.name < b.name) return minusOne;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
    return data.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return minusOne;
      return 0;
    });
  }

  function sortNumber(data) {
    if (order.sort === 'ASC') {
      return data.sort((a, b) => Number(a.orbital_period) - Number(b.orbital_period));
    }
    return data.sort((a, b) => Number(b.orbital_period) - Number(a.orbital_period));
  }

  function sortData(data) {
    if (order.column === 'Name') return sortString(data);
    return sortNumber(data);
  }

  const dataFilteredByName = filterByName(state);
  const dataFilteredByComp = filterByComparison(dataFilteredByName);
  const dataSorted = sortData(dataFilteredByComp);

  return (
    <div>
      <FormFilterByName />
      <FormSortTable />
      <FormFilterByComparison />
      <Table data={ dataSorted } />
    </div>
  );
}

export default MainPage;
