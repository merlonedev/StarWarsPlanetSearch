import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterNumbers() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(MyContext);
  const [inputs, setInputs] = useState({
    collum: 'population',
    comparison: 'maior',
    value: 0,
  });
  const [collums, setCollums] = useState([]);

  useEffect(() => {
    setCollums('population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water');
  }, []);
  useEffect(() => {
    const filters = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    filterByNumericValues.forEach((value) => {
      const index = filters.indexOf(value.collum);
      filters.splice(index, 1);
    });
    setCollums(filters);
  }, [filterByNumericValues]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    setFilterByNumericValues([
      ...filterByNumericValues,
      inputs,
    ]);
  };

  return (
    <form action="">
      <select
        name="collum"
        id="collum"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {collums.map((collum) => (
          <option key={ collum } value={ collum }>{collum}</option>))}
      </select>
      <select
        name="comparison"
        id="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        id="value"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        value="filtrar"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumbers;
