import React, { useContext } from 'react';
// import getPlanetsAPIInfo from '../services/planetsAPI';
import AppContext from '../context/AppContext';

function Table() {
  const { planetsInfos, isFetching } = useContext(AppContext);

  const renderHeader = () => {
    console.log(planetsInfos);
    if (planetsInfos.length) {
      delete planetsInfos[0].residents;
      const tableTitles = Object.keys(planetsInfos[0]);
      return tableTitles.map((title) => (
        <th key={ title }>{ title }</th>
      ));
    }
  };

  const renderBody = () => {
    if (planetsInfos.length) {
      return planetsInfos.map((planetInfo, index) => {
        delete planetInfo.residents;
        const planetInfoValue = Object.values(planetInfo);
        return (
          <tr key={ index }>
            {
              planetInfoValue.map((info, index2) => (
                <td key={ index2 }>{ info }</td>
              ))
            }
          </tr>
        );
      });
    }
  };

  if (isFetching) return <span>carregando...</span>;

  return (
    <table>
      <thead>
        <tr>
          {
            renderHeader()
          }
        </tr>
      </thead>
      <tbody>
        {
          renderBody()
        }
      </tbody>
    </table>
  );
}

export default Table;
