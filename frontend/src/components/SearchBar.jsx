import { useState } from "react";

const SearchBar = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
    if (!searchInput.trim()) return; // Prevent empty searches

    try {
      const response = await fetch(
        `http://localhost:5000/api/recipes/search?ingredients=${searchInput}`
      );
      const data = await response.json();
      setResults(data); // Update results in the parent component
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border p-2 rounded-l-md w-full"
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
