import React, { useState, useContext } from 'react';
import issContent from '../Content/ISSContent';

function CreateFilter() {
  const { filterGeral, setFilterGeral } = useContext(issContent); // vem do ESTADO GLOBAL.

  const filterByNumericValues = { // vou jogar isso no ESTADO LOCAL. Os nomes confundem muito. Esse aqui é pro estado local.
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  };

  const [filters, setFiltro] = useState(filterByNumericValues); // aqui esse filters É UM ESTADO LOCAL. NÃO CONFUNDA ESSE filters local COM O filters DO ESTADO GLOBAL.

  const handleChange = ({ target }) => {
    setFilterGeral({ filters: { ...filterGeral.filters, filterByName: target.value } });
  }; // quando eu digitar no primeiro input, eu quero atualizar meu estado GLOBAL, atualizar o filterByName. Faço spread pra não sobrescrever o que tinha antes.

  const changeInputs = ({ target }, tipo) => { // Essa função vale pra 2 selects e o último input no meu HTML. AQUI ATUALIZO O ESTADO LOCAL***
    let valor = target.value;
    if (tipo === 'value') { valor = target.value.replace(/[^0-9]/, ''); } // pega o que não é número, e substitua por ''
    return setFiltro({
      filterByNumericValues: { // esse é do local,não do global.
        ...filters.filterByNumericValues, [tipo]: valor,
      }, // quando seleciono algo nos 2 selects ou digito algo no último input, atualizo o estado LOCAL(bynumericvalues LOCAL) com o que selecionei ou digitei. obs: Antes do novo valor([tipo]:valor), eu uso o spread pra não sobrescrever o que tinha antes.
    });
  };
  // LEMBRANDO: Com a handleChange, eu atualizo diretamente o estado Global. Com a changeInputs, eu atualizo o estado Local. A função abaixo é pra jogar as infos do LOCAL para o GLOBAL
  const handleClick = () => {
    setFilterGeral({ filters: {
      ...filterGeral.filters,
      filterByNumericValues: // agora atualizo
      [...filterGeral.filters.filterByNumericValues, filters.filterByNumericValues], // filters é estado LOCAL.
    } }); // quando eu clico no botão, eu pego bynumericvalues do LOCAL e atualizo no bynumericvalues do ESTADO GLOBAL
    // uso esses spreads todos pra não sobrescrever o que já tinha antes no estado global.
  };
  // Deixei em array pra fazer filtros e excluir os repetidos, Requisito 4 pede. Lá no return eu irei fazer um map dentro do select do filtro 2 e vou renderizar as options.
  const categories = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  // ******** EXPLICAÇÕES SOBRE A LÓGICA ABAIXO(ELA É FUNDAMENTAL). No filterCategories abaixo eu quero APENAS os elementos(dentro da const categories) que eu ainda não selecionei no input column(data testid = filter2). Se eu seleciono um "population" na primeira filtragem, na próxima filtragem o "population" deve sumir do select.
  // Aí faço um filter da const categories. Quero passar o que tem dentro desta const pra const filterCategories, PORÉM, pra passar, precisa passar pelo filter.
  // Na linha 47, eu uso o filterGeral.filters.filterByNumericValues PRA PEGAR INFORMAÇÃOES DO ESTADO GLOBAL. LÁ VAI TER O VALOR DA(S) FILTRAGEM(S) ANTERIOR(ES). Por consequência, vai ter também o valor de column pra fazer o find e ver se encontra um element(dentro dos valores de column no estado global) que seja igual ao que eu coloquei dentro da const categories.
  // Daí tem que fazer um IF(linha 50): a const verifyCategory recebe essa HOF FIND aplicada no filterByNumericValues do estado G. Se essa const for True, quer dizer que o FIND encontrou um element no estado global em que sua column seja  seja idêntica à category em questão. Ou seja, é algo que JÁ FOI SELECIONADO ANTES no select column(filtro 2).Nesse caso, RETORNO FALSO, porque eu não quero essa category passando no filter e entrando no filterCategories.
  // Se verifyCategory for false, quer dizer que a HOF FIND não encontrou no estado Global elementos com o valor Column iguais ao category em questão, aí RETORNA TRUE, e aí pode entrar no filterCategories, pq aí eu sei que não é um category que eu já cliquei antes.
  const filterCategories = categories
    .filter((category) => { // passa no filter os category em que o verifyCategory for false
      const verifyCategory = filterGeral.filters.filterByNumericValues
        .find((element) => element.column === category); // Element vai ser cada um dos filterByNumericValues que tiver no estado Global. Mas aí eu quero checar apenas o column(por isso o element.column). Daí vai ver se acha um elemento do estado global em que o valor de column seja igual à category
      if (verifyCategory) { // se for true o FIND dentro dessa const.....
        return false; // aí é false pro Filter da linha 49
      } // se for false o FIND dentro da const......
      return true; // aí passa no filtro
    });
    // Repetindo pra ficar exaustivo = Se eu seleciono 'diameter' como o valor do filtro2. Quando eu clicar no botão "Adicione Filtro", eu vou mandar esse filtro pro estado global. No próximo filtro, o código vai fazer o FIND e vai encontrar lá no estado G. o valor da column = 'diameter. Por isso 'diameter' não vai entrar de novo no filterCategories, e por isso não será renderizado pelo map da linha 73/74.
    // OBS: Na primeira filtragem, TUDO que tiver dentro da const categories vai entrar no filterCategories, porque como é a primeira, não foi feita nenhuma filtragem antes. Por isso, o FIND não vai achar nada no estado global em que o column seja igual a algum category. Por isso, todos passam pelo filtro, pq verifyCategory não vai dar true.

  return (
    <form>
      <label htmlFor="filtro">
        <input
          id="filtro"
          onChange={ handleChange }
          type="text"
          data-testid="name-filter"
          placeholder="Digite um nome de planeta"
        />
      </label>
      <label htmlFor="filtro2">
        <select data-testid="column-filter" onChange={ (x) => changeInputs(x, 'column') }>
          {
            filterCategories
              .map((category) => <option key={ category }>{category}</option>)
          }

        </select>
      </label>
      <label htmlFor="filtro3">
        <select
          data-testid="comparison-filter"
          onChange={ (x) => changeInputs(x, 'comparison') }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="filtro4">
        <input
          data-testid="value-filter"
          type="text"
          onChange={ (x) => changeInputs(x, 'value') }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
        disabled={ filters.filterByNumericValues.value === '' }
      >
        Adicione o Filtro
      </button>
    </form>

  );
}

export default CreateFilter;
