import { pokeAPI } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  
  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${nameOrId}`);

  // Optimización del objeto con solo la data que se requiere
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  
};
