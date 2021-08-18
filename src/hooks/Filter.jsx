import { useContext } from 'react';
import { PlanetContext } from '../Context/PlanetContext';

const Filter = ({ name, value }) => {
  const { filter, setFilter } = useContext(PlanetContext);
  setFilter({ ...filter, filterByName: { [name]: value } });
};

export default Filter;
