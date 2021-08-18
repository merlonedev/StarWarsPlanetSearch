import { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const GetPlanets = () => {
  const { data } = useContext(PlanetsContext);
  return (data);
};

export default GetPlanets;
