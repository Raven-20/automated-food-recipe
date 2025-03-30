const SearchBar = ({ ingredients, setIngredients }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter ingredients..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-2 rounded-l-md w-full"
      />
    </div>
  );
};

export default SearchBar;
