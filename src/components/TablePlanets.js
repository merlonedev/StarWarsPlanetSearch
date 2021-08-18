import React, { useContext } from 'react';
import Context from '../context/Context';

function TabletPlanets() {
  const { planets } = useContext(Context);
  console.log(planets);
  return (
    <p>TabletPlanets online</p>
  );
}

export default TabletPlanets;
