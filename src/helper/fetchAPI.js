const fetchAPI = async (setData) => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchURL = await fetch(URL);
  const allData = await fetchURL.json();

  setData(allData.results);
};
export default fetchAPI;
