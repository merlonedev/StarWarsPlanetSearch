import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetContext';

function PlanetAPI({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const filterInitialState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    },
  };

  const [filters, setFilters] = useState(filterInitialState);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const context = {
    planetList,
    setPlanetList,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <div>
      <PlanetsContext.Provider value={ context }>
        { children }
      </PlanetsContext.Provider>
    </div>
  );
}
export default PlanetAPI;

PlanetAPI.propTypes = {
  children: PropTypes.node.isRequired,
};
