import React, { useContext } from 'react';
import Loading from './Loading';
import Loaded from './Loaded';
import Context from '../context/context';

function Main() {
  const { globalState: { loading } } = useContext(Context);
  return (
    <div>
      { loading ? <Loading /> : <Loaded />}
    </div>
  );
}

export default Main;
