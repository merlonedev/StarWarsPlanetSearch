import React, { useEffect, useState } from 'react';
import { useData, useFilter } from '../context/DataContext';
import StarWarsAPI from '../services/StarWarsAPI';

export default function Table() {
  const { data, setData } = useData();
  const { filters } = useFilter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const results = await StarWarsAPI();
      setData(results);
      setLoading(false);
    };
    loadData();
  }, [setData]);

  const filterData = () => {
    const { filterByName, filterByNumericValues: fbnv } = filters;
    const { name: filterName } = filterByName;
    let filteredData = data;
    if (filterName) {
      filteredData = filteredData
        .filter(({ name }) => name.toLowerCase().includes(filterName));
    }
    if (fbnv) {
      fbnv.forEach((e) => {
        switch (e.comparison) {
        case 'maior que':
          filteredData = filteredData
            .filter((item) => (item[e.column] > Number(e.value)));
          break;
        case 'menor que':
          filteredData = filteredData
            .filter((item) => (item[e.column] < Number(e.value)));
          break;
        case 'igual a':
          filteredData = filteredData
            .filter((item) => (Number(item[e.column]) === Number(e.value)));
          break;
        default:
          return filteredData;
        }
      });
    }

    return filteredData;
  };

  if (loading) { return <span> Loading... </span>; }
  const headers = Object.keys(data[0]).filter((head) => head !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {headers.map((head) => (
            <th key={ head }>
              { head }
            </th>))}
        </tr>
      </thead>
      <tbody>
        {filterData().map((planet) => (
          <tr key={ planet.url }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
