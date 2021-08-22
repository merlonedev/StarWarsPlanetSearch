import React from 'react';
import Context from '../context/Context';
import { headerTable } from '../service/data';
import FilterByNumber from './FilterByNumber';
import FilterByText from './FilterByText';
import FilterNew from './FilterNew';

export default function Home() {
  const { planets, filtered, newFilter } = React.useContext(Context);

  const planetFilteredByText = filtered || planets;

  return (
    <div>
      <FilterByText />
      <FilterByNumber />
      {newFilter && <FilterNew />}
      <table>
        <thead>
          <tr>
            {headerTable.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {planetFilteredByText.map((i, index) => (
            <tr key={ index }>
              <td>{ i.name }</td>
              <td>{ i.rotation_period }</td>
              <td>{ i.orbital_period }</td>
              <td>{ i.diameter }</td>
              <td>{ i.climate }</td>
              <td>{ i.gravity }</td>
              <td>{ i.terrain }</td>
              <td>{ i.surface_water }</td>
              <td>{ i.population }</td>
              <td>{ i.films }</td>
              <td>{ i.created }</td>
              <td>{ i.edited }</td>
              <td>{ i.url }</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

// export default function Home() {
// const { planets, handleFilterPlanetByText, name: value } = React.useContext(Context);
// const { planets, handleFilterPlanetByText, filtered } = React.useContext(Context);

// const filtered = planets.filter(({ name }) => name.toLowerCase().includes(value));
//   const planetFilteredByName = filtered || planets;

//   return (
//     <div>
//       <input
//         data-testid="name-filter"
//         type="text"
//         onChange={ (e) => handleFilterPlanetByText(e) }
//       />
//       <table>
//         <thead>
//           <tr>
//             {headerTable.map((item, index) => <th key={ index }>{ item }</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {planetFilteredByName.map((i, index) => (
//             <tr key={ index }>
//               <td>{ i.name }</td>
//               <td>{ i.rotation_period }</td>
//               <td>{ i.orbital_period }</td>
//               <td>{ i.diameter }</td>
//               <td>{ i.climate }</td>
//               <td>{ i.gravity }</td>
//               <td>{ i.terrain }</td>
//               <td>{ i.surface_water }</td>
//               <td>{ i.population }</td>
//               <td>{ i.films }</td>
//               <td>{ i.created }</td>
//               <td>{ i.edited }</td>
//               <td>{ i.url }</td>
//             </tr>))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
