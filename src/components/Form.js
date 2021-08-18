import React, { useContext } from 'react';
import Context from '../context/Context';

function Form() {
  const { planetName, handleName } = useContext(Context);

  return (
    <form>
      <label htmlFor="name-filter">
        Nome:
        <input
          id="name-filter"
          name="name-filter"
          type="text"
          value={ planetName }
          data-testid="name-filter"
          onChange={ handleName }
        />
      </label>
    </form>
  );
}

export default Form;
