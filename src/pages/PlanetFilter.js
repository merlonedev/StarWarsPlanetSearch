import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
import Input from './components/Input';

function filterByName(name, planets, setPlanets) {
  setPlanets(planets.filter((element) => element.name.toLowerCase().includes(name)));
}

export default function PlanetFilter() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [filterName, setFilterName] = useState('');
  const [allPlanets, setAllPlanets] = useState([]);
  const fillPlanets = async () => {
    const myPlanets = await API.getPlanetsFirstPage();
    setPlanets(myPlanets);
    // myPlanets = await API.getAllPlanets();
    setAllPlanets(myPlanets);
  };
  useEffect(() => {
    if (planets.length <= 0) {
      fillPlanets();
    }
  });
  useEffect(() => {
    if (filterName) {
      filterByName(filterName, allPlanets, setPlanets);
    }
    if (!filterName && allPlanets.length > 0) {
      setPlanets(allPlanets);
    }
  }, [filterName, allPlanets, setPlanets]);

  const handleChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <section>
      <header>
        <h1>Header</h1>
        <Input
          testId="name-filter"
          text="Nome:"
          name="filterName"
          placeholder="Planet Name"
          value={ filterName }
          handleChange={ handleChange }
        />
      </header>
    </section>
  );
}
