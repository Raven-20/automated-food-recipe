import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

const Home = () => {
  const [ingredients, setIngredients] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Find Recipes by Ingredients</h1>
      <SearchBar ingredients={ingredients} setIngredients={setIngredients} />
    </div>
  );
};

export default Home;
