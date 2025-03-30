import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-lg"><strong>Category:</strong> {recipe.category}</p>
      <p className="text-lg"><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p className="text-lg mt-4"><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
