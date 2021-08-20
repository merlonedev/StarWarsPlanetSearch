import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';

const Table = () => {
  const { filtred, dataHeader } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>{ dataHeader.map((title) => <th key={ uuidv4() }>{ title }</th>) }</tr>
      </thead>
      {/* Para esta parte consultei o repositório de Diogo Santana em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/21/files */}
      <tbody>
        {
          filtred.map((planet) => ( // passa por todos os itens do array com planetas.
            // não existe 'name' igual
            <tr key={ planet.name }>
              {
                dataHeader.map((info) => ( // passa pelo array que contêm somente o title da tabela. Cada título corresponde à chave que se quer acessar no array com os planetas. Ex.: planet[name] "trás o nome do planeta", planet[rotation_period] "trás o valor da órbita". Cada linha trás essas informações de cada planeta.
                  <td key={ uuidv4() }>{ planet[info] }</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
