import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Loading from '../Loading';
import './style.css';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  console.log(useContext(StarWarsContext));
  console.log(data);
  const columns = (data.length > 0)
    && Object.keys(data[0]).filter((key) => key !== 'residents');

  const renderTableHead = () => (
    <thead>
      <tr>
        { columns.map((column) => <th key={ column }>{ column }</th>) }
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      { data.map((planet) => (
        <tr key={ planet.name }>
          { columns.map((column) => <td key={ column }>{ planet[column] }</td>) }
        </tr>
      )) }
    </tbody>
  );

  if (!columns) return <Loading />;
  return (
    <table>
      { renderTableHead() }
      { renderTableBody() }
    </table>
  );
};

export default Table;
