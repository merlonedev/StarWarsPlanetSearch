import React, { useContext, useState } from 'react';
import context from '../context';

function Filters() {
  const [inputText, setInputText] = useState('');
  const { setName } = useContext(context);
  const handleClick = () => {
    setName(inputText);
    setInputText('');
  };
  return (
    <div>
      <input
        value={ inputText }
        onChange={ ({ target: { value } }) => setInputText(value) }
        data-testid="name-filter"
      />
      <button type="button" onClick={ handleClick }>Search</button>
    </div>
  );
}

export default Filters;
