import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Select from './components/Select';
import Input from './components/Input';

const COLUMN_SORT = 'column-sort';
const COLUMN_SORT_RADIO = 'column-sort-radio';

function getInputArray(guide) {
  return [
    {
      handleChange: guide.handleChange,
      name: COLUMN_SORT_RADIO,
      text: 'Ascendant:',
      type: 'radio',
      testId: 'column-sort-input-asc',
      value: 'ASC',
      id: 'ASC',
    },
    {
      handleChange: guide.handleChange,
      name: COLUMN_SORT_RADIO,
      text: 'Descendant:',
      type: 'radio',
      testId: 'column-sort-input-desc',
      value: 'DESC',
      id: 'DESC',
    },
  ];
}

function getSelectColumnOptions() {
  return [
    { value: 'name', disabled: false },
    { value: 'rotation_period', disabled: false },
    { value: 'orbital_period', disabled: false },
    { value: 'diameter', disabled: false },
    { value: 'climate', disabled: false },
    { value: 'gravity', disabled: false },
    { value: 'terrain', disabled: false },
    { value: 'surface_water', disabled: false },
    { value: 'population', disabled: false },
    { value: 'films', disabled: false },
    { value: 'created', disabled: false },
    { value: 'edited', disabled: false },
    { value: 'url', disabled: false },
  ];
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

export function sortPlanets(selection, planets, setPlanets) {
  const { column, order } = selection;
  const myPlanets = planets.slice();
  switch (order) {
  case 'ASC':
    if (column === 'rotation_period'
      || column === 'orbital_period'
      || column === 'diameter'
      || column === 'surface_water'
      || column === 'population') {
      myPlanets.sort((planetA, planetB) => planetA[column] - planetB[column]);
    } else {
      myPlanets.sort(
        (planetA, planetB) => +(planetA[column] > planetB[column])
          || +(planetA[column] === planetB[column]) - 1,
      );
    }
    break;
  case 'DESC':
    if (column === 'rotation_period'
      || column === 'orbital_period'
      || column === 'diameter'
      || column === 'surface_water'
      || column === 'population') {
      myPlanets.sort((planetA, planetB) => planetB[column] - planetA[column]);
    } else {
      myPlanets.sort(
        (planetA, planetB) => +(planetA[column] > planetB[column])
          || +(planetA[column] === planetB[column]) - 1,
      );
      myPlanets.reverse();
    }
    break;
  default:
  }
  setPlanets(myPlanets);
}

export default function OrderBy() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [selection, setSelection] = useState({
    column: 'name',
    order: 'ASC',
  });
  useEffect(() => {
    console.log('Orderby useEffect ');
    sortPlanets(selection, planets, setPlanets);
  }, [selection, setPlanets]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
    case COLUMN_SORT:
      setSelection((prevState) => (
        { ...prevState, column: value }
      ));
      break;
    case COLUMN_SORT_RADIO:
      setSelection((prevState) => (
        { ...prevState, order: value }
      ));
      break;
    default:
    }
    console.log(selection);
  };

  return (
    <section>
      { getSelect({
        handleChange,
        text: 'Column:',
        testId: COLUMN_SORT,
        name: COLUMN_SORT,
        optionList: getSelectColumnOptions(),
      })}
      { getInput(getInputArray({ handleChange, selection })[0]) }
      { getInput(getInputArray({ handleChange, selection })[1]) }
      <button
        data-testid="column-sort-button"
        type="button"
      >
        Sort
      </button>
    </section>
  );
}
