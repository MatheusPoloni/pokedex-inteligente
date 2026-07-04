import type { Pokemon } from "../types/pokemon";

import { useEffect, useState } from "react";

import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import AskAI from "../components/AskAI";

import { getPokemon } from "../services/pokeApi";

function Home() {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [pokemonName, setPokemonName] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

async function handleSearch() {
  if (!pokemonName.trim()) return;

  setLoading(true);
  setError("");

  try {
    const data = await getPokemon(pokemonName.toLowerCase());

    setPokemon(data);
  } catch (error) {
    setPokemon(null);
    setError("Pokémon não encontrado!");
  } finally {
    setLoading(false);
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
  <div className="container">
      <Title />

      <SearchBar
  value={pokemonName}
  onChange={setPokemonName}
  onSearch={handleSearch}
/>

{loading ? (
  <p className="loading">Carregando...</p>
) : error ? (
  <p className="error">{error}</p>
) : (
  <PokemonCard pokemon={pokemon} />
)}

      <AskAI pokemon={pokemon} />
      
    </div>
  );
}

export default Home;