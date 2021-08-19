import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Principal() {
  const { contextValu: { data } } = useContext(AppContext);
  const { contextValu: { filters } } = useContext(AppContext);
  const { filterByNumericValues } = filters;
  const { name } = filters.filterByName;

  const montaTr = (planeta, index) => {
    const {
      climate, created, diameter, edited, films, gravity, name: namePlanet,
      orbital_period: orbital, population, rotation_period: rotation,
      surface_water: surface, terrain, url,
    } = planeta;

    const saida = [
      namePlanet, rotation, orbital, diameter, climate, gravity,
      terrain, surface, population, films, created, edited, url,
    ];

    return (
      <tr key={ index }>
        { saida.map((infos, i) => <td key={ i }>{ infos }</td>) }
      </tr>
    );
  };

  const numericFilter = (filtroNumerico, planetas) => {
    const [{ column, comparison, value }] = filtroNumerico;
    let saida = null;
    saida = planetas.filter((planeta) => {
      switch (comparison) {
      case 'maior que':
        return (Number(planeta[column]) > Number(value));
      case 'menor que':
        return (Number(planeta[column]) < Number(value));
      case 'igual a':
        return (Number(planeta[column]) === Number(value));
      default:
        return null;
      }
    });
    return saida;
  };
  const criaLinhas = () => {
    if (name) {
      const buscaPlanetas = data.filter((planeta) => (
        planeta.name.toLowerCase().includes(name)
      ));
      return buscaPlanetas.map((planeta, index) => montaTr(planeta, index));
    }
    if (filterByNumericValues.length > 0) {
      const planetasFiltrados = numericFilter(filterByNumericValues, data);
      return planetasFiltrados.map((result, index) => montaTr(result, index));
    }
    return data.map((result, index) => montaTr(result, index));
  };

  const criaColunas = () => {
    const todasTags = Object.keys(data[0]);
    const tags = todasTags.filter((tag) => tag !== 'residents');
    return tags.map((tag, index) => <th key={ index }>{ tag }</th>);
  };

  return (
    <table>
      <thead>
        <tr>
          {data ? criaColunas() : null}
        </tr>
      </thead>
      <tbody>
        {data ? criaLinhas() : null}
      </tbody>
    </table>
  );
}

export default Principal;
