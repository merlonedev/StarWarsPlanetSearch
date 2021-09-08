import React, { useContext } from 'react';
import ContextApi from '../context/ContextApi';

function DeleteBtn() {
  const { filterByNumericValue, setFilterByNumericValue } = useContext(ContextApi);
  const { index } = props;

  return (
    <button
      type="button"
      onClick={ () => {
        setFilterByNumericValue(
          filterByNumericValue.filter((_item, itemIndex) => itemIndex !== index),
        );
      } }
    >
      x
    </button>
  );
}

export default DeleteBtn;

DeleteBtn.propTypes = {
  index: string.isRequired,
};
