import React from 'react';
import MyContext from '../Context';

class Table extends React.Component {
  render() {
    return (
      <tbody>
        <MyContext.Consumer>
          {
            (value) => value.filterData.map(({
              name,
              climate,
              rotation_period: rotation,
              orbital_period: orbital,
              diameter,
              gravity,
              terrain,
              surface_water: surface,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ climate }</td>
                <td>{ orbital }</td>
                <td>{ rotation }</td>
                <td>{ gravity }</td>
                <td>{ diameter }</td>
                <td>{ terrain }</td>
                <td>{ surface }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            ))
          }
        </MyContext.Consumer>
      </tbody>
    );
  }
}

export default Table;
