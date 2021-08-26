import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';

function Table() {
  const { data } = useContext(MainContext);
  const [tableHeading, setTableHeading] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const array = Object.keys(data[0]);
      setTableHeading(array);
    }
  }, [data]);

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
        {
          data.length && data.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet)
                  .map((feature) => (<td key={ feature }>{ feature }</td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
