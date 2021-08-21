import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import useFilter from './hooks/useFilter';
import usePlanets from './hooks/usePlanets';

export const Context = createContext();

function Provider({ children }) {
  const [planets, setPlanets] = usePlanets();
  const [result, setFilter] = useFilter();

  const [state] = useState({
    Planets: [planets, setPlanets],
    Filter: [result, setFilter],
  });

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;
