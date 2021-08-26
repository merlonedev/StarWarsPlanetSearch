import React, { useContext, useState, useEffect } from 'react';
import ContextApi from '../context/ContextApi';
// import Input from './Input';

const compareOptions = ['maior que', 'menor que', 'igual a'];
const columnsOptions = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];
const structure = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

const FilterNumericValues = () => {
  const { data, setDataFilter, filters, setFilters } = useContext(ContextApi);
  const [tempColumns, setTempColumns] = useState(columnsOptions);
  const [filterByValue, setFilterByValue] = useState(structure);

  const handleChange = ({ target: { name, value } }) => {
    setFilterByValue({ ...filterByValue, [name]: value });
  };

  const onClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues, filterByValue] });
    setTempColumns(tempColumns.filter((item) => item !== filterByValue.column));
  };

  useEffect(() => {
    let aux = [...data];
    const { filterByNumericValues } = filters;
    const planetByValue = () => {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          aux = aux.filter((planet) => Number(planet[column]) > Number(value));
          return setDataFilter(aux);
        }
        if (comparison === 'menor que') {
          aux = aux.filter((planet) => Number(planet[column]) < Number(value));
          return setDataFilter(aux);
        }
        if (comparison === 'igual a') {
          aux = aux.filter((planet) => Number(planet[column]) === Number(value));
          return setDataFilter(aux);
        }
      });
    };
    planetByValue();
  }, [data, setDataFilter, filters]);

  const { value, comparison, column } = filterByValue;

  return (
    <>
      <select
        textlabel="column"
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => handleChange(e) }
      >
        {
          tempColumns.map((option) => (<option key={ option }>{option}</option>))
        }
      </select>
      <select
        textlabel="comparison"
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => handleChange(e) }
      >
        {
          compareOptions.map((option) => (<option key={ option }>{option}</option>))
        }
      </select>
      <input
        textlabel="value"
        name="value"
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ onClick }
      >
        Filtrar
      </button>
    </>
  );
};

export default FilterNumericValues;

// useEffect(() => {
//   const planetByValues = () => {
//     let aux = [...data];
//     // console.log(allData);
//     filterByNumericValues.forEach(() => {
//       switch (comparison) {
//       case 'maior que':
//         aux = aux.filter((item) => (
//           Number(item[column]) > value));
//         setDataFilter(aux);
//         break;
//       case 'menor que':
//         aux = aux.filter((item) => (
//           Number(item[column]) < value));
//         setDataFilter(aux);
//         break;
//       case 'igual a':
//         aux = aux.filter((item) => (
//           Number(item[column]) === value));
//         setDataFilter(aux);
//         break;
//       default:
//         break;
//       }
//     });
//   };
//   planetByValues();
// }, [data, filters, setDataFilter, column, comparison, filterByNumericValues, value]);
