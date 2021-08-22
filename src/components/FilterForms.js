import React, { useState, useContext } from 'react';
import MyContext from '../context/Context';

const COLUMNS_FILTER_ARRAY = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function FilterForms() {
  const [column, setColuna] = useState('');
  const [comparison, setcomparison] = useState('maior que');
  const [inputValue, setValue] = useState(0);
  const [componentOrderField, setComponentOrderField] = useState('');
  const [componentOrderRule, setComponentOrderRule] = useState('');
  const consumer = useContext(MyContext);

  const { setName,
    filters: { filterByName: { name: nameValue }, filterByNumericValues },
    setNumericFilter, setOrderField, setOrderRule } = consumer;

  const handleClick = () => {
    if (!column) return;
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

  const deleteFunction = (columnValue) => {
    const nomeQualquer = filterByNumericValues
      .filter(({ column: col }) => col !== columnValue);
    setNumericFilter(nomeQualquer);
  };

  const confirmOrder = () => {
    setOrderField(componentOrderField);
    setOrderRule(componentOrderRule);
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
          <li key={ item.column } data-testid="filter">
            { `Filtro aplicado: ${item.column} ${item.comparison} ${item.value} ` }
            <button type="button" onClick={ () => deleteFunction(item.column) }>X</button>
          </li>)) }
      </ul>
      <div>
        <span>Ordene seu busca por </span>
        <select
          onClick={ ({ target: { value } }) => setComponentOrderField(value) }
          data-testid="column-sort"
        >
          { ['name', ...COLUMNS_FILTER_ARRAY].map((item) => (
            <option
              key={ item }
              value={ item }
            >
              { item }
            </option>)) }
        </select>
        <label htmlFor="crescenteInput">
          Crescente
          <input
            type="Radio"
            id="seletor"
            name="seletor"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ ({ target: { value } }) => setComponentOrderRule(value) }
          />
        </label>
        <label htmlFor="decrescenteInput">
          Decrescente
          <input
            type="Radio"
            id="decrescenteInput"
            name="seletor"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ ({ target: { value } }) => setComponentOrderRule(value) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ confirmOrder }
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default FilterForms;
