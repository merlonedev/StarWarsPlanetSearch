import React, { useState, useEffect } from 'react';
import './Planets.css';
import Select from './Select';
import Table from './Table';

function Planets() {
  const firstOptions = ['Selecione', 'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const secondOptions = ['maior que', 'menor que', 'igual a'];

  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState({ filters:
    { filterByName: { name: '' }, filterByNumericValues: [] },
  });
  const [newFirstOptions, setNewFirstOptions] = useState(firstOptions);
  const [filterNumeric, setFilterNumeric] = useState(
    { column: 'Selecione', comparison: 'maior que', value: '' },
  );

  useEffect(() => {
    const getPlanets = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planetsResults = await fetch(api).then((data) => data.json());
      setPlanets([...planetsResults.results]);
    };
    getPlanets();
  }, []);

  const { filters: { filterByName, filterByNumericValues } } = filters;
  const { column, comparison } = filterNumeric;

  const handleFilterName = ({ target: { value } }) => {
    setFilters({ filters: { filterByName: { name: value } } });
  };
  const handleSelectors = ({ target: { value, name } }) => {
    switch (name) {
    case 'first': setFilterNumeric({ ...filterNumeric, column: value });
      break;
    case 'second': setFilterNumeric({ ...filterNumeric, comparison: value });
      break;
    case 'value': setFilterNumeric({ ...filterNumeric, value });
      break;
    default:
    }
  };
  const filterPopulation = () => {
    switch (comparison) {
    case 'maior que': setFilterPlanets(planets.filter(
      (item) => +item.population > +filterNumeric.value,
    ));
      break;
    case 'menor que': setFilterPlanets(planets.filter(
      (item) => +item.population < +filterNumeric.value,
    ));
      break;
    case 'igual a': setFilterPlanets(planets.filter(
      (item) => +item.population === +filterNumeric.value,
    ));
      break;
    default:
    }
  };
  const filterOrbital = () => {
    switch (comparison) {
    case 'maior que': setFilterPlanets(planets.filter(
      (item) => +item.orbital_period > +filterNumeric.value,
    ));
      break;
    case 'menor que': setFilterPlanets(planets.filter(
      (item) => +item.orbital_period < +filterNumeric.value,
    ));
      break;
    case 'igual a': setFilterPlanets(planets.filter(
      (item) => +item.orbital_period === +filterNumeric.value,
    ));
      break;
    default:
    }
  };
  const filterDiameter = () => {
    switch (comparison) {
    case 'maior que': setFilterPlanets(planets.filter(
      (item) => +item.diameter > +filterNumeric.value,
    ));
      break;
    case 'menor que': setFilterPlanets(planets.filter(
      (item) => +item.diameter < +filterNumeric.value,
    ));
      break;
    case 'igual a': setFilterPlanets(planets.filter(
      (item) => +item.diameter === +filterNumeric.value,
    ));
      break;
    default:
    }
  };
  const filterRotation = () => {
    switch (comparison) {
    case 'maior que': setFilterPlanets(planets.filter(
      (item) => +item.rotation_period > +filterNumeric.value,
    ));
      break;
    case 'menor que': setFilterPlanets(planets.filter(
      (item) => +item.rotation_period < +filterNumeric.value,
    ));
      break;
    case 'igual a': setFilterPlanets(planets.filter(
      (item) => +item.rotation_period === +filterNumeric.value,
    ));
      break;
    default:
    }
  };
  const filterSurface = () => {
    switch (comparison) {
    case 'maior que': setFilterPlanets(planets.filter(
      (item) => +item.surface_water > +filterNumeric.value,
    ));
      break;
    case 'menor que': setFilterPlanets(planets.filter(
      (item) => +item.surface_water < +filterNumeric.value,
    ));
      break;
    case 'igual a': setFilterPlanets(planets.filter(
      (item) => +item.surface_water === +filterNumeric.value,
    ));
      break;
    default:
    }
  };
  const removeColumn = () => {
    if (column !== 'Selecione') {
      const firstIndex = firstOptions.indexOf(column);
      newFirstOptions.splice(firstIndex, 1);
      setNewFirstOptions(newFirstOptions);
    }
  };
  const filterSelectors = () => {
    if (filterByNumericValues.length === 0) {
      setFilters({
        filters: {
          filterByName: { ...filterByName },
          filterByNumericValues: [filterNumeric],
        },
      });
    } else {
      setFilters({
        filters: {
          filterByName: { ...filterByName },
          filterByNumericValues: [...filterByNumericValues, filterNumeric],
        },
      });
    }
    switch (column) {
    case 'population': filterPopulation();
      break;
    case 'orbital_period': filterOrbital();
      break;
    case 'diameter': filterDiameter();
      break;
    case 'rotation_period': filterRotation();
      break;
    case 'surface_water': filterSurface();
      break;
    default:
    }
    removeColumn();
  };

  return (
    <main>
      <form>
        <div>
          <label htmlFor="filterName">
            <input
              type="text"
              id="filterName"
              name="filterName"
              value={ filterByName.name }
              onChange={ handleFilterName }
              data-testid="name-filter"
            />
            <span>Source</span>
          </label>
        </div>
        <span>Filtrar por:</span>
        <Select
          htmlFor="first"
          options={ newFirstOptions }
          testid="column-filter"
          value={ column }
          onClick={ handleSelectors }
        />
        <Select
          htmlFor="second"
          options={ secondOptions }
          testid="comparison-filter"
          value={ comparison }
          onClick={ handleSelectors }
        />
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            id="value"
            value={ filterNumeric.value }
            data-testid="value-filter"
            onChange={ handleSelectors }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterSelectors }
        >
          Adicionar Filtro
        </button>
      </form>
      <Table
        filterByName={ filterByName }
        setPlanets={ setPlanets }
        planets={ planets }
        filterPlanets={ filterPlanets }
      />
    </main>
  );
}

export default Planets;
