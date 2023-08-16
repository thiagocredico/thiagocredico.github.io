const fetchPlanetsAPI = async () => {
  const planets = await (await fetch('https://swapi.dev/api/planets/')).json();
  return planets.results.filter((planet) => delete planet.residents);
};

export default fetchPlanetsAPI;
