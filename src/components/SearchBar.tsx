type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
 return (
  <div className="search-container">
    <input
  type="text"
  placeholder="Digite o nome do Pokémon..."
  value={value}
  onChange={(event) => onChange(event.target.value)}
  onKeyDown={(event) => {

    if (event.key === "Enter") {
      onSearch();
    }
  }}
/>

   <button className="button" onClick={onSearch}>
  Buscar
</button>
  </div>
);
}

export default SearchBar;