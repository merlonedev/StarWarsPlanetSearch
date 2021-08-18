import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Loading from '../Loading';
import './style.css';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const columnsTableHead = (data.length > 0)
    && Object.keys(data[0]).filter((key) => key !== 'residents');

  const filterData = () => {
    let filteredData = [...data];
    filteredData = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    console.log('Antes de de filtrar por valores numéricos', filteredData);
    console.log('Array de filtros', filterByNumericValues);
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filteredData = filteredData.filter((planet) => +planet[column] > +value);
        console.log('Entrou no filtro "maior que"', filteredData);
      } else if (comparison === 'menor que') {
        filteredData = filteredData.filter((planet) => +planet[column] < +value);
        console.log('Entrou no filtro "menor que"', filteredData);
      } else if (comparison === 'igual a') {
        filteredData = filteredData.filter((planet) => +planet[column] === +value);
        console.log('Entrou no filtro "igual a"', filteredData);
      }
    });
    console.log('Ao final da filtragem restou', filteredData);
    return filteredData;
  };

  const renderTableHead = () => (
    <thead>
      <tr>
        { columnsTableHead.map((column) => <th key={ column }>{ column }</th>) }
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      { filterData().map((planet) => (
        <tr key={ planet.name }>
          { columnsTableHead.map((column) => <td key={ column }>{ planet[column] }</td>) }
        </tr>
      )) }
    </tbody>
  );

  if (!columnsTableHead) return <Loading />;
  return (
    <table>
      { renderTableHead() }
      { renderTableBody() }
    </table>
  );
};

export default Table;
