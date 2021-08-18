import React from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import useData from '../hooks/useData';

function Provider({ children }) {
  const [data, infos, loading] = useData();
  // const [data, setPlanets] = useState([]);
  // const [infos, setInfos] = useState([]);

  // useEffect(() => {
  //   const FetchPlanets = async () => {
  //     const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //     const result = await fetch(url).then((response) => response.json());
  //     setPlanets(result.results);
  //     setInfos(Object.keys(result.results[0]));
  //   };
  //   FetchPlanets();
  // }, []);

  const contextValue = { data, infos, loading };
  return (
    <myContext.Provider value={ contextValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
