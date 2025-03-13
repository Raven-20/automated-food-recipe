import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import "../styles/Home.css";

const Home = () => {
  const [ingredients, setIngredients] = useState("");

  const popularSearches = ["Chicken Curry", "Pasta Carbonara", "Vegan Salad", "Beef Stew"];
  const recentlyViewed = [
    { name: "Spaghetti Bolognese", image: "spaghetti.jpg" },
    { name: "Caesar Salad", image: "caesar.jpg" }
  ];

  return (
    <div className="home-container">
      <h1>Find Recipes by Ingredients</h1>
      <SearchBar ingredients={ingredients} setIngredients={setIngredients} />

      {/* Popular Searches */}
      <h2>Today's Popular Searches</h2>
      <div className="popular-searches">
        {popularSearches.map((item, index) => (
          <button key={index} className="popular-btn">{item}</button>
        ))}
      </div>

      {/* Recently Viewed Recipes */}
      <h2>Recently Viewed Recipes</h2>
      <div className="recently-viewed">
        {recentlyViewed.map((recipe, index) => (
          <RecipeCard key={index} name={recipe.name} image={recipe.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
