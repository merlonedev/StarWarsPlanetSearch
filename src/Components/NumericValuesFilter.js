import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericValuesFilter() {
  const {
    filters,
    setNumValue,
    filterDataByNumValues,
    columnOptions, comparisonOptions } = useContext(StarWarsContext);

  // const [column, setColumn] = useState('population');
  // const [comparison, setComparison] = useState('maior que');
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   if (columns.length > 0) setColumn(columns[0]);
  // }, [columns]);

  // essa parte da logica foi aprendida e aplicada após leitura do codigo do colega Luciano Almeida https://github.com/tryber/sd-012-project-starwars-planets-search/pull/102/commits/546930d309009ebddc0c870d8094c356a7f14992
  const handleChangeNumValue = ({ target }) => {
    const { filterByNumericValues } = filters;
    const newInput = target.name === 'value' ? +target.value : target.value;
    setNumValue({
      ...filterByNumericValues[0],
      [target.name]: newInput,
    });
  };

  const handleClick = () => {
    filterDataByNumValues();
  };

  return (
    <form>
      <label htmlFor="columnFilter">
        Filter column:
        <select
          id="columnFilter"
          name="column"
          data-testid="column-filter"
          type="text"
          onChange={ (event) => handleChangeNumValue(event) }
        >
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        Filter comparison:
        <select
          id="comparisonFilter"
          name="comparison"
          data-testid="comparison-filter"
          type="text"
          onChange={ (event) => handleChangeNumValue(event) }
        >
          {comparisonOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="valueFilter">
        Filter by value:
        <input
          id="valueFilter"
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ (event) => handleChangeNumValue(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Add filter
      </button>
    </form>
  );
}

export default NumericValuesFilter;
