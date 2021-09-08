import React from 'react';
import PropTypes from 'prop-types';
import FilterService,
{ newFilter } from '../Services/FilterService';

const SecondFilterButton = (first, excludedcolum) => {
  const indexofsamestring = -1;
  const options = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const newarray = options.filter(
    (n) => n.indexOf(excludedcolum[0]) === indexofsamestring,
  );
  if (first) {
    return (
      <>
        <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </>
    );
  }
  if (!first) {
    return (
      newarray.map((n, index) => <option key={ index } value={ n }>{n}</option>)
    );
  }
};

export default function SecondFilter(props) {
  const { data, filterused, FilterValues, first } = props;
  const { setfilter, setdata } = props;

  if (!data || !filterused || !FilterValues) {
    return (
      <h1>Loading</h1>
    );
  }
  return (
    <>
      <select
        name="select"
        data-testid="column-filter"
        onChange={ (e) => setfilter(FilterService(0, e.target.value, FilterValues)) }
      >
        {SecondFilterButton(first, filterused)}
      </select>
      <select
        name="select"
        data-testid="comparison-filter"
        onChange={ (e) => setfilter(FilterService(1, e.target.value, FilterValues)) }
      >
        <option value="maior que" selected>maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setfilter(FilterService(2, e.target.value, FilterValues)) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setdata(newFilter(data, FilterValues));
        } }
      >
        filtrar!
      </button>

    </>
  );
}
SecondFilter.propTypes = {
  first: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  FilterValues: PropTypes.string.isRequired,
  filterused: PropTypes.string.isRequired,
  setdata: PropTypes.func.isRequired,
  setfilter: PropTypes.func.isRequired,
};
