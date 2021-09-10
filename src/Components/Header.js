import React, { useState, useEffect } from 'react';
import MyContext from '../Context';
import Table from './Table';
import InputFilterName from './InputFilterName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputValue from './InputValue';
import FilterButton from './FilterButton';
import OrderFunc from './FilterOrder';

const columnOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const verifyArray = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const filters = { filterByName: { name: '' } };

const values = { filterByNumericValues: [] };

const order = { column: 'Name', sort: 'ASC' };

function Header() {
  const [headers, setHeaders] = useState([]); // 1
  const [data, setData] = useState([]);// 2
  const [stateName, setStateName] = useState(filters);// 3
  const [stateValue, setStateValue] = useState(values);// 4
  const [orderFilter, setOrderFilter] = useState(order); // 11

  const [stateColumn, setStateColumn] = useState('population');// 5
  const [stateComparison, setStateComparison] = useState('maior que');// 6
  const [stateValor, setStateValor] = useState('');// 7
  const [orderColumn, setOrderColumn] = useState('');
  const [orderDirection, setOrderDirection] = useState('');

  const [filterContainer, setFilterContainer] = useState(data);// 8

  const [columnOptionsFil, setColumnOptionsFil] = useState(columnOptions);// 10

  // Fetch da API salva no 'ESTADO' "data". Salva "HEADERS".
  useEffect(() => {
    const fetchAPIStar = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(END_POINT);
      const result = await response.json();
      const headerFilter = Object.keys(result.results[0]);
      setHeaders(headerFilter.filter((el) => !el.includes('residents')));
      setData(result.results);
      setFilterContainer(result.results);
    };
    fetchAPIStar();
  }, []);
  // Fetch da API salva no 'ESTADO' "data". Salva "HEADERS".

  const filterName = (array) => {
    if (stateName.filterByName.name === '') {
      return array;
    }
    return array.filter((planeta) => (
      planeta.name.toLowerCase().includes(stateName.filterByName.name.toLowerCase())));
  };

  const filterValue = (array) => {
    if (stateValue.filterByNumericValues.length === 0) {
      return array;
    }
    let result = [];
    stateValue.filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        result = filterContainer.filter((planeta) => (
          Number(planeta[column]) > Number(value)));
      } else if (comparison === 'menor que') {
        result = filterContainer.filter((planeta) => (
          Number(planeta[column]) < Number(value)));
      } else {
        result = filterContainer.filter((planeta) => (
          Number(planeta[column]) === Number(value)));
      }
    });
    return result;
  };

  const testOrder = (array) => {
    if (verifyArray.some((el) => orderFilter.column === el)) {
      console.log('asdasd');
      return (array.sort((a, b) => a[orderFilter.column] - b[orderFilter.column]));
    }
    return array;
  };

  const applyFilters = () => setFilterContainer(testOrder(filterValue(filterName(data))));

  useEffect(applyFilters, [stateValue, stateName, orderFilter]);

  const handleName = ({ target }) => {
    setStateName({ ...stateName, filterByName: { name: target.value } });
  };

  const handleColumn = ({ target }) => {
    setStateColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setStateComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setStateValor(target.value);
  };

  const handleOrder = ({ target }) => {
    setOrderDirection(target.value);
  };

  const handleOrderColumn = ({ target }) => {
    setOrderColumn(target.value);
  };

  const buttonClickOrder = () => {
    setOrderFilter({ column: orderColumn, sort: orderDirection });
  };

  const buttonClick = () => {
    setStateValue({ filterByNumericValues: [...stateValue.filterByNumericValues,
      { column: stateColumn,
        value: stateValor,
        comparison: stateComparison }] });
  };

  const selecRender = () => setColumnOptionsFil(columnOptionsFil
    .filter((el) => !stateValue.filterByNumericValues
      .some((le) => le.column === el)));

  useEffect(selecRender, [stateValue]);

  const deleteButton = ({ target }) => {
    setColumnOptionsFil([...columnOptionsFil, target.name]);
    const removeValue = stateValue.filterByNumericValues
      .filter((el) => el.column !== target.name);
    setStateValue({ filterByNumericValues: removeValue });
  };

  const contextValue = {
    filterContainer,
    columnOptionsFil,
    stateValue,
    headers,
    buttonClick,
    deleteButton,
    handleName,
    handleColumn,
    handleComparison,
    handleValue,
    handleOrder,
    handleOrderColumn,
    // testOrder,
    buttonClickOrder,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <InputFilterName />
      <SelectColumn />
      <SelectComparison />
      <InputValue />
      <FilterButton />
      <OrderFunc />
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
