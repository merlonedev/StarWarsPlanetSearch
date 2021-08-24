import { useContext } from 'react';
import { Context } from '../Context/Context';

const Filter = ({ name, value }) => {
  const { filter, setFilter } = useContext(Context);
  setFilter({ ...filter, filterByName: { [name]: value } });
};

export default Filter;
