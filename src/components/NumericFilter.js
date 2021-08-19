import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumericFilter() {
  const { filters, setFilters, colunmInfo, setColunmInfo } = useContext(Context);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleClick = () => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
      },
    );
    setColunmInfo(colunmInfo.filter((info) => info !== numericFilter.column));
    setNumericFilter({
      column: colunmInfo[0],
      comparison: 'maior que',
      value: '0',
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  };

  return (
    <div>
      <select
        name="column"
        onChange={ handleChange }
        value={ numericFilter.column }
        data-testid="column-filter"
      >
        { colunmInfo.map((info, i) => <option key={ i }>{ info }</option>) }
      </select>

      <select
        onChange={ handleChange }
        name="comparison"
        value={ numericFilter.comparison }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        onChange={ handleChange }
        name="value"
        type="text"
        data-testid="value-filter"
        value={ numericFilter.value }
      />

      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default NumericFilter;
