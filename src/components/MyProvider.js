import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comparisonOptions] = useState(['maior que', 'menor que', 'igual a']);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFilterList, setNumericFilterList] = useState([]);
  const [columnTags, setColumnTags] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '1000',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((response) => response.json());
      setData(results);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    const planets = data.filter((planet) => planet.name.toLowerCase()
      .includes(searchTerm.toLowerCase()));
    setFilteredPlanets(planets);
  }, [data, searchTerm]);

  function filterByNameInput() {
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (e) => setSearchTerm(e.target.value) }
          placeholder="Search a Planet"
        />
      </div>
    );
  }

  const handleFilter = (e) => {
    if (e.target.name === 'column') {
      setNumericFilters({ ...numericFilters, column: e.target.value });
    } else if (e.target.name === 'comparison') {
      setNumericFilters({ ...numericFilters, comparison: e.target.value });
    } else {
      setNumericFilters({ ...numericFilters, value: e.target.value });
    }
  };

  function handleNumericFilter() {
    setNumericFilterList([...numericFilterList, numericFilters]);
    columnTags.forEach((tag) => {
      if (tag === numericFilters.column) {
        const newColumnTags = [...columnTags];
        newColumnTags.splice(newColumnTags.indexOf(tag), 1);
        setColumnTags(newColumnTags);
      }
    });
  }

  function handleClickFilter() {
    const numericFilteredPlanets = data.filter((planet) => {
      const numericColumn = Number(planet[numericFilters.column]);
      const numericFiltered = Number(numericFilters.value);
      if (numericFilters.comparison === 'maior que') {
        return numericColumn > numericFiltered;
      }
      if (numericFilters.comparison === 'menor que') {
        return numericColumn < numericFiltered;
      }
      if (numericFilters.comparison === 'igual a') {
        return numericColumn === numericFiltered;
      }
      return numericFilteredPlanets;
    });
    setFilteredPlanets(numericFilteredPlanets);
    handleNumericFilter();
  }

  function numericFilter() {
    return (
      <section>
        <select name="column" data-testid="column-filter" onChange={ handleFilter }>
          {columnTags.map((tag, index) => (
            <option key={ index } value={ tag }>
              {tag}
            </option>
          ))}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilter }
        >
          {comparisonOptions.map((option, index) => (
            <option key={ index } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <input
          name="value"
          data-testid="value-filter"
          type="number"
          onChange={ handleFilter }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickFilter }
        >
          Add filter
        </button>
      </section>
    );
  }

  const value = {
    filteredPlanets,
  };
  return (
    <MyContext.Provider value={ value }>
      {numericFilter()}
      {filterByNameInput()}
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyProvider, MyContext };
