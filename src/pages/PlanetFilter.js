import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import * as API from '../service/StarWarsAPI';
import { filterByNumber, filterByName } from './Filter';
import { getInput, getInputArray,
  getSelect, manageColumnOptions, manageComparisonOptions } from './FilterData';
import OrderBy, { sortPlanets } from './OrderBy';

export default function PlanetFilter() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [filterName, setFilterName] = useState('');
  const [allPlanets, setAllPlanets] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterNumber, setfilterNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [selection, setSelection] = useState({
    column: '',
    comparison: '',
  });
  const universe = useRef(allPlanets);
  const newFilterNumber = useRef(filterNumber);
  // const newFilterName = useRef(filterName);

  const fillPlanets = useCallback(async () => {
    // const myPlanets = await API.getPlanetsFirstPage();
    const myPlanets = await API.getMock();
    setPlanets(myPlanets);
    // myPlanets = await API.getAllPlanets();
    setAllPlanets(myPlanets);
    sortPlanets({ column: 'name', order: 'ASC' }, myPlanets, setPlanets);
  }, [setPlanets, setAllPlanets]);
  useEffect(() => {
    if (universe.current.length <= 0) {
      fillPlanets();
      console.log('useEffect 0\n');
    }
  }, [universe, fillPlanets]);
  useEffect(() => {
    console.log('useEffect 1');
    if (filterName) {
      filterByName(filterName, allPlanets, setPlanets);
    }
    if (!filterName && allPlanets.length > 0
      && (!newFilterNumber.current.column
          || !newFilterNumber.current.comparison
          || !newFilterNumber.current.value)) {
      setPlanets(allPlanets);
    }
  }, [filterName, setPlanets]);
  useEffect(() => {
    console.log('useEffect 2');
    if (
      // (filterNumber.column !== ''
      // && filterNumber.comparison !== ''
      // && filterNumber.value !== '')
      filterList) {
      filterList.forEach((filter) => {
        filterByNumber(filter, planets, setPlanets);
      });
      // filterByNumber(filterNumber, planets, setPlanets);
      console.log('useEffect 2.1', filterList);
    }
    if (filterList.length <= 0
      // (!filterNumber.column
      // || !filterNumber.comparison
      // || !filterNumber.value)
      && (allPlanets.length > 0)) {
      setPlanets(allPlanets);
      console.log('useEffect 2.2');
    }
  }, [setPlanets, filterList]);

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

  const handleClick = (event) => {
    const { value } = event.target;
    const myFilters = filterList.slice();
    myFilters.splice(value, 1);
    setFilterList(myFilters);
    console.log('Retirou filtro: ', value);
  };

  const addNewFilter = () => {
    const myFilters = filterList.slice();
    myFilters.push(filterNumber);
    setFilterList(myFilters);
    console.log(myFilters);
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
            optionList: manageColumnOptions(selection),
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
            onClick={ addNewFilter }
          >
            Filter
          </button>
        </section>
        <OrderBy />
        <section className="filters">
          <p>Filters:</p>
          { filterList.map((filter, index) => {
            console.log(filter);
            return (
              <label
                data-testid="filter"
                key={ index }
                htmlFor={ `${index}-button-filter` }
              >
                { `Column: ${filter.column},
                comparison: ${filter.comparison},
                Value: ${filter.value} ` }
                <button
                  type="button"
                  name={ `${index}-button-filter` }
                  value={ index }
                  onClick={ handleClick }
                >
                  X
                </button>
              </label>
            );
          })}
        </section>
      </header>
    </section>
  );
}
