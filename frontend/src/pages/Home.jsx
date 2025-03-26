import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [ingredients, setIngredients] = useState('');

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleAddIngredient = () => {
    // Future implementation for adding ingredients
  };

  const handleFindRecipes = () => {
    // Future implementation for finding recipes
  };

  return (
    <div className="home-page-wrapper">
      <div className="home-content">
        <div className="search-container">
          <h1>Find Delicious Recipes</h1>
          <p>Enter ingredients you have at home and discover amazing recipes you can make right now.</p>

          <div className="ingredient-search">
            <input 
              type="text" 
              className="ingredient-input"
              placeholder="Enter an ingredient..."
              value={ingredients}
              onChange={handleIngredientChange}
            />
            <button 
              className="add-ingredient-btn"
              onClick={handleAddIngredient}
            >
              <span>+</span> Add
            </button>
          </div>

          <button 
            className="find-recipes-btn"
            onClick={handleFindRecipes}
          >
            Find Recipes
          </button>
        </div>

        <div className="no-recipes-section">
          <img 
            src="/api/placeholder/300/200" 
            alt="No recipes found" 
            className="no-recipes-image"
          />
          <p className="no-recipes-title">No recipes found</p>
          <p className="no-recipes-description">
            Try adjusting your filters or adding different ingredients to find more recipes.
          </p>
          <button className="show-filters-btn">
            Show Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;