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
  // ARRAY PROS SELECTS
  const categories = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const filterCategories = categories
    .filter((category) => {
      const verifyCategory = filterGeral.filters.filterByNumericValues
        .find((filter) => filter.column === category);
      if (verifyCategory) {
        return false; // false pro filter
      }
      return true;
    });

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
