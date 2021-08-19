import React, { useContext } from 'react';
import Context from '../../context/Context';
import Filters from '../Filters';
import './style.css';
import UsedFilters from '../Filters/UsedFilters';

const Header = () => {
  const { filters: { filterByNumericValue } } = useContext(Context);

  return (
    <section>
      <header>
        <div className="page-head">
          <img
            src="https://i.pinimg.com/originals/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc.png"
            alt="Darth Vader's Head"
          />
          <div className="page-title">
            <p>Star Wars</p>
            <p>Planet</p>
            <p>Database</p>
          </div>
        </div>
        <Filters />
      </header>
      { filterByNumericValue.length > 0 && <UsedFilters />}
    </section>
  );
};

export default Header;
