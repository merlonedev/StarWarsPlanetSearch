import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './Components/Table';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <header>Star Wars Planets Search</header>
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
