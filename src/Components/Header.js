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

const filters = { filterByName: { name: '' } };

const values = { filterByNumericValues: [] };

function Header() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [stateName, setStateName] = useState(filters);

  const [stateValue, setStateValue] = useState(values);

  const [stateColumn, setStateColumn] = useState('population');
  const [stateComparison, setStateComparison] = useState('maior que');
  const [stateValor, setStateValor] = useState('');

  const [filterContainer, setFilterContainer] = useState(data);
  const [choices, setChoices] = useState([]);
  const [renderButton, setRenderButton] = useState([]);
  const [columnOptionsFil, setColumnOptionsFil] = useState(columnOptions);

  // const columnFil = stateValue.filterByNumericValues[0].column;
  // const comparisonFil = stateValue.filterByNumericValues[0].comparison;
  // const valueFil = stateValue.filterByNumericValues[0].value;

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

  // Filtro por "stateName".
  // useEffect(() => {
  //   const filterName = () => {
  //     const resultName = data.filter((planeta) => (
  //       planeta.name.toLowerCase().includes(stateName.filterByName.name.toLowerCase())));
  //     setFilterContainer(resultName);
  //   };
  //   filterName();
  // }, [data, stateName]);

  const filterName = (array) => {
    if (stateName.filterByName.name === '') {
      return array;
    }
    console.log(stateName.filterByName.name);
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
          Number(planeta[column]) < Number(value)
        ));
      } else {
        result = filterContainer.filter((planeta) => (
          Number(planeta[column]) === Number(value)
        ));
      }
    });
    return result;
  };

  const applyFilters = () => setFilterContainer(filterValue(filterName(data)));

  useEffect(applyFilters, [stateValue, stateName]);

  const handleName = ({ target }) => {
    setStateName({ ...stateName, filterByName: { name: target.value } });
  };
  // Filtro por "stateName".

  useEffect(() => {
    const columnRender = () => {
      const filterColumn = columnOptions
        .filter((el) => !choices.some((le) => le.includes(el)));
      setColumnOptionsFil(filterColumn);
    };
    columnRender();
  }, [choices]);

  const handleColumn = ({ target }) => {
    setStateColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setStateComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setStateValor(target.value);
  };

  const buttonClick = () => {
    // let result = [];
    // if (comparisonFil === 'maior que') {
    //   result = filterContainer.filter((planeta) => (
    //     Number(planeta[columnFil]) > Number(valueFil)));
    // } else if (comparisonFil === 'menor que') {
    //   result = filterContainer.filter((planeta) => (
    //     Number(planeta[columnFil]) < Number(valueFil)
    //   ));
    // } else {
    //   result = filterContainer.filter((planeta) => (
    //     Number(planeta[columnFil]) === Number(valueFil)
    //   ));
    // }

    // setFilterContainer(result);
    // setRenderButton([...renderButton,
    //   { comparar: comparisonFil, coluna: columnFil, valor: valueFil }]);
    // setChoices([...choices, columnFil]);
    setStateValue({ filterByNumericValues: [...stateValue.filterByNumericValues,
      { column: stateColumn,
        value: stateValor,
        comparison: stateComparison }] });
  };

  const deleteButton = ({ target }) => {
    const choicesF = choices.filter((el) => el !== target.name);
    setChoices(choicesF);
    columnOptionsFil.push(target.name);
    setRenderButton([renderButton.filter((el) => (el !== target.name ? el : false))]);
  };

  const contextValue = {
    filterContainer,
    handleName,
    handleColumn,
    handleComparison,
    handleValue,
    buttonClick,
    columnOptionsFil,
    renderButton,
    deleteButton,
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
