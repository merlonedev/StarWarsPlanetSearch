// vitals
import React, { useContext } from 'react';
import myContext from '../context/myContext';
// context

function Table() {
  const { data, filters: { filterByName } } = useContext(myContext);

  if (!data.length) return <h1>Loading...</h1>;

  const newData = [...data];
  newData.forEach((deleted) => delete deleted.residents);
  const applyFilters = newData.filter((chosen) => chosen.name.includes(filterByName));

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(applyFilters[0])
            .map((header) => (
              <th key={ header }>
                {header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(applyFilters)
          .map((body) => (
            <tr key={ body }>
              {Object.values(body)
                .map((eachPlanet) => (
                  <td key={ eachPlanet }>
                    {eachPlanet}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
