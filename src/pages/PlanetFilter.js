import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
import Input from './components/Input';
import Select from './components/Select';

function filterByName(name, planets, setPlanets) {
  setPlanets(planets.filter((element) => element.name.toLowerCase().includes(name)));
}

function columnCase(column) {
  let myCase = '';
  switch (column) {
  case 'population':
    myCase = '1';
    break;
  case 'orbital_period':
    myCase = '2';
    break;
  case 'diameter':
    myCase = '3';
    break;
  case 'rotation_period':
    myCase = '4';
    break;
  case 'surface_water':
    myCase = '5';
    break;
  default:
  }
  return myCase;
}

function filterByNumber(number, planets, setPlanets) {
  const { column, comparison, value } = number;
  let myPlanets = [];
  let myCase = columnCase(column);
  switch (comparison) {
  case 'maior que':
    myCase = myCase.concat('1');
    break;
  case 'menor que':
    myCase = myCase.concat('2');
    break;
  case 'igual a':
    myCase = myCase.concat('3');
    break;
  default:
  }

  switch (myCase) {
  case '11':
    myPlanets = planets.filter((planet) => planet.population > parseInt(value, 10));
    break;
  case '12':
    myPlanets = planets.filter((element) => element.population < parseInt(value, 10));
    break;
  case '13':
    myPlanets = planets.filter((element) => element.population === value);
    break;
  case '21':
    myPlanets = planets.filter((planet) => planet.orbital_period > parseInt(value, 10));
    break;
  case '22':
    myPlanets = planets.filter((element) => element.orbital_period < parseInt(value, 10));
    break;
  case '23':
    myPlanets = planets.filter((element) => element.orbital_period === value);
    break;
  case '31':
    myPlanets = planets.filter((planet) => planet.diameter > parseInt(value, 10));
    break;
  case '32':
    myPlanets = planets.filter((element) => element.diameter < parseInt(value, 10));
    break;
  case '33':
    myPlanets = planets.filter((element) => element.diameter === value);
    break;
  case '41':
    myPlanets = planets.filter((planet) => planet.rotation_period > parseInt(value, 10));
    break;
  case '42':
    myPlanets = planets.filter((element) => element.rotation_period < parseInt(value, 10));
    break;
  case '43':
    myPlanets = planets.filter((element) => element.rotation_period === value);
    break;
  case '51':
    myPlanets = planets.filter((planet) => planet.surface_water > parseInt(value, 10));
    break;
  case '52':
    myPlanets = planets.filter((element) => element.surface_water < parseInt(value, 10));
    break;
  case '53':
    myPlanets = planets.filter((element) => element.surface_water === value);
    break;
  default:
  }
  setPlanets(myPlanets);
}

function getInputArray(guide) {
  const { value } = guide.filterNumber;
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
      name: 'value',
      text: 'Valor:',
      type: 'number',
      testId: 'value-filter',
      value,
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

function getSelectComparisonOptions() {
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
  name = 'select-input',
  text = 'Select:',
  testId = 'none',
  optionList = null,
}) {
  return (
    <Select
      handleChange={ handleChange }
      name={ name }
      text={ text }
      testId={ testId }
      optionList={ optionList }
    />
  );
}

export default function PlanetFilter() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [filterName, setFilterName] = useState('');
  const [allPlanets, setAllPlanets] = useState([]);
  const [filterNumber, setfilterNumber] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const fillPlanets = async () => {
    const myPlanets = await API.getPlanetsFirstPage();
    setPlanets(myPlanets);
    // myPlanets = await API.getAllPlanets();
    setAllPlanets(myPlanets);
  };
  useEffect(() => {
    if (planets.length <= 0
      && (!filterNumber.column
      && !filterNumber.comparison
      && !filterNumber.value)) {
      fillPlanets();
    }
  });
  useEffect(() => {
    if (filterName) {
      filterByName(filterName, planets, setPlanets);
    }
    if (!filterName && allPlanets.length > 0) {
      setPlanets(allPlanets);
    }
  }, [filterName, allPlanets, setPlanets]);
  useEffect(() => {
    if (filterNumber.column !== ''
      && filterNumber.comparison !== ''
      && filterNumber.value !== '') {
      filterByNumber(filterNumber, allPlanets, setPlanets);
    }
    if ((!filterNumber.column || !filterNumber.comparison || !filterNumber.value)
      && (allPlanets.length > 0)) {
      setPlanets(allPlanets);
    }
  }, [filterNumber, allPlanets, setPlanets]);

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
  };

  return (
    <section>
      <header>
        <h1>Header</h1>
        { getInput(getInputArray({ handleChange, filterName, filterNumber })[0]) }
        <section>
          { getSelect({ handleChange, text: 'Column:', testId: 'column-filter', name: 'column', optionList: getSelectColumnOptions() })}
          { getSelect({ handleChange, text: 'Comparison:', testId: 'comparison-filter', name: 'comparison', optionList: getSelectComparisonOptions() })}
          { getInput(getInputArray({ handleChange, filterName, filterNumber })[1]) }
          <button
            data-testid="button-filter"
            type="button"
          >
            Filter
          </button>
        </section>
      </header>
    </section>
  );
}
