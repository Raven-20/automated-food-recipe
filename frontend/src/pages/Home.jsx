import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";

const Home = () => {
  const [ingredients, setIngredients] = useState("");  // Stores search input
  const [recipes, setRecipes] = useState([]); // Stores fetched recipes
  const [error, setError] = useState(""); // Stores error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleFindRecipes = async () => {
    if (!ingredients.trim()) return; // Prevent empty searches
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/recipes/search?ingredients=${ingredients}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes. Try again.");
      }

      const data = await response.json();
      setRecipes(data); // Update state with fetched recipes
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page-wrapper">
      <div className="home-content">
        <div className="search-container">
          <h1>Find Delicious Recipes</h1>
          <p>Enter ingredients you have at home and discover amazing recipes.</p>

          {/* SearchBar only collects input and updates state in Home */}
          <SearchBar ingredients={ingredients} setIngredients={setIngredients} />

          <button 
            className={`find-recipes-btn ${loading ? "disabled" : ""}`}
            onClick={handleFindRecipes}
            disabled={loading}
          >
            {loading ? "Searching..." : "Find Recipes"}
          </button>

          {error && <p className="error-message">{error}</p>}

          {/* Display recipes if found */}
          {recipes.length > 0 ? (
            <div className="recipe-results">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-recipes-section">
              <img 
                src="https://via.placeholder.com/300x200?text=No+Recipes+Found"
                alt="No recipes found" 
                className="no-recipes-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
