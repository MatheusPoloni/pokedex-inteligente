import { useEffect, useState } from "react";

import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import PokemonDetails from "../components/PokemonDetails";
import AskAI from "../components/AskAI";

import { getPokemon } from "../services/pokeApi";

function Home() {

  const [pokemon, setPokemon] = useState<any>(null);

  const [pokemonName, setPokemonName] = useState("");

async function handleSearch() {
  if (!pokemonName.trim()) return;

  try {
    const data = await getPokemon(pokemonName.toLowerCase());

    setPokemon(data);
  } catch (error) {
    alert("Pokémon não encontrado!");
  }
}

  useEffect(() => {
  async function loadPokemon() {
    try {
      const data = await getPokemon("pikachu");

      setPokemon(data);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
  }

  loadPokemon();
}, []);


  return (
    <div>
      <Title />

      <SearchBar
  value={pokemonName}
  onChange={setPokemonName}
  onSearch={handleSearch}
/>

      <PokemonCard pokemon={pokemon} />

      <PokemonDetails />

      <AskAI />
    </div>
  );
}

export default Home;