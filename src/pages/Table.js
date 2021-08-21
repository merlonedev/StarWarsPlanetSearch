import React, { useContext, useEffect } from 'react';
import myContext from '../context/myContext';
import fetchAPI from '../helper/fetchAPI';
import '../styles/Table.css';

function Table() {
  const { data, setData } = useContext(myContext);

  useEffect(() => {
    fetchAPI(setData);
  }, [setData]);

  return (
    <table>
      {/* {data.map((info, index) => (
        <tr>
        </tr>
      ))}
      <tr>
        {data.map((info) => (
          <td key={ info.name }>
            {Object.values(info)}
          </td>
        ))}
      </tr> */}
    </table>
  );
}

export default Table;
