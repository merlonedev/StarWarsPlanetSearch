import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Filters from './filters/Filters';

function Header() {
  const { filters: { filterByNumericValues } } = useContext(AppContext);

  const filterCards = () => {
    const columns = {
      'maior que': '>',
      'menor que': '<',
      'igual a': '=',
    };

    return filterByNumericValues.map(({ column, comparison, value }) => (
      <div key={ `${column}${comparison}${value}` } className="filter-card">
        <p>
          {column}
          {' '}
          {columns[comparison]}
          {' '}
          {value}
        </p>
      </div>
    ));
  };
  return (
    <header className="page-header">
      <div className="title-div">
        <h1 className="title">Star Wars</h1>
        <h3 className="title">Planet Search</h3>
      </div>
      <Filters />
      <div className="filter-cards">
        {filterCards()}
      </div>
    </header>
  );
}

export default Header;
