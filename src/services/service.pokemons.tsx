
export const GetPokemons = async ({limit,offset}:any) => {
  const resp = await fetch(
    ` https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=${offset}`
  );
  const pokemos = await resp.json();
  return pokemos;
};

export const searchPokemons = async (name:string) => {
  const resp = await fetch(
    ` https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const pokemos = await resp.json();
  return pokemos;
};
