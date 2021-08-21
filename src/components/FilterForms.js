import React, { useState, useContext } from 'react';
import MyContext from '../context/Context';

const COLUMNS_FILTER_ARRAY = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function FilterForms() {
  const [column, setColuna] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [inputValue, setValue] = useState(0);

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

  // Logica de negar todo o some feita com ajuda do David Gonzaga - turma 12
  const displayOptions = () => {
    let options = [...COLUMNS_FILTER_ARRAY];
    if (filterByNumericValues.length > 0) {
      options = options
        .filter((option) => !filterByNumericValues
          .some((filter) => option === filter.column));
      return options;
    }
    return options;
  };

  return (
    <div>

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
            { displayOptions().map((item) => (
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
      <ul>
        { filterByNumericValues.map((item) => (
          <li key={ item.column }>
            { `Filtro aplicado: ${item.column} ${item.comparison} ${item.value} ` }
            <button type="button"> X </button>
          </li>)) }
      </ul>
    </div>
  );
}

export default FilterForms;
