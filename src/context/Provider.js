import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/API';
import context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: { column: '', comparison: '', value: '' },
  });
  const [dataToUse, setDataToUse] = useState([]);
  const [dataToSelect, setDataToSelect] = useState([]);
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    dataToUse,
    setDataToUse,
    dataToSelect,
    setDataToSelect,
  };

  useEffect(() => {
    requestAPI().then(({ results }) => setData(results));
  }, []);

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

// tive que pedir ajuda para meu irmao Eduardo Seije da turma 10A. Ele me explicou o que ele fez e vou subir no github para ver se passa o requisito que eu estava travado antes. Pois ambos os codigos nao passam no teste localmente.

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
