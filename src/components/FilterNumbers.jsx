import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterNumbers() {
  const { setFilterByNumericValues } = useContext(MyContext);
  const [inputs, setInputs] = useState({
    collum: '',
    comparison: '',
    value: 0,
  });
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = (event) => {
    event.preventDefaul();
    setFilterByNumericValues(inputs);
  };

  return (
    <form action="">
      <select
        name="collum"
        id="collum"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        <option value="population">População</option>
        <option value="orbital_period">Período de orbita</option>
        <option value="diameter">Diametro</option>
        <option value="rotation_period">Período de rotação</option>
        <option value="surface_water">Superfície Aquática</option>
      </select>
      <select
        name="comparison"
        id="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        <option value="maior">maior que</option>
        <option value="menor">menor que</option>
        <option value="igual">igual a</option>
      </select>
      <input type="number" name="value" id="value" data-testid="value-filter" />
      <input
        type="button"
        value="filtrar"
        data-testid="button-filter"
        onClick={ handleClick }
      />
    </form>
  );
}

export default FilterNumbers;
