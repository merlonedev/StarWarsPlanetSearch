import React, { useContext, useEffect } from 'react';
import Context from '../Context/Context';

function Table() {
  const { data, loading, filter } = useContext(Context);

  // if (loading) return <div>Loading...</div>;

  let planetList = data.map((planet) => {
    delete planet.residents;
    return planet;
  });

  // const { name } = filter.filterByName;
  const { filterByNumericValues, filterByName: { name } } = filter;

  if (name) {
    planetList = planetList
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
  }

  if (filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach((f) => {
      if (f.comparison === 'maior que') {
        planetList = planetList
          .filter((planet) => Number(planet[f.column]) > Number(f.value));
      }
      if (f.comparison === 'menor que') {
        planetList = planetList
          .filter((planet) => Number(planet[f.column]) < Number(f.value));
      }
      if (f.comparison === 'igual a') {
        planetList = planetList
          .filter((planet) => Number(planet[f.column]) === Number(f.value));
      }
    });
    // console.log(planetList);
  }

  useEffect(() => {}, [filterByNumericValues]);

  return loading
    ? <div>Loading...</div>
    : (
      <table>
        <thead>
          <tr>
            { Object.keys(data[0]).map((header, index) => (
              <th key={ index }>{ header }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { planetList.length > 0 && planetList.map((planet, index) => (
            <tr key={ index }>
              { Object.values(planet).map((value, i) => (
                <td key={ i }>
                  { value }
                </td>
              )) }
            </tr>
          )) }
          { planetList.length === 0 && (
            <tr>
              <td>Empty list</td>
            </tr>
          ) }
        </tbody>
      </table>
    );
}

export default Table;
