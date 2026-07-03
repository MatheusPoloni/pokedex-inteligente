type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <button onClick={onSearch}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;