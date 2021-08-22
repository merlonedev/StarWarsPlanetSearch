// import React, { useContext } from 'react';
// import SWContext from '../context/SWContext';

// function FilterNumber() {
//   const { setNumberFilters } = useContext(SWContext);

//   const handleNumbers = () => {
//     const valueColumn = document.getElementById('column-filter').value;
//     const valueComparison = document.getElementById('comparison-filter').value;
//     const valueNumber = document.getElementById('filter-number').value;

//     setNumberFilters({
//       filterByNumericValues: [
//         {
//           column: valueColumn,
//           comparison: valueComparison,
//           value: valueNumber,
//         },
//       ],
//     });
//   };

//   const style = { display: 'flex' };

//   const renderSelects = () => (
//     <form style={ style }>
//       <div>
//         <label htmlFor="column-filter">
//           Select column:
//           <select
//             name="select-column"
//             id="column-filter"
//             data-testid="column-filter"
//           >
//             <option value="population">population</option>
//             <option value="orbital_period">orbital_period</option>
//             <option value="diameter">diameter</option>
//             <option value="rotation_period">rotation_period</option>
//             <option value="surface_water">surface_water</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <select
//           name="select-comparison"
//           id="comparison-filter"
//           data-testid="data-testid='comparison-filter"
//         >
//           <option value="maior que">maior que</option>
//           <option value="menor que">menor que</option>
//           <option value="igual a">igual a</option>
//         </select>
//         <input
//           id="filter-number"
//           placeholder="enter number"
//           type="number"
//         />
//         <button type="button" onClick={ handleNumbers }>search</button>
//       </div>
//     </form>
//   );

//   return (
//     renderSelects()
//   );
// }

// export default FilterNumber;
