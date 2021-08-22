const ob = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
const valor = 34;
const v = 11;

ob.filterByNumericValues = [valor];
ob.filterByNumericValues.push(v);
console.log(ob);
