import React/* , { useContext }  */from 'react';
// import Context from '../context/Context';

// filters: { filterByName: { name } }

function InputFilter() {
  // const { filters, setFilters } = useContext(Context);
  // const { filterByName: { name } } = filters;

  // function handleChange({ target }) {
  //   setFilters({
  //     filters: {
  //       ...setFilters,
  //       filterByName: { name: target.value },
  //     },
  //   });
  // }

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        // value={ name }
        // onChange={ handleChange }
        placeholder="planet name"
      />
    </div>
  );
}

export default InputFilter;
