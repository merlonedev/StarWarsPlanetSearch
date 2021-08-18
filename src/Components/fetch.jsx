import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import issContent from '../Content/ISSContent';

const { Provider } = issContent; // com essa desconstrução, eu aciono o provider que veio do context lá em issContent

function GetDataPlanets({ children }) {
  const [filterGeral, setFilterGeral] = useState({
    filters: {
      filterByName: '',
      filterByNumericValues: [],
    },
  }); // filterGeral é um estado global, e ele começa com esse filters e essas chaves todas. Começa tudo vazio.

  const [data, setData] = useState([]); // data é outro estado global e começa com um [] vazio

  useEffect(() => { // faz aqui a requisição e dessa forma
    function getPlanets() {
      return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
    }
    getPlanets().then(({ results }) => setData(results));
  }, []); // Usando o useEffect(função, [] vazio) dessa forma eu simbolizo o componentDidMount. Ao começar a página, eu faço a requisição da api, converto pra json, e logo depois eu ATUALIZO o estado G. data.

  return ( // esse  é o Retorno da função GetDataPlanets.
    <Provider value={ { data, setFilterGeral, filterGeral } }>
      { children }
    </Provider>
  ); // esse children é fundamental. Eu uso ele pra definir(no App.js) quem serão os filhos que poderão consumir os estados globais que eu coloquei aqui neste arquivo.
}

GetDataPlanets.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};
export default GetDataPlanets;
