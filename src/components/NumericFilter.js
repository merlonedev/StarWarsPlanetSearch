import React, { useContext, useState } from 'react';
import Context from '../context/context';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];
const comparisons = ['maior que', 'menor que', 'igual a'];

function NumericFilter() {
  const [localState, setLocalState] = useState({ column: '', comparison: '', value: 0 });
  const { globalState, setGlobalState } = useContext(Context);
  const { column, comparison } = localState;

  const inputHandler = ({ target: { id, value } }) => {
    setLocalState({ ...localState, [id]: value });
  };

  const buttonHandler = () => {
    setGlobalState({ ...globalState, numericFilter: localState });
  };

  const createSelectInput = (properties) => {
    const [id, text, value, dataTest, options] = properties;
    return (
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
    );
  };

  return (
    <>
      {createSelectInput(['column', 'Coluna', column, 'column-filter', columns])}
      {createSelectInput(['comparison', 'Comparação', comparison, 'comparison-filter',
        comparisons])}
      <input
        type="number"
        id="value"
        data-testid="value-filter"
        min="0"
        onChange={ inputHandler }
      />
      <button type="button" data-testid="button-filter" onClick={ buttonHandler }>
        APLICAR
      </button>
    </>
  );
}

export default NumericFilter;
