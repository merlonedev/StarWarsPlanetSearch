import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [columnsCat, setColumnsCat] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filtered, setFiltered] = useState([]);
  const [filtersByNumber, setFiltersByNumber] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name },
    filterByNumericValues: filtersByNumber,
  });

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((result) => result.json());
      setData(results);
      setFiltered(results);
    };

    getPlanets();
  }, []);

  const context = {
    data,
    name,
    filtered,
    filtersByNumber,
    filter,
    columnsCat,
    setData,
    setName,
    setFiltered,
    setFilter,
    setFiltersByNumber,
    setColumnsCat,
  };

  return (
    <div>
      <PlanetsContext.Provider value={ context }>
        { children }
      </PlanetsContext.Provider>
    </div>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
