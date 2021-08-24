import React from 'react';
import SearchBar from './components/SearchBar';
import Provider from './contexts/PlanetListProvider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

// const { func } = PropTypes;
// App.propTypes = {
//   setLoading: func,
// };

// App.defaultProps = {
//   setLoading: null,
// };

export default App;
