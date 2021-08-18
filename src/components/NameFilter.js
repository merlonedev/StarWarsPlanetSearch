import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

export default function NameFilter() {
  const { data,
    filter: { filterByName: { name } },
    filter,
    setFilter,
  } = useContext(PlanetContext);

  data.filter((planet) => (
    planet.name.toLowerCase().includes(name)
  ));

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      type="text"
      placeholder="Nome do planeta"
      data-testid="name-filter"
      onChange={ (e) => handleChange(e) }
    />
  );
}
