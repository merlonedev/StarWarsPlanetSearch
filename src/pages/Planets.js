import React from 'react';
import PlanetFilter from './PlanetFilter';
import PlanetsTable from './PlanetsTable';

export default function Planets() {
  return (
    <section>
      <PlanetFilter />
      <PlanetsTable />
    </section>
  );
}
