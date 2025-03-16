import "../styles/Recipes.css";

const Recipes = () => {
  const sampleRecipes = [
    { id: 1, name: "Spaghetti Carbonara" },
    { id: 2, name: "Chicken Adobo" },
    { id: 3, name: "Pancit Canton" },
  ];

  return (
    <div className="recipes-container">
      <h2>Recipes</h2>
      <ul>
        {sampleRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
