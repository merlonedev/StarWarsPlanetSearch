import React, { useContext } from 'react';
import fetchAPI from '../helper/fetchAPI';

function Table() {
  const { setData } = useContext(context);

  useEffect(() => {
  }, []);
  fetchAPI(setData);
}

export default Table;
