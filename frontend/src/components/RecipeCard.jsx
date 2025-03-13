import React from "react";
import "../styles/RecipeCard.css"; // Import the CSS file

const RecipeCard = ({ name, image }) => {
  return (
    <div className="recipe-card">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default RecipeCard;
