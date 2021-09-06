import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/Context';
import PlanetMap from './PlanetMap';
import SelectCol from './SelectCol';
import SelectComp from './SelectComp';

const filterByNumber = (filtered, filteredData, filterByNumericValues) => {
  const filteredByNumberResults = !filtered ? filteredData
    : filteredData.filter((item) => {
      if (filterByNumericValues.length === 0) return filteredData;
      const { column, value, comparison } = filterByNumericValues[0];
      const itemNumber = parseInt(item[column], 10);
      const valueNumber = parseInt(value, 10);
      switch (comparison) {
      case 'maior que':
        return itemNumber > valueNumber;
      case 'menor que':
        return itemNumber < valueNumber;
      default:
        return itemNumber === valueNumber;
      }
    });
  return filteredByNumberResults;
};

function Table() {
  const {
    data,
    setData,
    filters: {
      filterByName: { name: filteredName },
      filterByNumericValues,
      filtered,
    },
    onChangeHandler,
    handleClickFilter } = useContext(MyContext);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [selectOptions, setSelectOptions] = useState([
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      setData(results);
    };

    getPlanets();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleClick = () => {
    if (filter.value !== '') {
      handleClickFilter(filter);
      setSelectOptions(selectOptions.filter((option) => option.name !== filter.column));
    }
  };

  const filteredData = data.filter((d) => d.name.includes(filteredName));

  const filteredByNumber = filterByNumber(
    filtered, filteredData, filterByNumericValues,
  );

  return (
    <div>
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        onChange={ (e) => onChangeHandler(e) }
      />
      <input
        type="number"
        name="value"
        placeholder="Digite um número"
        data-testid="value-filter"
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick() }
      >
        Aplicar Filtro
      </button>
      <SelectCol options={ selectOptions } onChange={ (e) => handleChange(e) } />
      <SelectComp onChange={ (e) => handleChange(e) } />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotationPeriod</th>
            <th>orbitalPeriod</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surfaceWater</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { filteredByNumber
            .map((CurrentPlanet) => (
              <PlanetMap key={ CurrentPlanet.name } planet={ CurrentPlanet } />
            )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
