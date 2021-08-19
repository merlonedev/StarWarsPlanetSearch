import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumericValues() {
  const { setInputNumeric, filters } = useContext(PlanetContext);

  const [stateLocal, setStateLocal] = useState();
  const [selectColumn, setSelectColumn] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setStateLocal((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { column = 'population', comparison = 'maior que', value = 0 } = stateLocal;
    setInputNumeric({
      column,
      comparison,
      value,
    });
  };

  const renderSelectColumn = () => {
    if (stateLocal) {
      const { column } = stateLocal;
      const optionsFilter = selectColumn.filter((item) => item !== column);
      setSelectColumn(optionsFilter);
    }
  };

  // componentDidUpdate - oculta column selecionada
  useEffect(() => {
    const render = async () => renderSelectColumn();
    render();
  }, [filters]);

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="input-numbers">
          Pesquisar Planeta por Números:
          <label htmlFor="input-numbers">
            Selecione o seu filtro:
            <select
              name="column"
              data-testid="column-filter"
              onChange={ handleChange }
              // defaultValue="population"
              id="input-numbers"
            >
              { selectColumn.map((item) => (
                <option value={ item } key={ item }>{item}</option>
              ))}
            </select>
          </label>
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
            defaultValue="maior que"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleSubmit }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FilterByNumericValues;
