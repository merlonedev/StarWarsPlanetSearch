import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Principal() {
  const { contextValu: { data } } = useContext(AppContext);
  const { contextValu: { filters } } = useContext(AppContext);

  const criaLinhas = () => {
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
    if (name) {
      const buscaPlanetas = data.filter((planeta) => (
        planeta.name.toLowerCase().includes(name)
      ));
      console.log(buscaPlanetas);
      return buscaPlanetas.map((planeta, index) => montaTr(planeta, index));
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
