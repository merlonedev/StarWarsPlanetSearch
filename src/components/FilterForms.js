import React, { useState, useContext } from 'react';
import MyContext from '../context/Context';

const COLUMNS_FILTER_ARRAY = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
function FilterForms() {
  const [column, setColuna] = useState('');
  const [comparison, setcomparison] = useState('');
  const [inputValue, setValue] = useState('');

  const consumer = useContext(MyContext);
  const { setName,
    filters: { filterByName: { name: nameValue }, filterByNumericValues },
    setNumericFilter } = consumer;

  const handleClick = () => {
    const newObject = {
      column,
      comparison,
      value: inputValue,
    };
    setNumericFilter([newObject, ...filterByNumericValues]);
  };

  return (
    <form>
      <label htmlFor="filterByName">
        Planeta
        <input
          type="text"
          value={ nameValue }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setName(value) }
          id="filterByName"
          name="name"
          placeholder="Nome do planeta"
        />
      </label>

      <label htmlFor="filterByNumericValues">
        Atributos
        <select
          id="filterByNumericValues"
          name="column"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColuna(value) }
        >
          { COLUMNS_FILTER_ARRAY.map((item) => (
            <option
              key={ item }
              value={ item }
            >
              { item }
            </option>)) }
        </select>
      </label>

      <label htmlFor="comparison">
        Comparação
        <select
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value } }) => setcomparison(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="valueInput">
        Numeros
        <input
          type="number"
          id="valueInput"
          value={ inputValue }
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValue(value) }
        />
      </label>

      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Salvar
      </button>
    </form>
  );
}

export default FilterForms;
