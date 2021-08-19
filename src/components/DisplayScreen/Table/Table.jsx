import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../../../context/StarWarsPlanetsContext';
import Loading from '../../Loading';

const Table = () => {
  const { data, loading } = useContext(StarWarsPlanetsContext);
  if (loading) {
    return <Loading />;
  }
  const keysWithoutResidents = Object.keys(data[0]).filter((key) => key !== 'residents');
  return (
    <table>
      <thead>
        <tr>
          {keysWithoutResidents.map((key) => <th key={ key }>{ key }</th>)}
        </tr>
      </thead>
      <tbody>
        {data
          .map((planet) => (
            <tr key={ planet.name }>
              {keysWithoutResidents.map((key) => (
                <td key={ planet[key] }>
                  {planet[key]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
