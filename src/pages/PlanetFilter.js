import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
import Input from './components/Input';

function filterByName(name, planets, setPlanets) {
  setPlanets(planets.filter((element) => element.name.toLowerCase().includes(name)));
}

function getInputArray(guide) {
  return [
    {
      handleChange: guide.handleChange,
      name: 'filterName',
      text: 'Nome:',
      type: 'text',
      testId: 'name-filter',
      value: guide.filterName,
      placeholder: 'Planet Name',
    },
    {
      handleChange: guide.handleChange,
      name: 'valor',
      text: 'Valor:',
      type: 'number',
      testId: 'value-filter',
      value: guide.filterNumber.value,
      placeholder: 'Ex: 5000',
    },
  ];
}

function getSelectColumnOptions() {
  return [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
}

function getSelectCompatisonOptions() {
  return [
    'maior que',
    'menor que',
    'igual a',
  ];
}

function getInput({
  handleChange = null,
  name = '',
  text = '',
  type = 'text',
  testId = 'none',
  value = null,
  placeholder = '',
}) {
  return (
    <Input
      testId={ testId }
      text={ text }
      name={ name }
      type={ type }
      placeholder={ placeholder }
      value={ value }
      handleChange={ handleChange }
    />
  );
}

function getSelect({
  handleChange = null,
  name = '',
  testId = 'none',
  optionList = null,
}) {
  return (
    <select
      data-testid={ testId }
      onChange={ handleChange }
      name={ name }
    >
      <option value="">All</option>
      { optionList.map((myOption, index) => (
        <option
          key={ index }
          value={ myOption }
        >
          { myOption }
        </option>
      ))}
    </select>
  );
}

export default function PlanetFilter() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [filterName, setFilterName] = useState('');
  const [allPlanets, setAllPlanets] = useState([]);
  const [filterNumber, setfilterNumber] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
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
    const { name, value } = event.target;
    switch (name) {
    case 'filterName':
      setFilterName(value);
      break;
    case 'column':
      setfilterNumber((prevState) => (
        { ...prevState, column: value }
      ));
      break;
    case 'comparison':
      setfilterNumber((prevState) => (
        { ...prevState, comparison: value }
      ));
      break;
    case 'value':
      setfilterNumber((prevState) => (
        { ...prevState, value }
      ));
      break;
    default:
    }
    console.log(`Nome:${name}, Valor:${value}`);
  };

  return (
    <section>
      <header>
        <h1>Header</h1>
        { getInput(getInputArray({ handleChange, filterName, filterNumber })[0]) }
        <section>
          { getSelect({ handleChange, testId: 'column-filter', name: 'column', optionList: getSelectColumnOptions()})}
        </section>
      </header>
    </section>
  );
}
