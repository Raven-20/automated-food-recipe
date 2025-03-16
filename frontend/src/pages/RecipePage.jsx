import { useEffect } from "react";

const RecipePage = () => {
  useEffect(() => {
    document.title = "Recipe Page"; // Updates tab title
  }, []);

  return (
    <div className="recipe-container">
      <h1>Recipe Page</h1>
      <p>Find delicious recipes based on your ingredients!</p>
    </div>
  );
};

export default RecipePage;
