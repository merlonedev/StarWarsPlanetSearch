import React, { useState, useEffect } from 'react';
import MyContext from '../Context';
import Table from './Table';
import InputFilterName from './InputFilterName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputValue from './InputValue';
import FilterButton from './FilterButton';

const columnOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const filters = { filterByName: { name: '' },
  filterByNumericValues: [{
    column: 'population',
    comparison: 'maior que',
    value: 0 }] };

function Header() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [stateName, setStateName] = useState(filters);
  const [filterContainer, setFilterContainer] = useState([]);
  const [choices, setChoices] = useState([]);

  const columnFil = stateName.filterByNumericValues[0].column;
  const comparisonFil = stateName.filterByNumericValues[0].comparison;
  const valueFil = stateName.filterByNumericValues[0].value;
  const columnOptionsFil = columnOptions
    .filter((el) => !choices.some((le) => le.includes(el)));

  const handleChange = ({ target }) => {
    setStateName({ ...stateName, filterByName: { name: target.value } });
  };

  const handleColumn = ({ target }) => {
    setStateName({ ...stateName,
      filterByNumericValues: [{ ...stateName.filterByNumericValues[0],
        column: target.value }] });
  };

  const handleComparison = ({ target }) => {
    setStateName({ ...stateName,
      filterByNumericValues: [{ ...stateName.filterByNumericValues[0],
        comparison: target.value }] });
  };

  const handleValue = ({ target }) => {
    setStateName({ ...stateName,
      filterByNumericValues: [{ ...stateName.filterByNumericValues[0],
        value: target.value }] });
  };

  useEffect(() => {
    const fetchAPIStar = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(END_POINT);
      const result = await response.json();
      const headerFilter = Object.keys(result.results[0]);
      setHeaders(headerFilter.filter((el) => !el.includes('residents')));
      setData(result.results);
    };
    fetchAPIStar();
  }, []);

  useEffect(() => {
    const filterName = () => {
      const resultName = data.filter((planeta) => (
        planeta.name.toLowerCase().includes(stateName.filterByName.name.toLowerCase())));
      setFilterContainer(resultName);
    };
    filterName();
  }, [data, stateName]);

  const buttonClick = () => {
    let result = [];
    if (comparisonFil === 'maior que') {
      result = filterContainer.filter((planeta) => (
        Number(planeta[columnFil]) > Number(valueFil)
      ));
    } else if (comparisonFil === 'menor que') {
      result = filterContainer.filter((planeta) => (
        Number(planeta[columnFil]) < Number(valueFil)
      ));
    } else {
      result = filterContainer.filter((planeta) => (
        Number(planeta[columnFil]) === Number(valueFil)
      ));
    }
    setFilterContainer(result);
    setChoices([...choices, columnFil]);
  };

  const contextValue = {
    handleChange,
    filterContainer,
    handleColumn,
    handleComparison,
    handleValue,
    buttonClick,
    columnOptionsFil,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <InputFilterName />
      <SelectColumn />
      <SelectComparison />
      <InputValue />
      <FilterButton />
      <table>
        <thead>
          <tr>
            {
              headers.map((el) => <th key={ el }>{el}</th>)
            }
          </tr>
        </thead>
        <Table />
      </table>
    </MyContext.Provider>
  );
}

export default Header;
