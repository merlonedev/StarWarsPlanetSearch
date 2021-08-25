import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';

function NumericFilter() {
  const { searchPlanet, setSearchPlanet } = useContext(MyContext);
  const [getColumn, setColumn] = useState('population');
  const [getComparison, setComparison] = useState('menor que');
  const [getInput, setInput] = useState(0);
  const [selectOption, setSelectOption] = useState(false);

  function renderOptions() {
    let getPopulation = [''];
    if (selectOption) {
      getPopulation = Object.values(searchPlanet[0]
        .filterByNumericValues).map((object) => object.column);
    }

    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const newColumns = columns.filter((item) => item !== getPopulation[0]);
    return newColumns.map((item) => (
      <option key={ item } value={ item }>{ item }</option>));
  }
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {
          renderOptions()
        }
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        onChange={ (e) => setInput(e.target.value) }
        type="number"
      />

      <button
        data-testid="button-filter"
        onClick={ () => {
          setSelectOption(true);
          setSearchPlanet([
            {
              filterByName: {
                name: '',
              },
              filterByNumericValues: [
                {
                  column: getColumn,
                  comparison: getComparison,
                  value: getInput,
                },
              ],
            },
          ]);
        } }
        type="button"
      >
        Buscar
      </button>
    </div>
  );
}

export default NumericFilter;
