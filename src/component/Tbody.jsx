import React from 'react';
import Request from '../hooks/FetchAPI';

const Tbody = () => {
  const [data] = Request();
  if (data.length) {
    const keysTrashOfTable = Object.keys(data[0]);
    const itensTable = keysTrashOfTable.filter((item) => item !== 'residents');
    return (
      <tbody>
        { data.map((list) => (
          <tr key={ list.name }>
            { itensTable
              .map((item) => <td key={ item }>{list[item]}</td>)}
          </tr>
        )) }
      </tbody>
    );
  }
  return <p>Loading</p>;
};

export default Tbody;
