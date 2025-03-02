const SearchBar = ({ ingredients, setIngredients }) => {
    const handleSearch = () => {
      console.log("Searching recipes for:", ingredients);
    };
  
    return (
      <div className="flex">
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Find Recipes
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  