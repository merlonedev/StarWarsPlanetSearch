import React, { useContext } from 'react';
import MyContext from '../context/Context';

const LOADING_IMG_URL = 'https://lh3.googleusercontent.com/GycGYWfgDpOZm-W_hAeCcEDcLvKNOKa3H4bppWdl2CQvvcAZOGCPLmCChYxpmyhCX0WIuZehKA-jatnz=s1600';

export default function Table() {
  const value = useContext(MyContext);
  const { planetList, headerArray } = value;

  if (!planetList.length > 0) {
    return (
      <div>
        <h3>Rastrendo dados intergaláticos...</h3>
        <img src={ LOADING_IMG_URL } alt="Stormtroppers" />
      </div>
    );
  }

  // Table feita com ajuda do Lucas Santos - Turma 12
  return (
    <table>
      <thead>
        <tr>
          { headerArray.map((item) => <th key={ item }>{ item }</th>) }
        </tr>
      </thead>
      <tbody>
        { planetList.map((planets) => (
          <tr key={ planets.name }>
            { headerArray.map((header) => <td key={ header }>{ planets[header] }</td>) }
          </tr>
        )) }
      </tbody>
    </table>

  );
}
