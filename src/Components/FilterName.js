import React, { useContext } from 'react';
import { context } from '../Context/Context';

const FilterName = () => {
  const { filter, setFilter } = useContext(context);
  const { filterByName: { name } } = filter;

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <section>
      <div>
        <input
          data-testid="name-filter"
          placeholder="Digite o nome do planeta"
          value={ name }
          onChange={ handleChange }
        />
      </div>
    </section>
  );
};

export default FilterName;
