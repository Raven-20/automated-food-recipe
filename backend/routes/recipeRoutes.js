const express = require("express");
const Recipe = require("../models/Recipe");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Multer Setup
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// 📌 Route to Add a New Recipe
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, ingredients, instructions, category } = req.body;
    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const imageUrl = `/uploads/${req.file.filename}`;

    const newRecipe = new Recipe({ name, ingredients: ingredients.split(","), instructions, imageUrl, category });
    await newRecipe.save();

    res.status(201).json({ message: "Recipe added successfully!", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: "Failed to add recipe" });
  }
});

// 📌 Route to Fetch All Recipes
router.get("/all", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

module.exports = router;
