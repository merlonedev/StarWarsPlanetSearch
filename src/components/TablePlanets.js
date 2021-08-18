import React, { useContext } from 'react';
import Context from '../context/Context';

function TabletPlanets() {
  const { planets } = useContext(Context);
  const HEADERS_TABLE = Object.keys(planets[0]);
  console.log(HEADERS_TABLE);
  return (
    <p>TabletPlanets online</p>
  );
}

export default TabletPlanets;
