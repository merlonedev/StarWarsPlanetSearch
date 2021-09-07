import React, { useContext } from 'react';
import Context from '../context/Context';
import Loading from './Loading';

function Table() {
  const { data, loading, keys, filteredPlanet } = useContext(Context);

  if (loading) return <Loading />;

  return (
    <table>
      <thead>
        <tr>
          {keys.map((el) => (<th key={ el }>{el}</th>))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanet.map((plan) => (
          <tr key={ plan.name }>
            {keys.map((i) => (<td key={ i }>{plan[i]}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
