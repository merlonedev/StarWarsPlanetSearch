import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [requisitionError, setRequisitionError] = useState();

  const ContextValue = {
    data,
    setData,
    headers,
    setHeaders,
    requisitionError,
    setRequisitionError };

  return (
    <AppContext.Provider value={ ContextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
