import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export async function getPokemon(name: string) {
  const response = await api.get(`/pokemon/${name}`);

  return response.data;
}

export default api;