import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './context';

function Provider({ children }) {
  const [dados, setDados] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const resultado = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
          .then((r) => r.json());
        setDados(resultado.results);
        setFiltro(resultado.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDados();
  }, []);

  const filterName = (e) => {
    const { value } = e.target;
    const dadosFiltrados = dados.filter(
      (dado) => dado.name.toLowerCase().includes(value),
    );
    setFiltro(dadosFiltrados);
  };

  const store = { dados, filtro, filterName };

  return (
    <MyContext.Provider value={ store }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.object,
}).isRequired;

export default Provider;
