import React, { useEffect, useContext } from 'react';
import ContextApi from '../Context/ContextApi';

const addFilter = (filterByNumericValues, setData, originalData) => {
  filterByNumericValues.forEach((filtro) => {
    console.log(filtro.comparison);
    const newData = originalData.filter((element) => {
      if (filtro.comparison === 'menor que') {
        return element[filtro.column] < parseInt(filtro.value, 10);
      }
      if (filtro.comparison === 'igual a') {
        return element[filtro.column] === filtro.value;
      }
      if (filtro.comparison === 'maior que') {
        return element[filtro.column] > parseInt(filtro.value, 10);
      }
      return element;
    });
    setData(newData);
  });
};

export default function Table() {
  const { setOriginalData, filter, data, originalData, setData } = useContext(ContextApi);
  const { filterByName: { name }, filterByNumericValues } = filter;

  useEffect(() => {
    if (filterByNumericValues.length >= 1) {
      addFilter(filterByNumericValues, setData, originalData);
    }
  }, [filterByNumericValues, originalData, setData]);

  useEffect(() => {
    const dataNew = originalData.filter((element) => element.name.toLowerCase()
      .includes(name.toLowerCase()));
    setData(dataNew);
  }, [name, originalData, setData]);

  useEffect(() => {
    async function getApi() {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(ENDPOINT).then((dataResult) => dataResult.json());
      setOriginalData(results);
      setData(results);
    }
    getApi();
  }, [setOriginalData, setData]);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
