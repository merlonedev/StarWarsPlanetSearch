import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';

function Table() {
  const { data, renderDefault, setRenderDefault, filters } = useContext(MainContext);
  const [tableHeading, setTableHeading] = useState([]);
  const [nameFiltered, setNameFiltered] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const array = Object.keys(data[0]);
      setTableHeading(array);
    }
  }, [data]);

  useEffect(() => {
    const filterPlanetsByName = () => {
      const { filterByName } = filters;
      setNameFiltered(data.filter((p) => p.name.toLowerCase().includes(filterByName)));
      setRenderDefault(false);
    };

    if (data.length) return filterPlanetsByName();
  }, [filters, data, setRenderDefault]);

  function renderAllPlanets() {
    return (
      data.length && data.map((planet) => (
        <tr key={ planet.name }>
          {
            Object.values(planet)
              .map((feature) => (<td key={ feature }>{ feature }</td>))
          }
        </tr>
      ))
    );
  }

  function renderFilteredByName() {
    return (
      nameFiltered.length && nameFiltered.map((planet) => (
        <tr key={ planet.name }>
          {
            Object.values(planet)
              .map((property) => (<td key={ property }>{ property }</td>))
          }
        </tr>
      ))
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeading.map((header) => <th key={ header }>{ header }</th>)
          }
        </tr>
      </thead>
      <tbody>
        { renderDefault ? renderAllPlanets() : renderFilteredByName() }
      </tbody>
    </table>
  );
}

export default Table;
