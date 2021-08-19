import React, { useContext, useState, useEffect } from 'react';
import StarWarsPlanetsContext from '../../../context/StarWarsPlanetsContext';

const BtnAddFilter = () => {
  const { data, column, comparison,
    value, setState } = useContext(StarWarsPlanetsContext);
  const [filteredPlanets, setfilteredPlanets] = useState([]);

  const test = () => {
    let doubleFilteredPlanets = [];
    if (comparison === 'maior que') {
      doubleFilteredPlanets = data.filter((planet) => +planet[column] > +value);
      setfilteredPlanets(doubleFilteredPlanets);
    }

    if (comparison === 'menor que') {
      doubleFilteredPlanets = data.filter((planet) => +planet[column] < +value);
      setfilteredPlanets(doubleFilteredPlanets);
    }

    if (comparison === 'igual a') {
      doubleFilteredPlanets = data.filter((planet) => +planet[column] === +value);
      setfilteredPlanets(doubleFilteredPlanets);
    }
  };

  useEffect(() => {
    console.log(filteredPlanets);
    setState(filteredPlanets);
  }, [filteredPlanets, setState]);

  return (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ () => test() }
    >
      Add Filter
    </button>
  );
};

export default BtnAddFilter;
