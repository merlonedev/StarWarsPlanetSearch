import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { handleChange } = useContext(MyContext);
  // const {  } = useContext(MyContext);
  // const { filterByName: { name } } = filters;

  // const onChange = ({ target: { value } }) => {
  //   setFilters({
  //     ...filters,
  //     filterByName: {
  //       name: value,
  //     },
  //   });
  // };
  // const coluns = [
  //   'population',
  //   'orbital_period',
  //   'diameter',
  //   'rotation_period',
  //   'surface_water',
  // ];

  // const valor = [
  //   'maior que', 'menor que', 'igual a',
  // ];

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name=""
        // value={ name }
        onChange={ handleChange }
      />
      {/* <select data-testid="column-filter">
        {
          coluns.map((i) => (
            <option key={ i }>{ i }</option>
          ))
        }
      </select>
      <select data-testid="comparison-filter">
        {
          valor.map((i) => (
            <option key={ i }>{ i }</option>
          ))
        }
      </select>
      <input
        type="number"
        data-testid="value-filter"
      />
      <button type="button" data-testid="button-filter">
        Filtar
      </button> */}
    </div>
  );
}

export default FilterName;
