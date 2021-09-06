import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/Context';
import PlanetMap from './PlanetMap';

function Table() {
  const {
    data,
    setData,
    filters: { name: filteredName },
    onChangeHandler } = useContext(MyContext);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      setData(results);
    };

    getPlanets();
  }, []);

  const filteredData = data.filter((d) => d.name.includes(filteredName));

  return (
    <div>
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        onChange={ (e) => onChangeHandler(e) }
      />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotationPeriod</th>
            <th>orbitalPeriod</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surfaceWater</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { filteredData
            .map((CurrentPlanet) => (
              <PlanetMap key={ CurrentPlanet.name } planet={ CurrentPlanet } />
            )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
