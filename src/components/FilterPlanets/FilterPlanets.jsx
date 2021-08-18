import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../../contexts/PlanetsContext';
import Input from './Input';

function FilterPlanets() {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const { setFilteredPlanets, data } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  const handleChangeName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  useEffect(() => {
    const filtersPlanets = () => {
      const byName = data
        .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
      setFilteredPlanets(byName);
    };
    filtersPlanets();
  }, [data, filters, name, setFilteredPlanets]);

  return (
    <form>
      <Input
        name="name"
        id="name-filter"
        value={ name }
        placeholder="Digite o nome do Planeta"
        onChange={ handleChangeName }
      />
    </form>
  );
}

export default FilterPlanets;
