import React, { useContext } from 'react';
import Context from '../../context/Context';

function TableBody() {
  const { data, dataError } = useContext(Context);

  return (!dataError
    && (
      <tbody>
        {
          data.map((planet, i) => (
            <tr key={ i }>
              {
                Object.keys(planet).map((column, j) => (
                  <td key={ j }>{ planet[column] }</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    )
  );
}

export default TableBody;
