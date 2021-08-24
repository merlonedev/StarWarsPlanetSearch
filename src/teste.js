let INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: ['a', 'b', 'c'],
};

// INITIAL_STATE = { ...INITIAL_STATE, filterByNumericValues: ['h'] };

// console.log(INITIAL_STATE.filterByNumericValues.splice(0, 1));

INITIAL_STATE = { ...INITIAL_STATE, filterByNumericValues: INITIAL_STATE.filterByNumericValues.splice(0, 2) };

console.log(INITIAL_STATE);
// {
//   filterByName: { name: '' },
//   filterByNumericValues: [ 'a', 'b', 'c' ]
// }

// const filterByNumericValues = ['a', 'b', 'c'];

// filterByNumericValues.splice(0, 1);

// console.log(filterByNumericValues);
