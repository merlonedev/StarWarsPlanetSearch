import React, { useContext } from 'react';
import Context from '../Context/Context';
import Input from './Input';

function FilterNameForm() {
  const { state } = useContext(Context);
  const { filter, setFilter } = state;

  if (filter === undefined) return <div>loading...</div>;

  const handleFilterName = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: target.value,
      },
    });
  };

  const { name } = filter.filterByName;

  return (
    <form>
      <Input
        labelText="Name: "
        type="text"
        name="filterName"
        id="filterName"
        dataTestid="name-filter"
        value={ name }
        func={ handleFilterName }
      />
    </form>
  );
}

export default FilterNameForm;
