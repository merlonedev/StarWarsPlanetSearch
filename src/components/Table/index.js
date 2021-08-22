import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext/PlanetsContext';

export default function Table() {
  const { data } = useContext(PlanetsContext);
  const [tableHeader, setTableHeader] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const tableHeaderArr = Object.keys(data[0]);
      setTableHeader(tableHeaderArr);
    }
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeader.map((header) => <th key={ header }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.length && data.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet)
                  .map((feature) => (<td key={ feature }>{feature}</td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
