import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const filterValue = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

function SearchFilters() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [state, setState] = useState(filterValue);
  const selectHead = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { filterByNumericValues } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleChangeStateLocal = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleChangeNumbers = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, state] },
    );
  };

  const filterHead = () => {
    const newSelectHead = [...selectHead];
    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column }) => {
        const exclude = newSelectHead.indexOf(column);
        const indexNul = -1;
        if (exclude > indexNul) {
          newSelectHead.splice(exclude, 1);
        }
      });
    }
    console.log(newSelectHead);
    return newSelectHead;
  };

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Digite o nome que deseja filtrar"
        />
        <div>
          <select
            data-testid="column-filter"
            onChange={ handleChangeStateLocal }
            name="column"
          >
            {filterHead().map((content) => (
              <option key={ content } value={ content }>{ content }</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChangeStateLocal }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            onChange={ handleChangeStateLocal }
            placeholder="Digite o valor"
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleChangeNumbers }
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchFilters;
