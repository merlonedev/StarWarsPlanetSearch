import React, { useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
// import Input from './components/Input';

export default function PlanetFilter() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const fillPlanets = async () => {
    const myPlanets = await API.getAllPlanets();
    setPlanets(myPlanets);
  };
  useEffect(() => {
    if (planets.length <= 0) {
      fillPlanets();
    }
  });

  // const [filterName, setFilterName] = useState('');

  return (
    <section>
      <header>
        <h1>Header</h1>
        {/* <Input
            testId="email-input"
            name="email"
            placeholder="Email"
            value={ userInfo.email }
            handleChange={ handleChange }
          /> */}
      </header>
    </section>
  );
}
