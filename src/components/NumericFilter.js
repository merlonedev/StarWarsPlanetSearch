import React, { useContext, useState } from 'react';
import Context from '../context/context';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];
const comparisons = ['maior que', 'menor que', 'igual a'];

function NumericFilter() {
  const [localState, setLocalState] = useState({ column: '', comparison: '', value: 0 });
  const { globalState, setGlobalState } = useContext(Context);
  const { numericFilter: { column: globalColumn } } = globalState;
  const { column, comparison } = localState;

  const inputHandler = ({ target: { id, value } }) => {
    setLocalState({ ...localState, [id]: value });
  };

  const buttonHandler = () => {
    setGlobalState({ ...globalState, numericFilter: localState });
  };

  const clearFilter = ({ target: name }) => {
    setGlobalState({ ...globalState, numericFilter: { [name]: '' } });
    setLocalState({ ...localState, [name]: '' });
  };

  const creteClearBtn = (name) => (
    <button type="button" name={ name } onClick={ clearFilter }>X</button>
  );

  const createSelectInput = (properties) => {
    const [id, text, value, dataTest, allOptions] = properties;
    const options = allOptions.filter((opt) => (opt !== globalColumn));
    return (
      <div data-testid="filter">
        <label htmlFor={ id }>
          {text}
          <select
            data-testid={ dataTest }
            id={ id }
            onChange={ inputHandler }
            value={ value }
          >
            {options.map((opt, i) => <option key={ i } value={ opt }>{ opt }</option>)}
          </select>
        </label>
        {creteClearBtn(id)}
      </div>
    );
  };

  const createNumberInput = (id, dataTest) => (
    <div data-testid="filter">
      <input
        type="number"
        id={ id }
        data-testid={ dataTest }
        min="0"
        onChange={ inputHandler }
      />
      {creteClearBtn(id)}
    </div>
  );

  return (
    <>
      {createSelectInput(['column', 'Coluna', column, 'column-filter', columns])}
      {createSelectInput(['comparison', 'Comparação', comparison, 'comparison-filter',
        comparisons])}
      {createNumberInput('value', 'value-filter')}

      <button type="button" data-testid="button-filter" onClick={ buttonHandler }>
        APLICAR
      </button>
    </>
  );
}

export default NumericFilter;
