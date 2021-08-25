import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import propTypes from 'prop-types';
import { Context } from '../Context/Context';

function Remove({ key }) {
  const { removeFilter } = useContext(Context);
  const props = {

    onClick: () => removeFilter(key),
  };
  return (
    <div data-testid="filter">
      <Button type="button" { ...props }>X</Button>
    </div>
  );
}

Remove.defaultProps = {
  key: '',
};

Remove.propTypes = {
  key: propTypes.string,
};

export default Remove;
