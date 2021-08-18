import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersData() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const clickHandle = (index) => {
    const newArray = [...filterByNumericValues];
    newArray.splice(index, 1);
    setFilter({
      ...filters,
      filterByNumericValues: newArray,
    });
  }

  return (
    <div>
      <ul>
        { filterByNumericValues.map((filter, index) => (
          <li key={ index } data-testid="filter">
            { Object.values(filter).map((value) => <p key={value}>{value}</p>)}
            <button type="button" onclick={ clickHandle }>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersData;