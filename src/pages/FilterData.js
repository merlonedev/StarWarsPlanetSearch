import React from 'react';
import Input from './components/Input';
import Select from './components/Select';

export function getInputArray(guide) {
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

export function getSelectColumnOptions() {
  return [
    { value: 'population', disabled: false },
    { value: 'orbital_period', disabled: false },
    { value: 'diameter', disabled: false },
    { value: 'rotation_period', disabled: false },
    { value: 'surface_water', disabled: false },
  ];
}

export function getSelectComparisonOptions() {
  return [
    { value: 'maior que', disabled: false },
    { value: 'menor que', disabled: false },
    { value: 'igual a', disabled: false },
  ];
}

export function manageComparisonOptions({ comparison }) {
  const myOptions = getSelectComparisonOptions().slice();
  return myOptions.filter((option) => option.value !== comparison);
}

export function manageColumnOptions({ column }) {
  const myOptions = getSelectColumnOptions().slice();
  return myOptions.filter((option) => option.value !== column);
}

export function getInput({
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

export function getSelect({
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
