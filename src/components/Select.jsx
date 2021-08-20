import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Select() {
  const {
    // filterSelect,
    handleChangeSelect,
    handleCompareNumber,
    handleComparation,
    column,
    comparison,
    valuer,
    filterOptions,
  } = useContext(MyContext);
  // const [inputFilters, setInputFilters] = useState({
  //   selected: 'population', // infoPlanet
  //   compareString: 'maior que', // compareString
  //   value: 0, // infoNumber
  // });

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparations = [
    'maior que',
    'menor que',
    'igual a',
  ];

  // const handleChange = ({ target: { name, value } }) => {
  //   const correctValue = (name === 'value' && value < 0) ? 0 : value; // input de numero
  //   setInputFilters({
  //     ...inputFilters,
  //     [name]: correctValue,
  //   });
  // }

  // const checkInfo = (infoPlanet, compareString, infoNumber) => {
  //   switch(compareString) {
  //     case 'maior que':
  //       return (Number(infoPlanet) > Number(infoNumber));
  //     case 'menor que':
  //       return (Number(infoPlanet) < Number(infoNumber));
  //     default:
  //       return (Number(infoPlanet) === Number(infoNumber));
  //   };
  // }

  return (
    <>
      <select data-testid="column-filter" name="selected" onChange={ handleChangeSelect }>
        { options.map((option, index) => (
          <option key={ index } label={ option } value={ option }>
            { option }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="compareString"
        onChange={ handleComparation }
      >
        { comparations.map((compare, index) => (
          <option value={ compare } label={ compare } key={ index }>
            { compare }
          </option>
        ))}
      </select>
      <input
        name="value"
        onChange={ handleCompareNumber }
        data-testid="value-filter"
        type="number"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterOptions(column, valuer, comparison) }
      >
        Filtrar
      </button>
    </>
  );
}

export default Select;
