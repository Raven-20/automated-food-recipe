import React from "react";
import { Link } from "react-router-dom";
import "../styles/RecipeCard.css"; // Import the CSS file

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="recipe-image"
      />
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.name}</h3>
        <p className="recipe-category">{recipe.category}</p>
        <p className="recipe-time"><strong>⏳ {recipe.time}</strong></p>
        <p className={`recipe-difficulty ${recipe.difficulty.toLowerCase()}`}>
          {recipe.difficulty}
        </p>
        <Link to={`/recipe/${recipe._id}`} className="recipe-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
