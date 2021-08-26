import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import InputFilter from './InputFilter';
import NumberFilter from './NumberFilter';
import SecondFilter from './SecondFilter';

function Table() {
  const context = useContext(MyContext);
  const { data, planet, secondFilter } = context;
  // console.log('arrayDataTable', data);
  // console.log('testedata', data.results);
  if (data.length > 0) {
    const residents = Object.keys(data[0]).filter((item) => item !== 'residents');
    // console.log('teste', residents);

    return (
      <div>
        <NumberFilter />
        {secondFilter && <SecondFilter />}
        <InputFilter />
        <table>
          <thead>
            <tr>
              {residents.map((teste) => (<th key={ teste }>{ teste }</th>))}
              {/*
              {console.log(residents.map((teste) => (<th key={ teste }>{ teste }</th>)))}
              */}
            </tr>
          </thead>
          {/* Aprendi com a ajuda do Lucas Santos */}
          <tbody>
            {planet.map((nofilter) => (
              <tr key={ nofilter.name }>
                {residents.map((result) => (
                  <td key={ nofilter[result] }>
                    {nofilter[result]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (<p>Loading...</p>);
}

export default Table;
