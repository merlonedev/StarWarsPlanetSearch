import React, { useContext } from 'react';
import Context from '../../context/Context';

function TableHeader() {
  const { data, dataError } = useContext(Context);

  return (data.length > 0 && !dataError
    && (
      <thead>
        <tr>
          {
            Object.keys(data[0]).map((header, index) => (
              <th key={ index }>{ header }</th>
            ))
          }
        </tr>
      </thead>
    )
  );
}

export default TableHeader;
