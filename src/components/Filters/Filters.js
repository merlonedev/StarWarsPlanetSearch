import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import NameFilter from './NameFilter';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  // const { data, setData } = useContext(PlanetsContext);

  // const filterName = () => {
  //   // const { filters: { filterByName: { name } } } = filters;
  //   // const planets = data.filter((planet) => (planet.name).toLowerCase().includes(name));
  //   // setData(planets);
  //   // console.log('filtrado', planets);
  // };

  const handleChangeFilters = ({ target: { name, value } }) => {
    switch (name) {
    case 'planetName':
      setFilters({
        ...filters,
        filters: { filterByName: { name: value.toLowerCase() } },
      });
      // filterName();

      break;

    default:
    }
  };

  return (
    <section>
      <NameFilter handleChangeFilters={ handleChangeFilters } />
    </section>
  );
}

export default Filters;
