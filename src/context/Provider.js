import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: '',
  });
  // Requisitos 3 e 4 feitos com a ajuda dos colegas Cristiano e Sérgio.
  const ArrayColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [columns, setColumns] = useState(ArrayColumns);
  const [filteredArray, setFilteredArray] = useState([]);
  const [arraySelectedObj, setArraySelectedObj] = useState([]);

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: value,
    });
  };

  useEffect(() => {
    const ArrayFilterName = data.filter((result) => result
      .name.toLowerCase().includes(filters.filterByName.toLowerCase()));
    setFilteredArray(ArrayFilterName);
  }, [data, filters.filterByName]);

  useEffect(() => {
    let newArray = [...data];
    function numericFilters({ column, comparison, value }) {
      if (comparison === 'maior que') {
        const maiorque = newArray.filter((planet) => +planet[column] > +value);
        setFilteredArray(maiorque);
        newArray = maiorque;
      }
      if (comparison === 'menor que') {
        const menorque = newArray.filter((planet) => +planet[column] < +value);
        setFilteredArray(menorque);
        newArray = menorque;
      }
      if (comparison === 'igual a') {
        const iguala = newArray.filter((planet) => +planet[column] === +value);
        setFilteredArray(iguala);
        newArray = iguala;
      }
    }
    arraySelectedObj.forEach((item) => numericFilters(item));
  }, [data, arraySelectedObj]);

  useEffect(() => {
    const getApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(url).then((response) => response.json());
      setData(results.results);
    };
    getApi();
  }, []);

  const handleClick = (obj) => {
    const ArrayObj = [...arraySelectedObj, obj];
    setArraySelectedObj(ArrayObj);
    const mapArray = ArrayObj.map((item) => item.column); // Essa const retorna um array de string com os columns selecionados.
    const selectedColumn = ArrayColumns.filter((item) => !mapArray.includes(item));
    setColumns(selectedColumn);
  };

  const context = {
    data,
    setData,
    filters,
    setFilters,
    handleClick,
    filteredArray,
    handleChangeName,
    columns,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
