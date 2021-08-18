import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Table = () => {
  const { planets } = useContext(MyContext);

  return (
    <section>
      <div> oi </div>
      {console.log(planets)}
    </section>
  );
};

export default Table;
