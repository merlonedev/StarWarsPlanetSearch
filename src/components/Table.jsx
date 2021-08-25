import React, { useEffect, useContext } from 'react';
import AppContext from '../AppContext';
import response from '../testData';

function Table() {
  const { data, setData, headers, setHeaders } = useContext(AppContext);
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
      data.map(({
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
          <td>{ name }</td>
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
