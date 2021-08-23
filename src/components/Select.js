import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Select() {
  const {
    filters: { filteredByNumericValues },
    setNumericValues, arrayOfOptions } = useContext(MyContext);
  const [value, setValue] = useState(0);
  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');

  return (
    <div className="select-Container">
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {arrayOfOptions.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (
          setNumericValues([{ column, value, comparison }, ...filteredByNumericValues])) }
      >
        Filtrar

      </button>
    </div>
  );
}

export default Select;
