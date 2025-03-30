const express = require("express");
const Recipe = require("../models/Recipe");

const router = express.Router();

// Fetch recipes based on ingredients
router.get("/search", async (req, res) => {
  try {
    const { ingredients } = req.query;

    if (!ingredients) {
      return res.status(400).json({ error: "No ingredients provided" });
    }

    // Convert ingredients into a trimmed, lowercase array
    const ingredientList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim().toLowerCase());

    // Find recipes that contain **all** the provided ingredients
    const recipes = await Recipe.find({
      ingredients: { $all: ingredientList },
    });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found" });
    }

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

module.exports = router;
