import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import propTypes from 'prop-types';
import { PlanetContext } from '../Context/PlanetContext';

function Remover({ key }) {
  const { handleRemover } = useContext(PlanetContext);
  const butProps = {

    onClick: () => handleRemover(key),
  };
  return (
    <div data-testid="filter">
      <Button type="button" { ...butProps }>X</Button>
    </div>
  );
}

Remover.defaultProps = {
  key: '',
};

Remover.propTypes = {
  key: propTypes.string,
};

export default Remover;
