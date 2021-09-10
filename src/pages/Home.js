import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import { getAscOrDescFunc, getByName, getWithNumbers,
  renderTableHead } from '../helpers/functions';

export default function Home() {
  const { planets, filters, setFilters } = useContext(myContext);
  const filterNumberOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [usedArrayOfNumber, setUsedArrayOfNumber] = useState([]);
  const [newArrayofFilter, setNewArrayOfFilter] = useState(filterNumberOptions);
  const [filterWithNumber, setfilterWithNumber] = useState({
    columnSetup: 'population', comparisonSetup: 'maior que', valueSetup: '1',
  });

  const [FilterWithNameAndNumber, setFilterWithNameAndNumber] = useState(planets);
  const [shouldFilterNumber, setshouldFilterNumber] = useState(false);
  const [shouldFilterSort, setshouldFilterSort] = useState(false);
  useEffect(() => {
    const filterPlanet = () => {
      if (planets) {
        const filteredName = getByName(planets, filters);
        setFilterWithNameAndNumber(filteredName);
      }
    };
    filterPlanet();
  },
  [filters.filterByName.name]);

  useEffect(() => {
    const filterPlanet = () => {
      if (FilterWithNameAndNumber) {
        const filteredName = getAscOrDescFunc(FilterWithNameAndNumber, filters);
        setFilterWithNameAndNumber(filteredName);
        setshouldFilterSort(false);
      }
    };
    filterPlanet();
  },
  [shouldFilterSort]);
  //   [filters.filterByName.name]);

  useEffect(() => {
    if (planets || shouldFilterNumber) {
      const usedArray = !FilterWithNameAndNumber ? planets : FilterWithNameAndNumber;
      const filterData = () => {
        filters.filterByNumericValues.forEach((filter) => {
          const filterRound = getWithNumbers(usedArray,
            filter);
          setFilterWithNameAndNumber(filterRound);
          setNewArrayOfFilter(newArrayofFilter
            .filter((used) => !usedArrayOfNumber.includes(used)));
          setfilterWithNumber({ ...filterWithNumber, columnSetup: newArrayofFilter[1] });
          setshouldFilterNumber(false);
        });
      };
      filterData();
    }
  },
  [filters.filterByNumericValues, shouldFilterNumber, usedArrayOfNumber]);
  //  [filters.filterByNumericValues, shouldFilterNumber, usedArrayOfNumber]);
  function renderPlanets() {
    const usedArray = !FilterWithNameAndNumber ? planets : FilterWithNameAndNumber;
    return (
      Object.values(usedArray).map((planetas, index) => (
        <tr key={ index }>
          <td data-testid="planet-name">{planetas.name}</td>
          <td>{planetas.rotation_period}</td>
          <td>{planetas.orbital_period}</td>
          <td>{planetas.diameter}</td>
          <td>{planetas.climate}</td>
          <td>{planetas.gravity}</td>
          <td>{planetas.terrain}</td>
          <td>{planetas.surface_water}</td>
          <td>{planetas.population}</td>
        </tr>
      )));
  }
  function getFilterNamePlanets({ target }) {
    const { value } = target;
    setFilters({ ...filters,
      filterByName: { name: value },
    });
  }
  function getFilterNumber() {
    setUsedArrayOfNumber([...usedArrayOfNumber, filterWithNumber.columnSetup]);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column: filterWithNumber.columnSetup,
        comparison: filterWithNumber.comparisonSetup,
        value: filterWithNumber.valueSetup,
      }],
    });
    setshouldFilterNumber(true);
  }
  function sortButton() {
    const usedArray = !FilterWithNameAndNumber ? planets : FilterWithNameAndNumber;
    getAscOrDescFunc(usedArray, filters);
    setshouldFilterSort(true);
  }
  function getOrder({ target }) {
    const { value } = target;
    setFilters({ ...filters,
      order: { ...filters.order,
        column: value,
      },
    });
  }
  function getAscOrDesc({ target }) {
    const { value } = target;
    setFilters({ ...filters,
      order: { ...filters.order,
        sort: value,
      },
    });
  }
  function getNumberSetup({ target }) {
    const { value, name } = target;
    setfilterWithNumber({ ...filterWithNumber,
      [name]: value,
    });
  }
  function removeItem({ target }) {
    const { id } = target;
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues.filter((obj) => {
        if (obj.column !== id) {
          return true;
        }
        return false;
      })],
    });
    setFilterWithNameAndNumber(planets);
    setshouldFilterNumber(true);
  }
  return (
    <div>
      <label htmlFor="filterByName">
        Filtro por nome:
        <input
          type="text"
          name="filterByName"
          id="filterByName"
          data-testid="name-filter"
          onChange={ getFilterNamePlanets }
        />
      </label>
      <label htmlFor="columnSetup">
        Filtro por número:
        <select
          type="select"
          name="columnSetup"
          id="columnSetup"
          data-testid="column-filter"
          onChange={ getNumberSetup }
        >
          {Object.values(newArrayofFilter).map((number, i) => (
            <option key={ i }>{number}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparisonSetup">
        <select
          type="select"
          name="comparisonSetup"
          id="comparisonSetup"
          data-testid="comparison-filter"
          onChange={ getNumberSetup }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueSetup">
        <input
          type="number"
          name="valueSetup"
          placeholder="1"
          id="valueSetup"
          data-testid="value-filter"
          onChange={ getNumberSetup }
        />
      </label>
      <button
        type="submit"
        name="button-filter"
        id="button-filter"
        data-testid="button-filter"
        onClick={ getFilterNumber }
      >
        Filtrar
      </button>
      <label htmlFor="columnSetup">
        Ordenar:
        <select
          type="select"
          name="columnOrder"
          id="columnOrder"
          data-testid="column-sort"
          onChange={ getOrder }
        >
          {Object.values(['name', ...filterNumberOptions]).map((number, i) => (
            <option key={ i }>{number}</option>
          ))}
        </select>
      </label>
      <label
        htmlFor="column-sort-input-asc"
      >
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          checked={ filters.order.sort === 'ASC' }
          onClick={ getAscOrDesc }
        />
        Crescente
      </label>
      <label
        htmlFor="column-sort-input-desc"
      >
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          checked={ filters.order.sort === 'DESC' }
          onClick={ getAscOrDesc }
        />
        Decrescente
      </label>
      <button
        type="button"
        name="button-sort"
        data-testid="column-sort-button"
        onClick={ sortButton }
      >
        Ordenar
      </button>
      <ul>
        { filters.filterByNumericValues.length === 0 ? ''
          : Object.values(filters.filterByNumericValues).map((filter, index) => (
            <li
              data-testid="filter"
              key={ index }
            >
              {filter.column}
              {filter.comparison}
              {filter.value}
              <button
                id={ filter.column }
                type="button"
                onClick={ removeItem }
              >
                x
              </button>
            </li>
          ))}
      </ul>
      <table>
        <thead>
          {renderTableHead()}
        </thead>
        <tbody>
          {renderPlanets()}
        </tbody>
      </table>
    </div>);
}
