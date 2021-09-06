import React, { useEffect, useContext } from 'react';
import AppContext from '../AppContext';
import response from '../testData';

function Table() {
  const {
    data,
    setData,
    headers,
    filters,
    setHeaders,
    filteredPlanets,
    setFilteredPlanets,
    numericFilters,
  } = useContext(AppContext);
  useEffect(() => {
    const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    // const getPlanetsData = () => fetch(API_URL)
    //   .then((result) => result.json())
    //   .then((jsonData) => setData(jsonData));
    // getPlanetsData();
    const fetchToTest = async () => {
      const requisition = await fetch(API_URL);
      return requisition;
    };
    fetchToTest();
    const getPlanetsData = async () => {
      const { results } = response;
      results.forEach((result) => delete result.residents);
      await setData(results);
      await setHeaders(Object.keys(results[0]));
    };
    getPlanetsData();
  }, [setData, setHeaders]);

  useEffect(() => {
    const copyData = [...data];
    let lastFilterSelected = [];
    if (numericFilters.length) {
      lastFilterSelected = numericFilters[numericFilters.length - 1];
    }
    const { column, comparison, value } = lastFilterSelected;
    setFilteredPlanets(copyData.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > value;
      } if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      } if (comparison === 'menor que') {
        return Number(planet[column]) < value;
      }
      return copyData;
    }));
  }, [numericFilters, data, setFilteredPlanets]);

  useEffect(() => {
    const copyData = [...data];
    const MENOS_UM = -1;
    function compare(a, b) {
      if (a.name < b.name) {
        return MENOS_UM;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    if (filters.order.name === 'name') {
      const sorteredPlanets = copyData.sort(compare);
      setFilteredPlanets([...sorteredPlanets]);
    } else if (filters.order.name === 'orbital_period') {
      const sorteredPlanets = copyData.sort(
        (a, b) => Number(b.orbital_period) - Number(a.orbital_period),
      );
      setFilteredPlanets([...sorteredPlanets]);
    }
  }, [filters, data, setFilteredPlanets]);

  function renderTableHeaders() {
    return (
      <tr>
        { headers.map((header) => (
          <th
            key={ header }
          >
            { header }
          </th>
        )) }
      </tr>
    );
  }

  function renderPlanetData() {
    return (
      filteredPlanets.map(({
        name,
        rotation_period: rotationPeriod,
        orbital_period: orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        created,
        edited,
        url,
      }) => (
        <tr key={ name }>
          <td data-testid="planet-name">{ name }</td>
          <td>{ rotationPeriod }</td>
          <td>{ orbitalPeriod }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surfaceWater }</td>
          <td>{ population }</td>
          <td>{ films }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td>{ url }</td>
        </tr>
      ))
    );
  }

  return (
    <table>
      <thead>
        {
          renderTableHeaders()
        }
      </thead>
      <tbody>
        {
          renderPlanetData()
        }
      </tbody>
    </table>
  );
}

export default Table;
