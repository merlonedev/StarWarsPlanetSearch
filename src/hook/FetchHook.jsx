const FetchHook = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  let result = await fetch(endpoint);
  result = await result.json();
  result = result.results;
  const filter = Object.values(result).map((e) => {
    delete e.residents;
    return e;
  });
  return (filter);
};

export default FetchHook;
