import type { Pokemon } from "../types/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon | null;
};

function PokemonCard({ pokemon }: PokemonCardProps) {
  if (!pokemon) {
    return (
      <div>
        <h2>Nenhum Pokémon selecionado</h2>
      </div>
    );
  }

  return (
  <div className="pokemon-card">
    <p className="pokemon-id">
  #{pokemon.id.toString().padStart(3, "0")}
</p>
    <img
      className="pokemon-image"
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
    />

    <h2>{pokemon.name.toUpperCase()}</h2>

    <p className="pokemon-type">
      {pokemon.types.map((item) => item.type.name).join(" • ")}
    </p>

    <div className="pokemon-info">
      <div className="info-box">
        <span>📏 Altura</span>
        <strong>{pokemon.height}</strong>
      </div>

      <div className="info-box">
        <span>⚖️ Peso</span>
        <strong>{pokemon.weight}</strong>
      </div>
    </div>
  </div>
);
}

export default PokemonCard;