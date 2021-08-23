import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './context';

function Provider({ children }) {
  const [dados, setDados] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [name, setName] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState();
  const [options, setOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [options2, setOptions2] = useState(['maior que', 'menor que', 'igual a']);

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

  const guardaName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const guardaComparison = (e) => {
    const { value } = e.target;
    setComparison(value);
  };

  const guardaValor = (e) => {
    const { value } = e.target;
    setValor(value);
  };

  const changeFilters = () => {
    const newOptions = options.indexOf(name);
    const newOptions2 = options2.indexOf(comparison);
    const num = -1;
    if (newOptions > num) {
      options.splice(newOptions, 1);
    }
    if (newOptions2 > num) {
      options2.splice(newOptions2, 1);
    }
    setOptions(options);
    setOptions2(options2);
  };

  const Filtrar = () => {
    const dadosFiltrados = dados.filter((dado) => {
      switch (comparison) {
      case 'maior que':
        return (dado[name] > parseFloat(valor));
      case 'menor que':
        return (dado[name] < parseFloat(valor));
      case 'igual a':
        return (dado[name] === valor);
      default:
        return ('error');
      }
    });
    setFiltro(dadosFiltrados);
    changeFilters();
  };

  const store = { dados,
    filtro,
    filterName,
    Filtrar,
    guardaName,
    guardaComparison,
    guardaValor,
    name,
    options,
    options2,
  };

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
