import React, { useEffect, useState } from 'react';
import getPlanetsAPIInfo from '../services/planetsAPI';

const Table = () => {
  const [planetsInfos, setPlanetsInfos] = useState([]);

  const getPlanetsInfo = async () => {
    const data = await getPlanetsAPIInfo();
    const { results } = data;
    setPlanetsInfos(results);
  };

  useEffect(() => {
    getPlanetsInfo();
  }, []);

  console.log(planetsInfos[0]);

  return (
    <table>
      <thead>
        <tr>
          {
            // planetsInfos.map(({ name }) => (
            //   <th key={ name }>{ name }</th>
            // ))
          }
        </tr>
      </thead>
    </table>
  );
};

export default Table;
