import React, { useEffects, useState } from 'react';
import PlanetsAPI from '../Hooks/PlanetsAPI';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [data] = PlanetsAPI();
}