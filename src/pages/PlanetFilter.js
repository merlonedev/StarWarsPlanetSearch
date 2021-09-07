import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
import Input from './components/Input';
import Select from './components/Select';
import { filterByNumber, filterByName } from './Filter';

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
    { value: 'population', disabled: false },
    { value: 'orbital_period', disabled: false },
    { value: 'diameter', disabled: false },
    { value: 'rotation_period', disabled: false },
    { value: 'surface_water', disabled: false },
  ];
}

function getSelectComparisonOptions() {
  return [
    { value: 'maior que', disabled: false },
    { value: 'menor que', disabled: false },
    { value: 'igual a', disabled: false },
  ];
}

function manageComparisonOptions({ comparison }) {
  const error = -1;
  const myOptions = getSelectComparisonOptions().slice();
  const optionIndex = myOptions.findIndex((option) => option.value === comparison);
  if (optionIndex !== error) myOptions[optionIndex].disabled = true;
  return myOptions;
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
  const [selection, setSelection] = useState({
    column: '',
    comparison: '',
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
    if (!filterName && allPlanets.length > 0
      && (!filterNumber.column || !filterNumber.comparison || !filterNumber.value)) {
      setPlanets(allPlanets);
      console.log('Todos os Planetas');
    }
  });// , [filterName, planets, allPlanets, setPlanets]);
  useEffect(() => {
    if (filterNumber.column !== ''
      && filterNumber.comparison !== ''
      && filterNumber.value !== '') {
      filterByNumber(filterNumber, planets, setPlanets);
      console.log('Planets:', planets);
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
      setSelection((prevState) => (
        { ...prevState, column: value }
      ));
      break;
    case 'comparison':
      setfilterNumber((prevState) => (
        { ...prevState, comparison: value }
      ));
      setSelection((prevState) => (
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
          { getSelect({
            handleChange,
            text: 'Column:',
            testId: 'column-filter',
            name: 'column',
            optionList: getSelectColumnOptions(),
          })}
          { getSelect({
            handleChange,
            text: 'Comparison:',
            testId: 'comparison-filter',
            name: 'comparison',
            optionList: manageComparisonOptions(selection), // getSelectComparisonOptions(),
          })}
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
