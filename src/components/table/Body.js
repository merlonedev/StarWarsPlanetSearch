import React, { useContext } from 'react';
import context from '../../context/PlanetContext';
import './Table.css';

export default function Body() {
  const { data, filters } = useContext(context);
  const { filterByName: { name } } = filters;
  // Forma mais clean e eficiente para chamar as colunas da API
  const getColumns = (data.length > 0)
   && Object.keys(data[0]).filter((key) => key !== 'residents');

  const filterInput = () => {
    // A lógica a seguir foi extraida deste tutorial
    // Fonte: https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=326s

    const lowerCaseName = name.toLowerCase();
    const filterByName = data
      .filter((planet) => planet.name.toLowerCase().includes(lowerCaseName));

    return (
      <tbody className="table-container__body">
        { filterByName.map((item) => (
          <tr key={ item.name }>
            { getColumns.map((column) => <td key={ column }>{ item[column] }</td>)}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <>
      { filterInput() }
    </>
  );
}
