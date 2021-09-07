import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';

export default function Home() {
  const { planets } = useContext(myContext);
  const filterNumberOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [filterWithNumber, setfilterWithNumber] = useState({
    columnSetup: 'population',
    comparisonSetup: 'maior que',
    valueSetup: '1',
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: filterWithNumber.columnSetup,
        comparison: filterWithNumber.comparisonSetup,
        value: filterWithNumber.valueSetup,
      },
    ],
  });

  const [filterPlanets, setFilterPlanets] = useState('');
  const [FilterWithNameAndNumber, setFilterWithNameAndNumber] = useState('');
  const [shouldFilterNumber, setshouldFilterNumber] = useState(false);

  useEffect(() => {
    const filterPlanet = () => {
      if (planets) {
        const filterName = filters.filterByName.name;
        const filterNameInArray = (obj) => {
          if (obj.name.includes(filterName)) {
            return true;
          }
          return false;
        };
        const filteredName = planets.filter(filterNameInArray);
        setFilterPlanets(filteredName);
        setFilterWithNameAndNumber(filteredName);
      }
    };
    filterPlanet();
  },
  [filters.filterByName.name]);

  useEffect(() => {
    const filterPlanetWithNumber = () => {
      if ((planets || filterPlanets) && shouldFilterNumber) {
        const usedArray = !filterPlanets ? planets : filterPlanets;
        const { column, value, comparison } = filters.filterByNumericValues;
        const filterNumberInArray = (obj) => {
          switch (comparison) {
          case 'maior que':
            if (parseFloat(obj[column]) > parseFloat(value)) {
              return true;
            }
            return false;
          case 'menor que':
            if (parseFloat(obj[column]) < parseFloat(value)) {
              return true;
            }
            return false;
          case 'igual a':
            if (parseFloat(obj[column]) === parseFloat(value)) {
              return true;
            }
            return false;
          default:
            break;
          }
        };
        const filteredwithNumber = usedArray.filter(filterNumberInArray);
        setFilterWithNameAndNumber(filteredwithNumber);
        setshouldFilterNumber(false);
      }
    };
    filterPlanetWithNumber();
  },
  [shouldFilterNumber]);

  function renderPlanets() {
    const usedArray = !FilterWithNameAndNumber ? planets : FilterWithNameAndNumber;
    return (
      Object.values(usedArray).map((planetas, index) => (
        <tr key={ index }>
          <td>{planetas.name}</td>
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
    setFilters({ ...filters,
      filterByNumericValues: {
        column: filterWithNumber.columnSetup,
        comparison: filterWithNumber.comparisonSetup,
        value: filterWithNumber.valueSetup,
      },
    });
    setshouldFilterNumber(true);
  }

  function getNumberSetup({ target }) {
    const { value, name } = target;
    setfilterWithNumber({ ...filterWithNumber,
      [name]: value,
    });
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
          {Object.values(filterNumberOptions).map((number, i) => (
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
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rotação</th>
            <th>Orbital</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Terreno</th>
            <th>Superície da Água</th>
            <th>População</th>
            <th>Residentes</th>
            <th>Filmes</th>
            <th>Criado</th>
            <th>Editado</th>
          </tr>
        </thead>
        <tbody>
          {renderPlanets()}
        </tbody>
      </table>
    </div>);
}
