import React, { useContext, useState } from 'react';
import StarContext from '../../context/StarContext';

function OrderInput() {
  const {
    columns,
    planets,
    setPlanets,
  } = useContext(StarContext);
  const [numberTypeColumns] = useState(['name', ...columns]);
  const [orderFormState, setOrderFormState] = useState({
    column: 'name',
    sort: 'ASC',
  });

  function handleChange({ target }) {
    const { value, name } = target;
    setOrderFormState({ ...orderFormState, [name]: value });
  }

  function handleClick() {
    const { column, sort } = orderFormState;
    console.log('oi');
    const newSort = planets.sort(({ [column]: a }, { [column]: b }) => {
      let comp = 0;
      const ONE_NEG = -1;

      if (a > b) {
        comp = 1;
      } else if (a < b) {
        comp = ONE_NEG;
      }

      return (
        (sort === 'DESC') ? (comp * ONE_NEG) : comp
      );
    });

    setPlanets([...newSort]);
  }

  return (
    <div className="mb-3">
      <label htmlFor="name-input" className="form-label">
        Column
        <select
          data-testid="column-sort"
          name="column"
          id=""
          onChange={ handleChange }
        >
          {numberTypeColumns.map((opt) => (
            <option key={ opt } value={ opt }>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="name-input" className="form-label">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASC"
          id="asc-radio"
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="name-input" className="form-label">
        DESC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESC"
          id="desc-radio"
          onChange={ handleChange }
        />
      </label>

      <button data-testid="column-sort-button" type="button" onClick={ handleClick }>
        Ordenar
      </button>
    </div>
  );
}

export default OrderInput;
