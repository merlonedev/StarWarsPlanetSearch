import React, { useContext } from 'react';
import PlanetListContext from '../contexts/PlanetListContext';
import Input from './Input';
// import Select from './Select';

function SearchBar() {
  const { nameFilter } = useContext(PlanetListContext);
  const handleChange = (e) => {
    const { target: { value, id } } = e;
    switch (id) {
    case 'nameFilter':
      return nameFilter(value);
    default:
      console.log(value);
    }
  };
  return (
    <>
      <h3>Pesquisar</h3>
      <Input testID="name-filter" id="nameFilter" name="Nome" onChange={ handleChange } />
      {/* <Select testID="column-filter" />
      <Select testID="comparison-filter" />
      <Input testID="value-filter" /> */}
    </>
  );
}

export default SearchBar;
