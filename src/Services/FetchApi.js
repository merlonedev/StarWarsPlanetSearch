export const FetchApi = async () => {
  try {
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const thedata = await fetchApi.json();
    return thedata.results;
  } catch (error) {
    console.log(error);
  }
};

export default FetchApi;
