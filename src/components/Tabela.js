import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Tabela() {
  const { dataFiltered, data } = useContext(MyContext);
  const loading = <p>Loading...</p>;
  if (data.length === 0) return loading;
  const keys = Object.keys(data[0]).filter((key) => key !== 'residents');
  if (dataFiltered.length === 0) return <p>Nenhum resultado encontrado</p>;
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th
              className="table-categorie"
              key={ index + 1 }
            >
              { key }
            </th>))}
        </tr>
      </thead>
      <tbody>
        {dataFiltered.map((value) => (
          <tr key={ value.name }>
            <td>{value.name}</td>
            <td>{value.rotation_period}</td>
            <td>{value.orbital_period}</td>
            <td>{value.diameter}</td>
            <td>{value.climate}</td>
            <td>{value.gravity}</td>
            <td>{value.terrain}</td>
            <td>{value.surface_water}</td>
            <td>{value.population}</td>
            <td>{value.films}</td>
            <td>{value.created}</td>
            <td>{value.edited}</td>
            <td>{value.url}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

export default Tabela;
