import React, { useState } from 'react';

function SelectFilterComparation() {
  const [comparison, setComparison] = useState('maior que');

  const optionsArray = [
    { value: 'maior que', text: 'maior que' },
    { value: 'menor que', text: 'menor que' },
    { value: 'igual a', text: 'igual a' },
  ];

  const handleChange = ({ target: { value } }) => setComparison(value);

  const NUMBER_RAMDOM = 10000;

  return (
    <label htmlFor="column-filter">
      Filtre pela Propriedade:
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        { optionsArray.map((option) => (
          <option key={ Math.random() * NUMBER_RAMDOM } value={ option.value }>
            { option.text }
          </option>
        )) }
      </select>
    </label>
  );
}

export default SelectFilterComparation;
