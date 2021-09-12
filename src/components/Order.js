import React, { useContext, useState } from 'react';
import Context from '../context/context';

const radioOptions = ['ASC', 'DESC'];

function Order() {
  const { globalState, setGlobalState } = useContext(Context);
  const { data, order: { column: columnStort, sort: globalSort } } = globalState;
  const [localState, setLocalState] = useState({ column: columnStort, sort: globalSort });
  const { column } = localState;

  const generateColumnsList = () => {
    const headerFields = Object.keys(data.results[0])
      .filter((info) => info !== 'residents');
    return headerFields
      .map((headerText) => (headerText.replace('_', ' ')).toUpperCase());
  };

  const inputHandler = ({ target: { id, value } }) => {
    setLocalState({ ...localState, [id]: value });
  };

  const buttonHandler = () => {
    setGlobalState({ ...globalState, order: localState });
  };

  const createRadios = () => (
    <>
      {radioOptions.map((opt) => (
        <label key={ opt } htmlFor={ opt }>
          <input
            type="radio"
            value={ opt }
            id="sort"
            name="sort"
            data-testid={ `column-sort-input-${opt.toLowerCase()}` }
            defaultChecked={ opt === globalSort }
            onClick={ inputHandler }
          />
          { opt }
        </label>
      ))}
    </>
  );

  const createSelectInput = (properties) => {
    const [id, text, value, dataTest, options] = properties;
    return (
      <div>
        <label htmlFor={ id }>
          {text}
          <select
            data-testid={ dataTest }
            id={ id }
            onChange={ inputHandler }
            value={ value }
          >
            {options.map((opt, i) => (
              <option
                key={ i }
                value={ opt.toLowerCase().replace(' ', '_') }
              >
                { opt }
              </option>))}
          </select>
        </label>
      </div>
    );
  };

  return (
    <>
      {createSelectInput(['column', 'Coluna a ser Ordenada', column, 'column-sort',
        generateColumnsList()])}
      {createRadios()}
      <button type="button" data-testid="column-sort-button" onClick={ buttonHandler }>
        APLICAR ORDENAÇÃO
      </button>
    </>
  );
}

export default Order;
