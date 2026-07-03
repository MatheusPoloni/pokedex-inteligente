type PokemonCardProps = {
  pokemon: any;
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
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>

      <p>Altura: {pokemon.height}</p>

      <p>Peso: {pokemon.weight}</p>
    </div>
  );
}

export default PokemonCard;