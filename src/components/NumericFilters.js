import React, { useContext } from 'react';
import myContext from '../context/myContext';

function NumericFilters() {
  const { setColumn, setComparison, setValue } = useContext(myContext);

  const dropFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const dropNumerics = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target }) => {
    const { name } = target;
    if (name === 'column') setColumn(target.value);
    if (name === 'comparison') setComparison(target.value);
    if (name === 'value') setValue(target.value);
  };

  // const handleChangeColumn = ({ target }) => {
  //   const { value } = target;
  //   console.log(target.name);
  //   setColumn(value);
  // };

  // const handleChangeNum = ({ target }) => {
  //   const { value } = target;
  //   setComparison(value);
  // };

  // const handleChangeNumber = ({ target }) => {
  //   const { value } = target;
  //   setValue(value);
  // };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => handleChange(e) }
      >
        { dropFilters.map((info) => <option value={ info } key={ info }>{info}</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => handleChange(e) }
      >
        { dropNumerics.map((i) => <option value={ i } key={ i }>{i}</option>) }
      </select>
      <input
        type="number"
        name="value"
        onChange={ (e) => handleChange(e) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Adicionar filtro
      </button>
    </>
  );
}

export default NumericFilters;
